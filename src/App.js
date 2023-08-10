import logo from "./logo.svg";
import "./App.css";
import { gsap } from "gsap";
import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
