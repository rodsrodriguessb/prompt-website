import { Reveal } from '../components/Reveal';

const FORMAT = [
  {
    num: '01',
    title: 'Real work, not theory',
    body: 'Short talks and live examples from people using AI in their actual work. What changed, what improved, what became weird, what still needs a human eye.',
  },
  {
    num: '02',
    title: 'One theme, many practices',
    body: 'Each event explores one field through different angles: design, music, marketing, retail, education, culture, operations and more.',
  },
  {
    num: '03',
    title: 'A room to exchange',
    body: 'Less conference, more gathering. Space to ask questions, compare workflows, share tools, meet people and leave with ideas you can actually try.',
  },
  {
    num: '04',
    title: 'Around Lisbon',
    body: 'Every edition happens in a different place in the city: studios, galleries, shops, venues, schools, coworks and cultural spaces. AI meets the people already making things happen.',
  },
];

export function Format() {
  return (
    <section id="format" className="py-[clamp(80px,13vw,150px)]">
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <Reveal
          as="span"
          className="mb-[clamp(40px,6vw,64px)] block text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint"
        >
          The format
        </Reveal>

        <div className="grid grid-cols-1 border-t border-hair min-[760px]:grid-cols-2">
          {FORMAT.map((item, i) => (
            <Reveal
              key={item.num}
              className={[
                'grid grid-cols-[auto_1fr] items-start gap-[22px] border-b border-hair py-[34px]',
                'min-[760px]:grid-cols-1 min-[760px]:gap-[18px] min-[760px]:py-10 min-[760px]:pr-[40px]',
                i % 2 === 1 ? 'min-[760px]:border-l min-[760px]:border-hair min-[760px]:pl-[40px]' : '',
              ].join(' ')}
            >
              <span className="grad-text pt-[3px] font-serif text-[17px] font-medium">
                {item.num}
              </span>
              <div>
                <h3 className="mb-[7px] text-[19px] font-semibold tracking-[-0.005em]">
                  {item.title}
                </h3>
                <p className="max-w-[44ch] text-[15.5px] leading-[1.6] text-ink-soft">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
