import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-blue-300 px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-black tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>NUÑEZ</h1>
      <div className="flex gap-8 font-bold tracking-wider">
        <a href="#home" className="text-primary hover:text-secondary transition-colors duration-250">HOME</a>
        <a href="#about" className="text-primary hover:text-secondary transition-colors duration-250">ABOUT</a>
        <a href="#projects" className="text-primary hover:text-secondary transition-colors duration-250">PROJECTS</a>
        <a href="#contact" className="text-primary hover:text-secondary transition-colors duration-250">CONTACT</a>
      </div>
    </nav>
  );
};