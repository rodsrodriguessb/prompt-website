import { Agentation } from 'agentation';

/**
 * MaestruDevTools - Visual feedback integration for Maestru workspace
 *
 * Renders the Agentation toolbar in development mode when running inside
 * Maestru's Preview iframe. When the user copies annotations, sends them
 * to the parent Maestru window via postMessage.
 *
 * This component is automatically included in projects created from the
 * webapp template. It can be safely removed if not needed.
 */
export function MaestruDevTools() {
  // Only render in development
  if (import.meta.env.PROD) return null;

  // Only render when inside an iframe (Maestru's Preview tab)
  if (typeof window === 'undefined') return null;
  if (window.parent === window) return null;

  return (
    <Agentation
      onCopy={(markdown) => {
        // Send feedback to Maestru parent window
        // Parent handles clipboard (iframe doesn't have permission)
        window.parent.postMessage(
          {
            type: 'MAESTRU_FEEDBACK',
            markdown,
          },
          '*'
        );
      }}
      copyToClipboard={false}
    />
  );
}
