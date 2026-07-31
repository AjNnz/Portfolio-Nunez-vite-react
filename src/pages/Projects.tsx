import React from 'react';
import rubyImg from '../assets/Img/Ruby.png';
import sparkImg from '../assets/Img/Spark Events.png';
import logoImg from '../assets/Img/welcome sign.png';

interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Ruby Album Review',
    description: 'A review page dedicated to the album "Ruby" by the artist Jennie.',
    image: rubyImg,
  },
  {
    title: 'Spark Events',
    description: 'A service-oriented website created for SPARK EVENTS, highlighting their full range of products and services.',
    image: sparkImg,
  },
  {
    title: 'Creative Portfolio',
    description: 'A personal prototype portfolio developed as part of self-directed learning and practice.',
    image: logoImg,
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-8 tracking-widest">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <article key={project.title} className="bg-blue-50 rounded-2xl p-7 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex gap-4 items-start mb-4">
                  <img src={project.image} alt={project.title} className="w-20 h-20 rounded object-cover flex-shrink-0" />
                  <h3 className="text-lg font-black leading-snug text-primary">{project.title}</h3>
                </div>
                <div className="relative p-4 text-gray-600 leading-relaxed">
                  <span className="absolute -top-2 left-1 text-4xl text-accent">"</span>
                  <p>{project.description}</p>
                  <span className="absolute -bottom-3 right-1 text-4xl text-accent">"</span>
                </div>
              </div>
              <button className="mt-6 self-start border-none bg-blue-300 text-primary font-black py-2 px-5 rounded-full cursor-pointer hover:bg-blue-200 transition-colors">View Project</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};