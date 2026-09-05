import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// Coarse device / perf heuristic for the 3D visualization fallback.
export function useLowPerfDevice() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const smallScreen = window.innerWidth < 640;
    const fewCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const saveData = navigator.connection && navigator.connection.saveData;
    setLow(Boolean((coarsePointer && smallScreen) || saveData || (coarsePointer && fewCores)));
  }, []);
  return low;
}
