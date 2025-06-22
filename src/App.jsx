
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import KPIs from './components/KPIs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import LanguageSwitcher from './components/LanguageSwitcher';
import Analytics from './components/Analytics';

function App() {
  return (
    <main className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <LanguageSwitcher/>
      <Hero />
      <KPIs />
      <About />
      <Experience />
      <Projects />
      <Analytics/>
      <Education/>
      <Skills/>
      <Contact />
      <Footer/>
    </main>
  );
}

export default App;
