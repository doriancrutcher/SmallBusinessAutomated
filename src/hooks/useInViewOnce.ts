import { useEffect, useRef, useState } from "react";

export function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -15% 0px", threshold: 0.35, ...(options || {}) }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen, options]);

  return { ref, seen };
} 