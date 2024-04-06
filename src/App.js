import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Enquire from './components/Enquire.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Enquire />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
