import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Portfolio</h1>
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
