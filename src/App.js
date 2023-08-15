import './styles/App.css';

import Hero from "./components/Hero.jsx"
import ProjectCard from "./components/ProjectCard.jsx"
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
   <html className='bg-gray-950'> 
    <Navbar />
    <Hero className="snap-y"/>
    <About className=""/>
    <ProjectCard />
  </html> 
  );
}

export default App;
