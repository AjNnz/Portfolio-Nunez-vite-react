import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from '../components/common/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;