import { ROOT_MARGIN, THRESHOLD } from "@/enums/intersectionEnums";
import { element } from "@/types/intersectionTypes/IntersectionTypes";
import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const intersectHandler = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(intersectHandler, {
      root: null,
      rootMargin: ROOT_MARGIN,
      threshold: THRESHOLD,
    });
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref]);

  return { ref, isVisible } as element;
};
