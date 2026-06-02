export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-[clamp(56px,8vw,84px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <div className="grid grid-cols-1 gap-10 min-[760px]:grid-cols-[1.3fr_1fr] min-[760px]:gap-16">
          {/* Brand */}
          <div className="flex max-w-[34ch] flex-col gap-[18px]">
            <div className="flex items-center gap-[14px]">
              <img
                src="/assets/symbol.png"
                alt="Prompt Lisbon symbol"
                className="logo-blend h-[46px] w-[46px]"
              />
              <span className="font-serif text-2xl font-medium tracking-[-0.01em]">
                Prompt Lisbon
              </span>
            </div>
            <p className="text-[15px] leading-[1.65] text-ink-soft">
              A pop-up series on the real ways AI is changing work and culture. Come for the demos,
              stay for the people.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                Follow
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/prompt.lisbon/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-[9px] text-[15.5px] text-ink no-underline transition-opacity duration-200 hover:opacity-55"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[17px] w-[17px]"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/showcase/prompt-lisbon/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-[9px] text-[15.5px] text-ink no-underline transition-opacity duration-200 hover:opacity-55"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.97 0 1.78-.78 1.78-1.73V1.73C24 .77 23.19 0 22.22 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                Contact
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@oktogon.io"
                  className="inline-flex w-fit items-center gap-[9px] text-[15.5px] text-ink no-underline transition-opacity duration-200 hover:opacity-55"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[17px] w-[17px]"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="m3.5 6.5 8.5 6 8.5-6" />
                  </svg>
                  hello@oktogon.io
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,7vw,72px)] flex flex-wrap items-center justify-between gap-x-7 gap-y-[14px] border-t border-hair-soft pt-[26px] text-[13px] text-ink-faint">
          <span className="inline-flex items-center">
            <span className="grad-fill mr-2 inline-block h-[7px] w-[7px] rounded-full" />
            Prompt Lisbon · {year}
          </span>
          <span>Made in Lisbon 🇵🇹</span>
        </div>
      </div>
    </footer>
  );
}
