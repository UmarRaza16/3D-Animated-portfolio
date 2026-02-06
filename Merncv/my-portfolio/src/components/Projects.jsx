import React from 'react';
import { projects } from '../data';
import { Github, ExternalLink, Layers } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
          <Layers size={20} />
          <span>PORTFOLIO</span>
        </div>
        <h2 className="text-4xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((item, index) => (
          <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Project Preview Placeholder */}
            <div className="h-48 bg-gray-200 group-hover:bg-blue-50 transition-colors flex items-center justify-center">
              <span className="text-gray-400 group-hover:text-blue-200 font-bold text-4xl italic">MERN</span>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{item.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tech.map((skill, i) => (
                  <span key={i} className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <a href={item.github} className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600">
                  <Github size={18} /> Source Code
                </a>
                <a href={item.live} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;