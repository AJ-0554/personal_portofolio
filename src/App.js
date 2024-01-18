import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
const App=()=> {
  return (
    <div >
    <Navbar/>
    <Home/>
    <About/>
    <Portofolio/>
    <Skills/>
    <Contact/>
    <SocialIcons/>
    </div>
  );
}

export default App;
