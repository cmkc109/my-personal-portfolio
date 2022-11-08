import './App.css';
import './index.css'

//components import
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div className="App">
       <Nav />
       <Header />
       <About />
       <Experience />
       <Portfolio />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
