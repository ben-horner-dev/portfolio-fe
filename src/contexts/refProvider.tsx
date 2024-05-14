import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import { ContextProviderProps } from "@/types/contextTypes";
import { element } from "@/types/intersectionTypes";
import { createContext, useContext } from "react";

interface RefsType {
  hero: element;
  contact: element;
}

const MyRefContext = createContext<RefsType | undefined>(undefined);

export function RefProvider({ children }: ContextProviderProps) {
  const refs = {
    hero: useElementOnScreen(),
    contact: useElementOnScreen(),
  };

  return <MyRefContext.Provider value={refs}>{children}</MyRefContext.Provider>;
}

export function useRefs() {
  return useContext(MyRefContext);
}
