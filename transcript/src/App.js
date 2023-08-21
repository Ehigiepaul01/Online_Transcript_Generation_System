import React from 'react';
import './styles.css'; // Import your CSS file
import Nav from './components/Nav';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Feedback from './components/Feedback';
import Info from './components/Info';
import Footer from './components/Footer';
// import './font-awesome.min.css'; // Import font-awesome CSS

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />  
      <Why />
      <About />
      <Feedback />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
