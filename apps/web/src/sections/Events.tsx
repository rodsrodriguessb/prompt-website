import { Reveal } from '../components/Reveal';
import { MembrzEvents } from '../components/MembrzEvents';

export function Events() {
  return (
    <section
      id="events"
      className="bg-events-band py-[clamp(80px,13vw,150px)] text-center"
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

        {/* Membrz events widget, framed by the brand rainbow hairline */}
        <Reveal
          role="region"
          aria-label="Upcoming Prompt Lisbon events"
          className="grad-border relative mx-auto mt-[clamp(42px,6vw,64px)] min-h-[360px] w-full max-w-[800px] overflow-hidden rounded-[20px] bg-[#FCFCFB] p-4 text-left shadow-embed sm:p-6"
        >
          <MembrzEvents />
        </Reveal>
      </div>
    </section>
  );
}
