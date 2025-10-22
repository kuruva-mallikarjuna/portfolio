import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './compontents/nav/nav';
import Home from './compontents/home/home'
import Skills from './compontents/Skills/Skills'
import Contact from './compontents/Contact/contact'
import About from './compontents/About/About'
import Projects from './compontents/projects/projects'
function App() {
  return (
    <div className="App">
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
