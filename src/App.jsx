import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="About">
      <About />
    </section>
    <Portfolio />

    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
