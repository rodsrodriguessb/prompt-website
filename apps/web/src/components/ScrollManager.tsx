import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keeps scroll position sensible across client-side navigation:
 * - if the URL has a hash, smooth-scroll to that element (works when the
 *   target lives on a page we just navigated to, e.g. /past-events → /#mission)
 * - otherwise jump to the top on route change
 * The sticky-nav offset is handled by `scroll-margin-top` on the target sections.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        );
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
