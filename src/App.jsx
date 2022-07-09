import React from "react";
import Header from "./components/header/Header";
import Nav from './components/nav/Nav'; 
import About from './components/about/About'; 
import Experience from './components/experience/Experience'; 
import Services from './components/services/Services'; 
import Portfolio from './components/portfolio/Portfolio';  
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'; 
import Links from "./components/links/Links";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Links />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
