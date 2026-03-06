import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  const skillCards = [
    {
      name: "React Native",
      cat: "Mobile",
      icon: "devicon-reactnative-original",
      color: "#61dafb",
    },
    {
      name: "React Js",
      cat: "Web",
      icon: "devicon-react-original",
      color: "#61dafb",
    },
    {
      name: "Apollo/GraphQL",
      cat: "Mobile",
      // icon: "devicon-flutter-plain",
      icon: "devicon-apollographql-plain",
      color: "#f854d5",
    }
    ,
    {
      name: "JavaScript",
      cat: "Language",
      icon: "devicon-javascript-plain",
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      cat: "Language",
      icon: "devicon-typescript-plain",
      color: "#3178c6",
    },
     {
      name: "Python",
      cat: "Language",
      icon: "devicon-python-plain",
      color: "#999933",
    },
    {
      name: "Node.js",
      cat: "Backend",
      icon: "devicon-nodejs-plain",
      color: "#339933",
    },
    {
      name: "Express.js",
      cat: "Backend",
      icon: " devicon-express-original",
      color: "#998633",
    },
    {
      name: "HTML",
      cat: "Web",
      icon: "devicon-html5-plain-wordmark",
      color: "#E44D26",
    },
    {
      name: "CSS",
      cat: "Mobile/Web",
      icon: "devicon-css3-plain-wordmark",
      color: "#1572B6",
    },
    
    {
      name: "TailwindCSS",
      cat: "Web",
      icon: "devicon-tailwindcss-plain",
      color: "#49b9ea",
    },
    {
      name: "Bootstrap",
      cat: "Web",
      icon: "devicon-bootstrap-plain",
      color: "#9013fe",
    },
    {
      name: "Redux",
      cat: "State",
      icon: "devicon-redux-original",
      color: "#764abc",
    },
    {
      name: "Android",
      cat: "Mobile",
      icon: "devicon-android-plain",
      color: "#3ddc84",
    },
    {
      name: "iOS",
      cat: "Mobile",
      icon: "devicon-apple-plain",
      color: "#888888",
    },
    {
      name: "Expo",
      cat: "Mobile",
      icon: "devicon-expo-original",
      color: "#c6d5df",
    },
    {
      name: "Firebase",
      cat: "Cloud",
      icon: "devicon-firebase-plain",
      color: "#ffca28",
    },
    { name: "Git", cat: "DevOps", icon: "devicon-git-plain", color: "#f34f29" },
    {
      name: "GitHub",
      cat: "DevOps",
      icon: "devicon-github-original",
      color: "#888888",
    },
    {
      name: "MySQL",
      cat: "Database",
      icon: "devicon-mysql-plain",
      color: "#00618A",
    },
    {
      name: "VS Code",
      cat: "Tools",
      icon: "devicon-vscode-plain",
      color: "#007acc",
    },
    {
      name: "Postman",
      cat: "Tools",
      icon: "devicon-postman-plain",
      color: "#f37036",
    },
    
     {
      name: "Jest",
      cat: "Tools",
      icon: "devicon-jest-plain",
      color: "#b52c0d",
    },
    {
      name: "Figma",
      cat: "Tools",
      icon: "devicon-figma-plain",
      color: "#f37036",
    },
  ];

  const barsLeft = [
    { name: "React Native", pct: 92 },
    { name: "JavaScript / ES6+", pct: 90 },
    { name: "TypeScript", pct: 82 },
    { name: "Redux / Context API", pct: 85 },
  ];

  const barsRight = [
    { name: "Node.js", pct: 80 },
    { name: "React.js", pct: 75 },
    { name: "CI/CD (GitHub Actions)", pct: 72 },
    { name: "Firebase", pct: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" className="section-pad" ref={skillsRef}>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            My <span>Tech</span> Stack
          </h2>
        </div>

        <div className="row g-3 mb-5">
          {skillCards.map((skill, i) => {
            const themeAttr = skill.themeAware ? ' data-theme-icon="true"' : "";
            return (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 40}
              >
                <div className="skill-card">
                  <i
                    className={`${skill.icon} dev-icon colored`}
                    style={{ color: skill.color }}
                  ></i>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-cat">{skill.cat}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row g-4 mt-2">
          <div className="col-lg-6" data-aos="fade-right">
            {barsLeft.map((bar, i) => (
              <div className="skill-bar-wrap" key={i}>
                <div className="skill-bar-label">
                  <span>{bar.name}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${bar.pct}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
            {barsRight.map((bar, i) => (
              <div className="skill-bar-wrap" key={i}>
                <div className="skill-bar-label">
                  <span>{bar.name}</span>
                  <span>{bar.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${bar.pct}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
