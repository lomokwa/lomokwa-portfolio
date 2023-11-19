import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Hero from "./components/Hero.jsx"
import About from './components/About';
import Navbar from './components/Navbar';
import ProjectsGrid from './components/ProjectsGrid';

// TODO:

// - Migrate to NextJS
// - Fix navbar on mobile
// - Add more projects
// - Add certifications
// - Add contact form
// - Update resume
// - Add skills section
// - Add blog section
// - Add footer
// - Add animations
// - Add file management on website, e.g. resume, images, etc. using firebase, so I can update them without having to redeploy the website
// - Make file management secure so that only I can update the files

function App() {
  return (
   <body className='tw-bg-gray-950 tw-w-fit'> 
    <Navbar />
    <Hero />
    <About />
    <ProjectsGrid />
  </body> 
  );
}

export default App;
