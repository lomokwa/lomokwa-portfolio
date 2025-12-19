import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import StartupAnimation from "@/components/StartupAnimation";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";

function App() {
  return (
    <main className="bg-gray-950">
      {/* <StartupAnimation /> */}
      <Navbar />
      <Hero />
      <TechStack />
      <Timeline />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
