import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// Membrz events widget — a custom element registered by https://js.membrz.club/widget.js
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'events-widget': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'organization-id'?: string;
        view?: string;
        'grid-columns'?: string;
        'number-of-events'?: string;
        'background-color'?: string;
      };
    }
  }
}
