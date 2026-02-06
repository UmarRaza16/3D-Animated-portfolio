import React from 'react';
import { skillCategories } from '../data';
import { Terminal } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Terminal className="text-blue-600" />
          <h3 className="text-3xl font-bold">Technical Stack</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-blue-600 mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;