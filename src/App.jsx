import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-quart",
      offset: 60,
    });
  }, []);

  return (
    <ThemeProvider>
      <div data-theme="dark">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <div className="section-divider"></div>
          <About />
          <div className="section-divider"></div>
          <Skills />
          <div className="section-divider"></div>
          <Experience />
          <div className="section-divider"></div>
          <Projects />
          <div className="section-divider"></div>
          <Achievements />
          <div className="section-divider"></div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
