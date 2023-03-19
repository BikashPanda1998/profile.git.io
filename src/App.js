
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Home from './component/Home';
import Project from './component/Project';
import Skill from './component/Skill';

function App() {
  return (
   <div className="App">
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
