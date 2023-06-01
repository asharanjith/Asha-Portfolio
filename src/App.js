import React, { useRef } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbarList/Navbar';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

const App = () => {
  const [themeMode, setThemeMode] = React.useState('dark');

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar
        onHomeClick={scrollToHome}
        onProjectsClick={scrollToProjects}
        onContactClick={scrollToContact}
        onSkillsClick={scrollToSkills}
        toggleThemeMode={toggleThemeMode}
        themeMode={themeMode}
      />

      <div ref={homeRef}>
        <Home
          themeMode={themeMode}
        />
      </div>
      <div ref={projectsRef}>
        <Projects
          themeMode={themeMode}
        />
      </div>
      <div ref={skillsRef}>
        <Skills
          themeMode={themeMode}
        />
      </div>
      <div ref={contactRef}>
        <Contact
          themeMode={themeMode}
        />
      </div>

      {/* <Home />
    <Skills />
    <Projects />
    <Contact />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes> */}
    </div>
  );
};

export default App;
