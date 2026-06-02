export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-6 pb-16 pt-16 text-center">
      <img
        src="/assets/symbol.png"
        alt="Prompt Lisbon symbol — a rainbow gradient swirl"
        className="logo-blend floaty mb-[clamp(26px,4vw,40px)] h-auto w-[clamp(132px,22vw,186px)]"
      />

      <h1 className="font-serif text-[clamp(54px,12vw,116px)] font-medium leading-[0.98] tracking-[-0.01em] text-ink [font-optical-sizing:auto]">
        Prompt&nbsp;Lisbon
      </h1>

      <p className="mt-[clamp(22px,3.4vw,32px)] text-[clamp(12px,1.9vw,15px)] font-semibold uppercase tracking-[0.3em] text-ink-soft">
        Conversations shape what&rsquo;s next
      </p>

      <div className="mt-[clamp(38px,5vw,52px)]">
        <a
          href="#events"
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-[30px] py-[17px] text-base font-semibold tracking-[0.01em] text-white no-underline transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-cta"
        >
          See upcoming events
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-y-[3px]"
          >
            ↓
          </span>
        </a>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[26px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink-faint"
      >
        <span>Scroll</span>
        <span className="h-[38px] w-px bg-gradient-to-b from-ink-faint to-transparent" />
      </div>
    </section>
  );
}
