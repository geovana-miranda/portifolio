import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
