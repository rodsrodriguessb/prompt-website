import { useEffect, useRef } from 'react';

const WIDGET_SRC = 'https://js.membrz.club/widget.js';

/**
 * Override the widget's grid-view image rule, which hard-crops every cover to
 * `height: 200px; object-fit: cover`. We show the full poster at its natural
 * aspect ratio instead. Injected into the widget's (open) shadow root.
 */
const SHADOW_FIX = `
  .event-image img {
    height: auto !important;
    max-height: none !important;
    object-fit: contain !important;
    border-radius: 12px !important;
  }
`;

/**
 * Embeds the Membrz events widget. Loads the loader script once (it registers
 * the <events-widget> custom element), then patches its shadow-root styling so
 * the Membrz cover images aren't cropped.
 */
export function MembrzEvents() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    let frames = 0;
    let observer: MutationObserver | null = null;

    const ensureStyle = (root: ShadowRoot) => {
      if (!root.querySelector('style[data-pl-image-fix]')) {
        const style = document.createElement('style');
        style.setAttribute('data-pl-image-fix', '');
        style.textContent = SHADOW_FIX;
        root.appendChild(style);
      }
    };

    const attach = () => {
      const root = ref.current?.shadowRoot;
      if (!root) {
        // Wait (a few seconds max) for the script to define + upgrade the element
        if (frames++ < 600) requestAnimationFrame(attach);
        return;
      }
      ensureStyle(root);
      // The widget re-renders its shadow DOM after fetching events, which can
      // drop our <style> — re-apply it whenever the tree changes.
      observer = new MutationObserver(() => ensureStyle(root));
      observer.observe(root, { childList: true, subtree: true });
    };

    attach();
    return () => observer?.disconnect();
  }, []);

  return (
    <events-widget
      ref={ref}
      organization-id="725"
      view="grid"
      grid-columns="1"
      number-of-events="3"
      background-color="#FCFCFB"
    ></events-widget>
  );
}
