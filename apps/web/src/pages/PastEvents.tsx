import { Footer } from '../sections/Footer';
import { SectionDivider } from '../components/SectionDivider';

export function PastEvents() {
  return (
    <>
      <section className="py-[clamp(80px,13vw,150px)] text-center">
        <div className="mx-auto w-full max-w-[1080px] px-6">
          <div className="mb-[clamp(40px,6vw,64px)] flex flex-col items-center gap-[18px]">
            <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint">
              The archive
            </span>
            <h1 className="font-serif text-[clamp(34px,6vw,60px)] font-medium leading-[1.04] tracking-[-0.01em]">
              Past Events
            </h1>
            <p className="mx-auto max-w-[52ch] text-[clamp(16px,2vw,18px)] leading-[1.7] text-ink-soft">
              Every Prompt Lisbon gathering, gathered. The talks, demos and conversations from each
              edition will live here — explore what happened, by theme and by night.
            </p>
          </div>

          {/* Empty state — each past edition will be listed here as it happens. */}
          <div className="placeholder-grid grad-border relative mx-auto flex min-h-[380px] w-full max-w-[800px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[20px] bg-white p-10 shadow-embed">
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
                <path d="M3 9.5 12 4l9 5.5" />
                <path d="M5 10.5V20h14v-9.5" />
                <path d="M9.5 20v-5.5h5V20" />
              </svg>
            </div>
            <span className="relative z-[1] text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
              Archive coming soon
            </span>
            <p className="relative z-[1] font-serif text-[clamp(22px,3vw,27px)] font-medium">
              The first editions will appear here
            </p>
            <p className="relative z-[1] max-w-[42ch] text-[15px] leading-[1.6] text-ink-soft">
              Once we&rsquo;ve hosted our first nights, each one gets its own recap — talks, demos,
              photos and the tools people shared.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  );
}
