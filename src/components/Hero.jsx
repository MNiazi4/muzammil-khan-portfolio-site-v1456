import React from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

const Hero = () => {
  const { ref, visible } = useInViewFadeIn();

  return (
    <section id="hero" ref={ref} className={`section hero ${visible ? "is-visible" : ""}`}>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Software Developer</p>
          <h1 className="hero-title">Hi, I&apos;m Muzammil Khan.</h1>
          <p className="hero-subtitle">
            I build clean, performant web applications with modern JavaScript and
            React. This portfolio showcases a selection of my work, experience, and
            skills.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/MNiazi4"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              View GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-khan-25501026b/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-avatar-wrapper">
          {/* Replace the src with a renamed, cleaner filename if you prefer */}
          <img
            src="/WhatsApp Image 2025-12-22 at 6.41.47 PM.jpeg"
            alt="Portrait of Muzammil Khan"
            className="hero-avatar hero-avatar-image"
          />
          <p className="hero-location">Based in Pakistan · Open to opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;



