import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Projects from "./sections/Projects";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Certifications from "./sections/Certifications";
import Navbar from "./components/NavBar";

const App = () => (
  <div className="w-full min-h-screen">
    <Navbar />
    <Hero />
    <Projects />
    {/* <ShowcaseSection /> */}
    {/* <LogoShowcase /> */}
    <FeatureCards />
    <Experience />
    <TechStack />
    <Certifications />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </div>
);

export default App;
