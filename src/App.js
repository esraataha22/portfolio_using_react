import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <br/> <br/>
      <AboutMe />
      <br/> <br/>
      <Skills />
      <br/> <br/>
      <Portfolio />
      <br/> <br/>
      <Footer/>
    </div>
   
  );
}

export default App;
