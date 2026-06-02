import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

/**
 * Fades + lifts its element into view on first scroll-intersection.
 * Renders the tag passed via `as` (default `div`) so it can drop into
 * grids without introducing an extra wrapper.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  className = '',
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={['reveal', inView ? 'in' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
