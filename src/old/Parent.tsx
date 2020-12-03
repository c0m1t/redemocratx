import React, { ReactNode, useState, useMemo } from "react";
import { ParentContext } from "./ParentContext";

interface ParentProps {
  children?: ReactNode;
}

export function Parent(props: ParentProps) {
  const { children } = props;
  const [state, setState] = useState<string[]>([]);
  const context = useMemo(
    () => ({
      setId: (id: string) => {
        setState((state) => [...state, id]);
      },
      removeId: (id: string) => {
        setState((state) => state.filter((value) => value !== id));
      }
    }),
    []
  );
  console.log(state);
  return (
    <ParentContext.Provider value={context}>
      {children}
      <p style={{ fontSize: "20px" }}>Ids stored in Parent component</p>
      <p>{state[0]?.substring(0, 6)}</p>
      <p>{state[1]?.substring(0, 6)}</p>
    </ParentContext.Provider>
  );
}
