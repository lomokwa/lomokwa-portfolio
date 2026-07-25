import { Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import ProjectDetail from "@/pages/ProjectDetail";

function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Timeline />
      <Projects />
    </>
  );
}

function App() {
  return (
    <main className="bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
