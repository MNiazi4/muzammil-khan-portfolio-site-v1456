import React from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

const Contact = () => {
  const { ref, visible } = useInViewFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section ${visible ? "is-visible" : ""}`}
    >
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let&apos;s talk about your next project or opportunity.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>Prefer direct contact? Use WhatsApp or email below.</p>

          <div className="contact-methods">
            <a
              href="https://wa.me/9231528809270"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              aria-label="WhatsApp"
            >
              <span className="social-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.373 0 .04 5.333.04 12c0 2.116.552 4.182 1.6 5.997L0 24l6.265-1.598A11.92 11.92 0 0 0 12 24c6.627 0 11.96-5.373 11.96-12 0-1.97-.46-3.83-1.44-5.52z" fill="currentColor" opacity="0.08"/>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.966-.942 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.762-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.148-.173.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.148-.672-1.62-.92-2.217-.242-.58-.487-.502-.672-.51l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.077 4.487 0 0 .014.006.02.01.301.132.6.198.87.127.266-.07 1.758-.717 2.006-1.412.248-.695.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347z" fill="currentColor"/>
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:muzamilk144553@gmail.com"
              className="social-pill"
              aria-label="Email"
            >
              <span className="social-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
              </span>
              <span>Email</span>
            </a>
          </div>

          <p>Also available on:</p>
          <div className="contact-socials">
            <a
              href="https://github.com/MNiazi4"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muzammil-khan-25501026b/"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



