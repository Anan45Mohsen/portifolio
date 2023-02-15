import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import {NavBar} from '../src/components/NavBar.js';
import './bootstrap-5.2.0-dist/css/bootstrap.min.css'
import {Banner} from '../src/components/Banner.js';
import{Skills} from '../src/components/Skills.js';
import {ProjectCard} from '../src/components/ProjectCard.js';
import {Projects} from '../src/components/projects.js';
import { Contact } from './components/Contact.js';
import {Footer} from './components/Footer.js'

function App() {
  return (
   
  
   
  
     <div className="App">
  
    <NavBar/>
    <Banner/>
    <Skills/>
    <ProjectCard/>
    <Projects/>
    <Contact/>
    <Footer/>
    
   
   </div>
  );
}

export default App;
