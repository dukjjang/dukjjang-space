"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

type Sound = boolean;

const SoundContext = createContext<
  [Sound, Dispatch<SetStateAction<Sound>>] | undefined
>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState(true);

  return (
    <SoundContext.Provider value={[sound, setSound]}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSettingSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
