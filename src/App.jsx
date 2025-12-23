import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {}
});

const App = () => {
  const [theme, setTheme] = useState("dark");

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={`app theme-${theme}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects githubUsername="MNiazi4" />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;


