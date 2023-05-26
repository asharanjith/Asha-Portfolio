import './App.css';
import Navbar from './components/Navbar/Navbar';
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
  </div>
);

export default App;
