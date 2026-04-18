import Hero from "./Sections/Hero";
import TechVideo from "./Sections/TechVideo";
import CategoriesSection from "./Sections/Categories";
import ValueAdded from "./Sections/ValueAdded";
import Spotlight from "./Sections/Spotlight";
import Projects from "./Sections/Projects";
import QualityCareers from "./Sections/QualityCareers";
import ContactForm from "./Sections/ContactForm";
import AboutSection from "./Sections/About";
import OurPartners from "./Sections/OurPartners";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CategoriesSection />
      <TechVideo />
      <ValueAdded />
      <Spotlight />
      <Projects />

      <QualityCareers />
      <ContactForm />
      <OurPartners />
    </>
  );
}
