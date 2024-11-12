//import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import HeroSection from './component/heroSection/HeroSection';
import AboutMe from './component/aboutMe/AboutMe';
import Skills from './component/skills/Skills';
import Projects from './component/projects/Projects';
import Footer from './component/footer/Footer';
import Experience from './component/experience/Experience';
function App() {
  return (
    <div className='app'>
     <Navbar/>
     <HeroSection/>
     <AboutMe/>
     <Skills/>
     <Projects/>
     <Experience/>
     <Footer/>
    </div>
  );
}

export default App;
