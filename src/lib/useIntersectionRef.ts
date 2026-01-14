import { useRef, RefObject } from "react";
import { useIntersection } from "react-use";

export const useIntersectionRef = (): [
  RefObject<HTMLDivElement | null>,
  IntersectionObserverEntry | null,
] => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(sectionRef as RefObject<HTMLElement>, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return [sectionRef, intersection];
};
