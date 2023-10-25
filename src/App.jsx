import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
