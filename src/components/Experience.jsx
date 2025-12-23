import React from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

// Placeholder experience data – replace entries with your real experience.
const EXPERIENCE_ITEMS = [
  {
    role: "Frontend Developer",
    company: "Your Company",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Building responsive, accessible user interfaces with React and modern tooling. Collaborating with designers and backend engineers to ship features end-to-end."
  },
  {
    role: "Software Engineering Intern",
    company: "Previous Company",
    period: "2023 — 2024",
    location: "Hybrid",
    description:
      "Contributed to internal dashboards, fixed bugs, and improved performance of existing React components while learning industry best practices."
  }
];

const Experience = () => {
  const { ref, visible } = useInViewFadeIn();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section ${visible ? "is-visible" : ""}`}
    >
      <div className="section-header">
        <h2>Experience</h2>
        <p>
          A brief overview of roles and responsibilities. Update this with details
          from your LinkedIn profile.
        </p>
      </div>
      <div className="timeline">
        {EXPERIENCE_ITEMS.map((item) => (
          <article key={item.role + item.company} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-company">
                {item.company} · {item.location}
              </p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;



