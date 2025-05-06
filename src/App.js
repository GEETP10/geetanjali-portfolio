import './App.css';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#D3D3D3"}}>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
