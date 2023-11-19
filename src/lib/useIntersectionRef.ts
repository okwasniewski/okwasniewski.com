import React, { useRef } from 'react';
import { useIntersection } from 'react-use';

export const useIntersectionRef = (): [
  React.MutableRefObject<any>,
  IntersectionObserverEntry,
] => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  return [sectionRef, intersection];
};
