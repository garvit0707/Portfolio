const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="row gy-5 align-items-start">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Engineering <span>Ideas</span>
              <br />
              Into Reality
            </h2>
            <p className="section-subtitle">
              From an intern to a React Native developer, building impactful and scalable mobile applications.
            </p>
          </div>
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="150">
            <p className="about-text mb-4">
              I'm a <strong>React Native Developer</strong> with 2 years of
              experience building high-performance cross-platform applications
              for Android and iOS.
            </p>

            <p className="about-text mb-4">
              I specialize in scalable mobile architectures, secure
              authentication, REST API integration, Bluetooth modules, real-time
              tracking, and AI-based mobile solutions.
            </p>

            <p className="about-text mb-5">
              I have successfully delivered{" "}
              <strong>6+ live applications</strong> across Fintech, Trading ,
              healthcare, E-commerce, Entertainment streaming, Travel & Booking.
            </p>

            <div className="row g-3">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                <div className="about-highlight">
                  <i className="bi bi-rocket-takeoff-fill hl-icon"></i>
                  <div className="hl-text">
                    <strong>End-to-End Delivery</strong>
                    Designed, built, and launched full apps independently and
                    with teams.
                  </div>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                <div className="about-highlight">
                  <i className="bi bi-people-fill hl-icon"></i>
                  <div className="hl-text">
                    <strong>Team Leadership</strong>
                    Guided junior developers and coordinated agile sprints
                    across projects.
                  </div>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                <div className="about-highlight">
                  <i className="bi bi-chat-dots-fill hl-icon"></i>
                  <div className="hl-text">
                    <strong>Client Coordination</strong>
                    Direct requirement gathering and stakeholder communication.
                  </div>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
                <div className="about-highlight">
                  <i className="bi bi-cloud-fill hl-icon"></i>
                  <div className="hl-text">
                    <strong>DevOps & CI/CD</strong>
                    Automated build, test, and release workflows using GitHub
                    Actions, Fastlane, and Jest.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
