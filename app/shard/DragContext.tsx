"use client";

import { groq } from "next-sanity";
import React, { useEffect } from "react";
import { client } from "../../lib/sanity.client";

type Drag = {
  overId: string;
  cache: number[];
};

const query = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const DragContext = React.createContext<
  [Drag, React.Dispatch<React.SetStateAction<Drag>>] | undefined
>(undefined);

export function DragProvider({ children }: { children: React.ReactNode }) {
  const [drag, setDrag] = React.useState<Drag>({
    overId: "",
    cache: [],
  });

  useEffect(() => {
    (async () => {
      const posts = await client.fetch(query);
      setDrag({ ...drag, cache: posts.map(() => 0) });
    })();
  }, []);

  return (
    <DragContext.Provider value={[drag, setDrag]}>
      {children}
    </DragContext.Provider>
  );
}

export function useDrag() {
  const context = React.useContext(DragContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
