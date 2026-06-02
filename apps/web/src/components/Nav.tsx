import { useState } from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Our Mission', to: '/#mission' },
  { label: 'Format', to: '/#format' },
  { label: 'Past Events', to: '/past-events' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hair-soft bg-white/80 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 w-full max-w-[1080px] items-center justify-center px-6">
        {/* Centered cluster: logo beside the links */}
        <div className="flex items-center gap-7">
          <Link
            to="/"
            onClick={close}
            aria-label="Prompt Lisbon — home"
            className="flex items-center"
          >
            <img src="/assets/symbol.png" alt="Prompt Lisbon" className="logo-blend h-8 w-8" />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 min-[680px]:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[14px] font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-4 inline-flex h-10 w-10 items-center justify-center text-ink min-[680px]:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="h-[22px] w-[22px]"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-hair-soft bg-white min-[680px]:hidden">
          <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={close}
                className="border-b border-hair-soft py-3.5 text-[15px] font-semibold text-ink-soft transition-colors last:border-b-0 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
