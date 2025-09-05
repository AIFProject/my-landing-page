import React from 'react';
import Navbar from './component/navbar';
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
