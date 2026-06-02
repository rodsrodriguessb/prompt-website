import { Reveal } from '../components/Reveal';

export function Partners() {
  return (
    <section
      id="partners"
      className="py-[clamp(58px,9vw,96px)] text-center"
    >
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <Reveal
          as="span"
          className="block mb-[clamp(34px,5vw,46px)] text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint"
        >
          In partnership with
        </Reveal>

        <Reveal className="flex flex-col items-center gap-8 min-[680px]:flex-row min-[680px]:justify-center min-[680px]:gap-[clamp(40px,7vw,76px)]">
          <a
            href="https://oktogon.io"
            target="_blank"
            rel="noreferrer"
            aria-label="Oktogon Labs"
            className="inline-flex items-center opacity-90 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/oktogon-mark.svg" alt="Oktogon Labs" className="h-[46px] w-auto" />
          </a>

          <span aria-hidden="true" className="hidden h-[42px] w-px bg-hair min-[680px]:block" />

          <a
            href="https://membrz.club"
            target="_blank"
            rel="noreferrer"
            aria-label="Membrz.Club"
            className="inline-flex items-center opacity-90 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/membrz.png" alt="Membrz.Club" className="h-[26px] w-auto" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
