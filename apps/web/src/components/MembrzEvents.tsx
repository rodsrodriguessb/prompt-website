import { useEffect } from 'react';

const WIDGET_SRC = 'https://js.membrz.club/widget.js';

/**
 * Embeds the Membrz events widget. Loads the loader script once (it registers
 * the <events-widget> custom element), then renders the configured element.
 */
export function MembrzEvents() {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <events-widget
      organization-id="725"
      view="grid"
      grid-columns="1"
      number-of-events="3"
      background-color="#FCFCFB"
    ></events-widget>
  );
}
