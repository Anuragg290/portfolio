import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import Footerb from './components/sections/Footerb';





function App() {
const [isLoaded, setIsLoaded] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
  return (
     <> {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} /> } {" "}
     <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100 ": "opacity-0"} bg-black text-gray-100`}>
      
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <MobileMenu key={menuOpen} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
      <Footerb/>
    


     </div>
     </>
  );
}

export default App
