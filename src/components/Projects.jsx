import React, { useEffect, useState } from "react";
import useInViewFadeIn from "../hooks/useInViewFadeIn.js";

const Projects = ({ githubUsername }) => {
  const { ref, visible } = useInViewFadeIn();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Unable to load repositories from GitHub.");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();

    return () => controller.abort();
  }, [githubUsername]);

  return (
    <section
      id="projects"
      ref={ref}
      className={`section ${visible ? "is-visible" : ""}`}
    >
      <div className="section-header">
        <h2>Projects</h2>
        <p>Recent repositories from my GitHub profile.</p>
      </div>

      {loading && <p className="muted">Loading projects from GitHub...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="projects-grid">
        {repos.map((repo) => (
          <article key={repo.id} className="project-card">
            <div className="project-image-placeholder">
              {/* Placeholder image area; replace with real screenshots if desired */}
              <span>{repo.name?.[0]?.toUpperCase() || "P"}</span>
            </div>
            <div className="project-content">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description provided yet."}</p>
              <div className="project-meta">
                {repo.language && <span>{repo.language}</span>}
                {repo.stargazers_count > 0 && (
                  <span>★ {repo.stargazers_count}</span>
                )}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;



