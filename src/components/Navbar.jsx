import React, { useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div
          className="navbar-logo"
          onClick={() => handleNavClick("hero")}
          aria-label="Scroll to top"
        >
          MK
        </div>
        <nav className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="navbar-burger"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="navbar-mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link-mobile"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;



