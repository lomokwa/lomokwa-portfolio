import './styles/App.css';

import Hero from "./components/Hero.jsx"
import About from './components/About';
import Navbar from './components/Navbar';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
  return (
   <body className='bg-gray-950 w-fit'> 
    <Navbar />
    <Hero />
    <About />
    <ProjectsGrid />
  </body> 
  );
}

export default App;
