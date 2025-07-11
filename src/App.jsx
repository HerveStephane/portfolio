
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import Analytics from './components/Analytics';
import Testimonials from './components/Testimonials';
import Navbar from './components/Navbar';
import { Analytics as Vercel } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <main className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Testimonials/>
      <About />
      <Experience />
      <Projects />
      <Analytics/>
      <Education/>
      <Skills/>
      <Footer/>
      <Vercel/>
      <SpeedInsights/>
    </main>
  );
}

export default App;
