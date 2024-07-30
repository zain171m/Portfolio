import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Courses from "./Courses.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <div className="font-Poppins">
      <Main />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Courses />
      <Contact />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
