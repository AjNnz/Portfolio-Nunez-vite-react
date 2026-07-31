import React from 'react';
import profilePhoto from '../assets/Img/profile.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-black tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>ANGELITO NUÑEZ JR.</h1>
          <p className="text-gray-600 text-sm tracking-widest uppercase mb-6 text-center">- Aspiring Web Developer -</p>
          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            "Every success has a beginning, and this is mine. I'm passionate about growing, learning, and becoming a pro in my craft."
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-blue-300 text-primary font-bold shadow-md hover:bg-blue-200 transition-all duration-200 hover:translate-y-[-2px]">Explore Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-blue-300 text-primary font-bold shadow-md hover:bg-blue-200 transition-all duration-200 hover:translate-y-[-2px]">Contact Me</a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-100 h-100 bg-transparent  rounded-lg p-0 flex items-center justify-center overflow-hidden">
            <img
              src={profilePhoto}
              alt="Angelito Nuñez Jr."
              className="w-full h-auto display-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};