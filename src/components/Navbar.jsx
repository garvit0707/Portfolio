import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ThemeToggle />
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`} id="mainNav">
        <div className="container">
        <a className="navbar-brand" href="#hero">
            {'<'}<span>Garvit Sharma</span>{'/>'}
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navMenu"
            // onClick={()=>{console.log("this is pressed")}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 py-3 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="nav-link btn-nav-cta" href="/resume.pdf" download>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
