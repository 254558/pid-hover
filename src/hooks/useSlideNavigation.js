import { useCallback, useEffect, useState } from 'react';

const NEXT_KEYS = ['ArrowRight', ' ', 'PageDown'];
const PREV_KEYS = ['ArrowLeft', 'PageUp'];
const SWIPE_THRESHOLD = 50;

export default function useSlideNavigation(total) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (i) => setCurrent((c) => (i >= 0 && i < total && i !== c ? i : c)),
    [total],
  );
  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [total]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (NEXT_KEYS.includes(e.key)) {
        e.preventDefault();
        next();
      } else if (PREV_KEYS.includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev, goTo, total]);

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e) => {
      startX = e.changedTouches[0].screenX;
    };
    const onTouchEnd = (e) => {
      const delta = startX - e.changedTouches[0].screenX;
      if (Math.abs(delta) > SWIPE_THRESHOLD) (delta > 0 ? next : prev)();
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  return { current, goTo, next, prev, progress: ((current + 1) / total) * 100 };
}
