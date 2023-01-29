"use client";

import React from "react";

const DragContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

export function DragProvider({ children }: { children: React.ReactNode }) {
  const [overId, setOverId] = React.useState("진현덕");
  console.log("컨텍스트에서 overId:", overId);
  return (
    <DragContext.Provider value={[overId, setOverId]}>
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
