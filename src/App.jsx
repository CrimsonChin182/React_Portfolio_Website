import React from "react";
import ReactDOM from "react-dom";
import styles from './App.module.css'; //maybe comment this out????
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Navbar/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";


function App() {
  
  return<div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  
  </div>;
}
console.log("App has compiled!");
console.log(styles);

export default App;
