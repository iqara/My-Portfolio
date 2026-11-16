import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentlyLearning from "./components/CurrentlyLearning";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Cybersecurity from "./components/Cybersecurity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gray-50 text-slate-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />

        <About />

        <Education />

       <Skills />

        <CurrentlyLearning />

        <Projects />

        <Cybersecurity />

        <Certificates />

        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;