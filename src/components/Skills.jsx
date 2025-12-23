import React from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

const SKILLS = [
  { name: "JavaScript / TypeScript", level: 85 },
  { name: "React / SPA Architecture", level: 80 },
  { name: "n8n / Workflow Automation", level: 80 },
  { name: "HTML / CSS / Responsive UI", level: 90 },
  { name: "Node.js / APIs", level: 70 },
  { name: "Git / GitHub", level: 85 }
];

const Skills = () => {
  const { ref, visible } = useInViewFadeIn();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section ${visible ? "is-visible" : ""}`}
    >
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies and tools I enjoy working with.</p>
      </div>
      <div className="skills-list">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-label-row">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${visible ? skill.level : 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



