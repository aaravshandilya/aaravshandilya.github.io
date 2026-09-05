import { ThemeProvider } from "./ThemeContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import QUBOLab from "./sections/QUBOLab";
import Research from "./sections/Research";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Leadership from "./sections/Leadership";
import Coursework from "./sections/Coursework";
import Skills from "./sections/Skills";
import Publications from "./sections/Publications";
import Awards from "./sections/Awards";
import Interests from "./sections/Interests";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <QUBOLab />
        <Research />
        <Projects />
        <Experience />
        <Leadership />
        <Coursework />
        <Skills />
        <Publications />
        <Awards />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
