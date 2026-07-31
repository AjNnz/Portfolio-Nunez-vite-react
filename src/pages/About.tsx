import React from 'react';
import aboutPhoto from '../assets/Img/profile 2.png';
import htmlIcon from '../assets/Img/logos/html.png';
import cssIcon from '../assets/Img/logos/css.png';
import jsIcon from '../assets/Img/logos/javascript.png';
import figmaIcon from '../assets/Img/logos/figma.png';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 60, icon: htmlIcon },
  { name: 'CSS', percentage: 60, icon: cssIcon },
  { name: 'JAVASCRIPT', percentage: 20, icon: jsIcon },
  { name: 'FIGMA', percentage: 15, icon: figmaIcon },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 bg-blue-100">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 items-center">
        <div className="w-full">
          <img src={aboutPhoto} alt="Angelito Nuñez" className="w-full h-auto" />
        </div>

        <div className="col-span-2 flex flex-col gap-6 ">
          <div>
            <div className="inline-flex items-center bg-blue-200 rounded px-4 py-3 mb-4">
              <h2 className="text-2xl font-black tracking-tighter">About Me.</h2>
            </div>
            <p className="text-gray-600 text-sm max-w-3xl leading-relaxed">
              Hi! I'm Angelito Nunez, an aspiring web developer who loves to learn and code every day. I'm driven by curiosity and a passion for growth, and I'm excited for any challenge or project that comes my way!
            </p>
          </div>

          <div>
            <div className="inline-flex items-center bg-blue-200 rounded px-4 py-3 mb-4">
              <h2 className="text-2xl font-black tracking-tighter">My Skills</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white rounded-xl p-4 text-center shadow-md">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-black text-primary text-sm">{skill.name} {skill.percentage}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};