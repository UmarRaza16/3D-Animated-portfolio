import React from 'react';
import { Download } from 'lucide-react';
import { bio } from '../data';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {bio.name.split(' ')[0]} Portfolio
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#education" className="hover:text-blue-600 transition">Education</a>
          <a 
            href={bio.resumeUrl} 
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;