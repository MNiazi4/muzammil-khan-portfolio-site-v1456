import React from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

const About = () => {
  const { ref, visible } = useInViewFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${visible ? "is-visible" : ""}`}
    >
      <div className="section-header">
        <h2>About Me</h2>
        <p>A quick snapshot of who I am and how I work.</p>
      </div>
      <div className="about-grid">
        <p>
          I&apos;m a passionate developer who enjoys solving real-world problems
          with clean, maintainable code. I focus on building intuitive user
          experiences, writing readable code, and learning new technologies that
          help ship better products faster.
        </p>
      </div>
    </section>
  );
};

export default About;



