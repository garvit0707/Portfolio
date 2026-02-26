import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    "React Native Developer",
    "Team Lead & Mentor",
    "Full-Stack Mobile Developer",
    "Mobile App Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (typedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="900">
            <div className="hero-eyebrow">Software Engineer</div>
            <h1 className="hero-name">
              <span className="line1">Garvit</span><br />
              <span className="line2">Sharma</span>
            </h1>
            <p className="hero-title">
              <span className="typed-text">{typedText}</span><span className="cursor-blink"></span>
            </p>
            <p className="hero-desc">
              React Native Developer with 2 years of experience in building scalable, high-performance mobile applications for Android and iOS. Proficient in JavaScript, TypeScript, Redux, API integration, WebSockets, and Firebase, with strong focus on clean architecture, performance optimization, and delivering production-ready, user-friendly mobile experiences.
            </p>

            <div className="hero-btns"> 
              <a href="#projects" className="btn-primary-custom">
                <i className="bi bi-grid-3x3-gap-fill"></i> View Projects
              </a>
              <a href="/resume.pdf" className="btn-outline-custom" download>
                <i className="bi bi-download"></i> Download Resume
              </a>
              <a href="#contact" className="btn-outline-custom">
                <i className="bi bi-send"></i> Contact Me
              </a>
            </div>
            <div className="hero-socials">
              <a className="hero-social-link" href="https://github.com/garvit0707" target="_blank" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a className="hero-social-link" href="https://www.linkedin.com/in/garvit77/" target="_blank" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="hero-social-link" href="mailto:garvit.sharma.0707@gmail.com" title="Email">
                <i className="bi bi-envelope"></i>
              </a>
              <a className="hero-social-link" href="tel:+9352394516" title="Phone">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring">
                <img className="hero-avatar" src="/MY.jpg" alt="Garvit Sharma" />
              </div>
              <div className="float-chip fc1">⚛️ React Native</div>
              <div className="float-chip fc2">📱 Android</div>
              <div className="float-chip fc3">☁️ JavaScript</div>
              <div className="float-chip fc4">⚙️ TypeScript</div>
              <div className="float-chip fc5"> iOS</div>
              <div className="float-chip fc6">React.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
