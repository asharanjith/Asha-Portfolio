import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

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
