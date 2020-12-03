import { createContext } from "react";

export interface ContextType {
  setId: (id: string) => void;
  removeId: (id: string) => void;
}

export const ParentContext = createContext<ContextType | null>(null);

export type IdsContextType = string[];

export const IdsContext = createContext<IdsContextType | null>(null);
