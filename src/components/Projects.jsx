const Projects = () => {
  const projects = [
    {
      name: "iYurek-Wall Street Business Academy Holdings, Inc",
      desc: "iYUREK is an AI-powered market analysis app for stocks, crypto, forex, futures, and ETFs, offering real-time sentiment, smart charts, and correlation insights. It helps traders make faster, data-driven decisions through a clean, intuitive interface.",
      tags: ["React Native", "Redux", "REST API",  "MQTT", "Firebase"],
      emoji: "📈",
    },
    {
      name: "Liamtra-Something For Everyone",
      desc: "Liamtra is a one-stop travel platform offering flight bookings, hotels, unique stays, taxis, and customized tours. It also enables hosts and service providers to list and manage their properties and services seamlessly, creating a complete end-to-end travel ecosystem for users and partners.",
      tags: ["React Native", "Redux", "Javascript", "Crashlytics"],
      emoji: "✈️",
    },
    {
      name: "HillyPix",
      desc: "HillyPix is a streaming platform for live and on-demand TV shows and movies from North-East India (Hillywood). It delivers the latest regional cinema, TV shows, original content, and music to a wide audience.",
      tags: ["Apollo", "GraphQl", "Shimmer Effect", "ReAnimated"],
      emoji: "📺",
    },
    {
      name: "Riska",
      desc: "Riska is a React Native–based mobile application that delivers real-time data using WebSockets and REST APIs. It is optimized for performance, scalability, and smooth cross-platform user experience.",
      tags: ["WebSocket", "Push Notification", "Amplitude"],
      emoji: "📊",
    },
    {
      name: "Sonitus-Sensor App",
      desc: "Sonitus, a custom Bluetooth Low Energy (BLE) application that scans, connects, and communicates with nearby BLE devices in real time. The app enables reliable device discovery, connection management, and data exchange through a clean and intuitive interface.",
      tags: ["Deep Linking", "Ble-Plx", "Ble-Stack", "G-Maps"],
      emoji: "📡",
    },
    {
      name: "SpaceX-Launch-Explorer",
      desc: "SpaceX Explorer, a launcher exploration app that displays detailed information about SpaceX launches, rockets, and missions. The app uses public APIs to present real-time and historical SpaceX data through a clean, user-friendly interface.",
      tags: ["TypeScript", "RestApi", "Firebase Analytics",],
      emoji: "🤖",
    },
  ];

  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle mx-auto">
            Apps built across domains — from AI telecalling to IoT farming to scam detection.
          </p>
        </div>
        <div className="row g-4">
          {projects.map((project, i) => (
            <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={(i % 4) * 80}>
              <div className="project-card">
                <div className="project-header">
                  <span style={{ fontSize: '1.6rem'}}>{project.emoji}</span>
                  <div className="project-links">
                    <a href="#" className="project-link" title="Play Store">
                      <i className="bi bi-google-play"></i>
                    </a>
                    <a href="#" className="project-link" title="GitHub">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-name">{project.name}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="tech-tags">
                    {project.tags.map((tag, index) => (
                      <span className="tech-tag" key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
