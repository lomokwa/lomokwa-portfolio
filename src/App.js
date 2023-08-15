import './styles/App.css';

import Hero from "./components/Hero.jsx"
import ProjectCard from "./components/ProjectCard.jsx"
import About from './components/About';
import Navbar from './components/Navbar';
import PorjectsGrid from './components/ProjectsGrid';

function App() {
  return (
   <html className='bg-gray-950'> 
    <Navbar />
    <Hero />
    <About />
    <PorjectsGrid />
  </html> 
  );
}

export default App;
