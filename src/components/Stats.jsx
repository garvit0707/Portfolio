import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({ years: 0, apps: 0, published: 0, companies: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 2, apps: 7, published: 3, companies: 2 };
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

  return (
    <div className="row mt-5" data-aos="fade-up" data-aos-delay="400" ref={statsRef}>
      <div className="col-12">
        <div className="stats-row">
          <div className="row text-center gx-0">
            <div className="col-6 col-md-3 stat-item py-2">
              <div className="stat-number">{counts.years}</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="col-6 col-md-3 stat-item py-2">
              <div className="stat-number">{counts.apps}</div>
              <div className="stat-label">Apps Built</div>
            </div>
            <div className="col-6 col-md-3 stat-item py-2">
              <div className="stat-number">{counts.published}</div>
              <div className="stat-label">Published Apps</div>
            </div>
            <div className="col-6 col-md-3 stat-item py-2">
              <div className="stat-number">{counts.companies}</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
