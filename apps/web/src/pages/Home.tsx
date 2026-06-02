import { Hero } from '../sections/Hero';
import { Mission } from '../sections/Mission';
import { Format } from '../sections/Format';
import { Partners } from '../sections/Partners';
import { Events } from '../sections/Events';
import { Footer } from '../sections/Footer';
import { SectionDivider } from '../components/SectionDivider';

export function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Mission />
      <SectionDivider />
      <Format />
      <SectionDivider />
      <Partners />
      <SectionDivider />
      <Events />
      <SectionDivider />
      <Footer />
    </>
  );
}
