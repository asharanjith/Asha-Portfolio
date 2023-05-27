import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbarList/Navbar';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

const App = () => (
  <div className="App">
    <Navbar />
    <Home />
    <Skills />
    <Projects />
    <Contact />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </div>
);

export default App;
