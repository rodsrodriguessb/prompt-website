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
            A home for people rethinking how work gets made with AI.
          </p>
        </Reveal>

        <Reveal className="mt-[26px] flex max-w-[56ch] flex-col gap-[1.1em] text-[clamp(16px,2vw,18px)] leading-[1.72] text-ink-soft">
          <p>
            Prompt Lisbon is a pop-up event series about the real ways AI is changing work,
            creativity and culture. We bring together non-technical people using AI in their daily
            practice: designers, marketers, musicians, founders, operators, educators, producers,
            artists and the simply curious.
          </p>
          <p>
            Each gathering takes over a different space in Lisbon for talks, demos and open
            conversation around one theme: AI in Design, AI in Music, AI in Marketing, AI in Retail,
            AI in Culture and beyond.
          </p>
          <p>
            No hype. No panels about the future from people who are not using the tools. Just real
            examples, honest questions and people sharing how their work is already changing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
