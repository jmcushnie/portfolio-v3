import "./App.css";
import { gsap } from "gsap";
import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
