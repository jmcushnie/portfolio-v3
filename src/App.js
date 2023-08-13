import "./App.css";
import NavBar from "./components/navBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Aurabg from "./components/Aurabg";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <About />

      <Skills />

      <Footer />
    </main>
  );
}

export default App;
