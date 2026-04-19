import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import SmokeBackground from './components/SmokeBackground';
import WaveDivider from './components/WaveDivider';
import TubesCursorEffect from './components/TubesCursorEffect';
import Minimap from './components/Minimap';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <SmokeBackground smokeColor="#aaaaaa" />
      <TubesCursorEffect color="#ffffff" />
      <Minimap />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider />
        <Projects />
        <WaveDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
