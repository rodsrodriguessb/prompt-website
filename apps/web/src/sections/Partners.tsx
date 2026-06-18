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
            <img src="/assets/oktogon-mark.svg" alt="Oktogon Labs" className="h-[66px] w-auto" />
          </a>

          <span aria-hidden="true" className="hidden h-[54px] w-px bg-hair min-[680px]:block" />

          <a
            href="https://membrz.club"
            target="_blank"
            rel="noreferrer"
            aria-label="Membrz.Club"
            className="inline-flex items-center opacity-90 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/membrz.png" alt="Membrz.Club" className="h-[38px] w-auto" />
          </a>
        </Reveal>

        <Reveal className="mt-[clamp(30px,5vw,52px)] flex flex-wrap items-center justify-center gap-x-[clamp(34px,6vw,64px)] gap-y-6">
          <a
            href="https://thenestlisbon.com"
            target="_blank"
            rel="noreferrer"
            aria-label="The Nest Lisbon"
            className="inline-flex items-center opacity-75 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/nest.png" alt="The Nest Lisbon" className="h-[80px] w-auto" />
          </a>
          <a
            href="https://351startups.com"
            target="_blank"
            rel="noreferrer"
            aria-label="351 Startups"
            className="inline-flex items-center opacity-75 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/351.jpeg" alt="351 Startups" className="h-[80px] w-auto" />
          </a>
          <a
            href="https://instagram.com/tataoim"
            target="_blank"
            rel="noreferrer"
            aria-label="Tataoim"
            className="inline-flex items-center opacity-75 transition duration-200 hover:-translate-y-0.5 hover:opacity-100"
          >
            <img src="/assets/tataoim.png" alt="Tataoim" className="h-[80px] w-auto" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
