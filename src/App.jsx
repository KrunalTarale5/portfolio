import { useState } from 'react';
import Header from './component/Header/Header'
import AboutMe from "./component/AboutMe/AboutMe.jsx";
import Projects from './component/Projects/Projects.jsx';
import Contact from './component/Contact/Contact.jsx';
import Footer from './component/Footer/Footer.jsx';
function App() {

  return (
    <>
      <Header/>
      <AboutMe/>
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
