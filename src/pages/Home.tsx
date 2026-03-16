import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import ServiceAreas from '../components/ServiceAreas';
import Stats from '../components/Stats';
import TestimonialsPreview from '../components/TestimonialsPreview';

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <TestimonialsPreview />
      <ServiceAreas />
    </div>
  );
}
