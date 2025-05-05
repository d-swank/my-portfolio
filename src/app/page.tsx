import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
