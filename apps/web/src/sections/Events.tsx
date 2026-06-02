import { Reveal } from '../components/Reveal';

export function Events() {
  return (
    <section
      id="events"
      className="border-t border-hair-soft bg-events-band py-[clamp(80px,13vw,150px)] text-center"
    >
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <Reveal className="mb-[clamp(40px,6vw,64px)] flex flex-col items-center gap-[18px]">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint">
            What&rsquo;s on
          </span>
          <h2 className="font-serif text-[clamp(34px,6vw,60px)] font-medium leading-[1.04] tracking-[-0.01em]">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-[50ch] text-[clamp(16px,2vw,18px)] leading-[1.7] text-ink-soft">
            Every gathering lands on the calendar below. Save your spot, add it to yours, and we&rsquo;ll
            see you there.
          </p>
        </Reveal>

        {/*
          Calendar embed slot. Replace the inner content below with the real
          calendar widget (e.g. Luma / Google Calendar iframe); keep the framed
          800 × 600 container as the slot.
        */}
        <Reveal
          role="region"
          aria-label="Events calendar embed area"
          className="placeholder-grid grad-border relative mx-auto mt-[clamp(42px,6vw,64px)] flex min-h-[600px] w-full max-w-[800px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[20px] bg-white p-10 shadow-embed"
        >
          <div className="grad-fill relative z-[1] grid h-[58px] w-[58px] place-items-center rounded-2xl">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
              <path d="M3 9h18M8 2.5v4M16 2.5v4" />
            </svg>
          </div>

          <span className="relative z-[1] text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
            Calendar embed area
          </span>
          <p className="relative z-[1] font-serif text-[clamp(22px,3vw,27px)] font-medium">
            A live events calendar will live here
          </p>
          <p className="relative z-[1] max-w-[38ch] text-[15px] leading-[1.6] text-ink-soft">
            A third-party calendar widget will be embedded in this space, listing every upcoming
            Prompt Lisbon gathering.
          </p>
          <code className="relative z-[1] mt-1.5 rounded-lg border border-hair bg-[#f5f5f6] px-[14px] py-2 font-mono text-[12.5px] text-ink-faint">
            &lt;!-- calendar widget · 800 × 600 --&gt;
          </code>
        </Reveal>
      </div>
    </section>
  );
}
