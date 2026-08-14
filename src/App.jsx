import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Ventures from './components/Ventures';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const Ground = () => <div className="pixel-ground" aria-hidden="true" />;

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ground />
        <About />
        <Ground />
        <Skills />
        <Ground />
        <Experience />
        <Ground />
        <Projects />
        <Ground />
        <Ventures />
        <Ground />
        <Achievements />
      </main>
      <Contact />
    </>
  );
}

export default App;
