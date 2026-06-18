import { Reveal } from '../components/Reveal';

export function Mission() {
  return (
    <section
      id="mission"
      className="py-[clamp(80px,13vw,150px)]"
    >
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <Reveal className="mb-[clamp(40px,6vw,64px)] flex flex-col gap-[18px]">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint">
            Our mission
          </span>
          <p className="max-w-[32ch] font-serif text-[clamp(22px,3.3vw,31px)] font-normal leading-[1.42] text-ink">
            Where tech meets culture — and AI rewrites what a career can be.
          </p>
        </Reveal>

        <Reveal className="mt-[26px] flex max-w-[56ch] flex-col gap-[1.1em] text-[clamp(16px,2vw,18px)] leading-[1.72] text-ink-soft">
          <p>
            Prompt Lisbon is a cult-tech pop-up series at the meeting point of technology and
            culture. Each edition digs into the real ways AI is reshaping work and careers — through
            talks, live demos and honest conversation with the people already living it: designers,
            marketers, musicians, founders, operators, educators and the simply curious.
          </p>
          <p>
            And it&rsquo;s never just talk. Every edition centers on one theme — AI in Design, Music,
            Marketing, Retail, Culture — and always closes with live music and a live act. Tech you
            can use, a night you&rsquo;ll remember.
          </p>
          <p>
            No hype, no future-gazing from people who don&rsquo;t touch the tools. Just real work,
            real culture, and a room worth being in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
