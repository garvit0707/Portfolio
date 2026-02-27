const Experience = () => {
  const experiences = [
    {
      badge: "Mar 2025 – Present",
      badgeActive: true,
      role: "Software Engineer",
      company: "Ioanyt Innovation Pvt Ltd",
      current: true,
      description: "Developed a high-performance AI-driven trading mobile application using React Native, integrating interactive data visualizations and WebSocket for real-time data updates, achieving 30% faster data rendering. Built pixel-perfect, responsive user interfaces following iOS and Android design guidelines, optimizing UI performance and reducing load times by 15%. Contributed to scalable application architecture and efficient state management to support real-time features and long-term maintainability.",
      tags: ["React Native", "React.js", "Node.js", "Express.js", "WebSocket", "Firebase", "CI/CD", "AI Integration", "Push-Notification", "Amplitude" ]
    },
    {
      badge: "June 2024 – Feb 2025",
      badgeActive: false,
      role: "Software Developer",
      company: "Liangtuang Technologies Pvt Ltd",
      current: false,
      description: "Developed and maintained a high-performance cross-platform travel mobile application using React Native, collaborating closely with designers and developers to deliver new features and enhance existing functionality. Built advanced search and filtering for flights, hotels, and taxis based on destination, dates, and price range to improve usability. Implemented a real-time newsfeed with posts, likes, and comments, along with enquiry forms and image uploads, while also optimizing performance and migrating legacy code to React Native for improved scalability and user experience.",
      tags: ["React Native", "Redux", "JavaScript", "REST APIs", "Graphql", "TypeScript", "Apollo-Client"]
    },
  ];

  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
            <span className="section-label">Work History</span>
            <h2 className="section-title">My <span>Journey</span></h2>
            <p className="section-subtitle">
              From internship to AI-powered platform development — a trajectory of consistent growth.
            </p>
          </div>
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="150">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className={`timeline-item ${exp.current ? 'current' : ''}`} key={index}>
                  <div className="timeline-card">
                    <div className={`exp-badge ${exp.badgeActive ? 'active' : ''}`}>{exp.badge}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="tech-tags mt-3">
                      {exp.tags.map((tag, i) => (
                        <span className="tech-tag" key={i}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
