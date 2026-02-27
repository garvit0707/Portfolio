import { useState, useEffect, useRef } from 'react';

const Achievements = () => {
  const [counts, setCounts] = useState({ years: 0, apps: 0, projects: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 2, apps: 7, projects: 12, clients: 5 };
    const duration = 50;
    const steps = 50;

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const target = targets[key];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, duration);
    });
  };

  const achievements = [
    { icon: "🚀", value: counts.years, label: "+ Years Experience" },
    { icon: "📱", value: counts.apps, label: "Apps Published" },
    { icon: "🏆", value: counts.projects, label: "Projects Delivered" },
    { icon: "🤝", value: counts.clients, label: "Clients Served" },
  ];

  return (
    <section id="achievements" className="section-pad" ref={achievementsRef}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Highlights</span>
          <h2 className="section-title">Achievements <span>&</span> Impact</h2>
        </div>
        <div className="row g-4">
          {achievements.map((achievement, i) => (
            <div className="col-sm-6 col-lg-3" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-value">{achievement.value}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
