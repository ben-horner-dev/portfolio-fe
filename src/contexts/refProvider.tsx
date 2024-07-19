import { useElementOnScreen } from "@/hooks";
import { ContextProviderProps } from "@/types/contextTypes";
import { element } from "@/types/intersectionTypes";
import { createContext, useContext } from "react";

interface RefsType {
  hero: element;
  contact: element;
  oauth: element;
  ecommerce: element;
  network: element;
}

const MyRefContext = createContext<RefsType | undefined>(undefined);

export function RefProvider({ children }: ContextProviderProps) {
  const refs = {
    hero: useElementOnScreen(),
    contact: useElementOnScreen(),
    oauth: useElementOnScreen(),
    ecommerce: useElementOnScreen(),
    network: useElementOnScreen(),
  };

  return <MyRefContext.Provider value={refs}>{children}</MyRefContext.Provider>;
}

export function useRefs() {
  return useContext(MyRefContext);
}
