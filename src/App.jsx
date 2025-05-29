import { useState } from 'react'
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import Navbar from './components/sections/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    </div>
  );
}

export default App
