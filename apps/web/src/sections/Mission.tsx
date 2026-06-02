import { Reveal } from '../components/Reveal';

const EXPECT = [
  {
    num: '01',
    title: 'Talks & demos',
    body: 'Short, sharp sessions from people building with AI in the open — what worked, what broke, what’s next.',
  },
  {
    num: '02',
    title: 'Open conversation',
    body: 'Room to ask the real questions. Less stage, more circle — ideas traded between people who actually try things.',
  },
  {
    num: '03',
    title: 'A growing community',
    body: 'Meet the makers, founders, and creatives shaping Lisbon’s AI scene — and leave with people worth knowing.',
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="border-t border-hair-soft py-[clamp(80px,13vw,150px)]"
    >
      <div className="mx-auto w-full max-w-[1080px] px-6">
        <Reveal className="mb-[clamp(40px,6vw,64px)] flex flex-col gap-[18px]">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-faint">
            Our mission
          </span>
          <p className="max-w-[30ch] font-serif text-[clamp(22px,3.3vw,31px)] font-normal leading-[1.42] text-ink">
            A home for the people shaping how we work, create, and think with AI.
          </p>
        </Reveal>

        <Reveal
          as="p"
          className="mt-[26px] max-w-[56ch] text-[clamp(16px,2vw,18px)] leading-[1.72] text-ink-soft"
        >
          Prompt Lisbon is a community and event series for builders, researchers, artists, and the
          simply curious. We gather for evenings of talks, live demos, and honest conversation about
          the craft of prompting — no hype, just the real practice. All of it set in a city quietly
          becoming one of Europe&rsquo;s most exciting places to make things with AI.
        </Reveal>

        <div className="mt-[clamp(54px,8vw,84px)] grid grid-cols-1 border-t border-hair min-[760px]:grid-cols-3 min-[760px]:border-b">
          {EXPECT.map((item, i) => (
            <Reveal
              key={item.num}
              className={[
                'grid grid-cols-[auto_1fr] items-start gap-[22px] border-b border-hair py-[34px]',
                'min-[760px]:grid-cols-1 min-[760px]:gap-[18px] min-[760px]:border-b-0 min-[760px]:py-10 min-[760px]:pr-[34px]',
                i > 0 ? 'min-[760px]:border-l min-[760px]:border-hair min-[760px]:pl-[34px]' : '',
              ].join(' ')}
            >
              <span className="grad-text pt-[3px] font-serif text-[17px] font-medium">
                {item.num}
              </span>
              <div>
                <h3 className="mb-[7px] text-[19px] font-semibold tracking-[-0.005em]">
                  {item.title}
                </h3>
                <p className="max-w-[40ch] text-[15.5px] leading-[1.6] text-ink-soft">
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
