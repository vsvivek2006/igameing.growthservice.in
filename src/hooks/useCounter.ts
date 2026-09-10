import { useEffect, useRef, useState } from 'react';
import useInView from './useInView';

/**
 * Animates a number from 0 to `target` when the element enters the viewport.
 * Returns [ref, displayValue] — attach ref to the container element.
 */
export function useCounter(
  target: number,
  duration = 1800,
  suffix = ''
): [React.RefObject<HTMLDivElement>, string] {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5 });
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out-quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return [ref, `${count}${suffix}`];
}

export default useCounter;
