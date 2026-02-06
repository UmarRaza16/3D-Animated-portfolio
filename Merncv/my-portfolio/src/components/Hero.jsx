import React from 'react';
import { bio } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react'; // Check spelling!

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* ... (Previous code) ... */}
        
        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            View My Work
          </button>
          
          {/* FIXED SOCIAL LINKS SECTION */}
          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            <a href={bio.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Github size={24} />
            </a>
            <a href={bio.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Linkedin size={24} />
            </a>
            <a href={bio.email} className="text-gray-600 hover:text-blue-600 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;