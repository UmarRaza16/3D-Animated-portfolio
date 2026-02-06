import React from 'react';
import './App.css'; 
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const App = () => {
  const data = {
    name: "Md Umar Raza",
    education: "Master IN Computer Application (MCA)",
    projects: [
      { title: "Resturant Web Application", tech: ["React", "Node", "MongoDB"], desc: "Fully Responsive with Differents Features And Reservation." },
      { title: "GYM Web Application", tech: ["Node", "Express", "React"], desc: "Developed a Responsive GYM Website " }
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS S3", "Git","python","Java","c#",".NET"]
  };

  return (
    <div>
      <nav className="navbar">
        <h2 style={{color: '#2563eb'}}>Portfolio</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#" className="resume-btn">Resume <Download size={14}/></a>
        </div>
      </nav>

      <header className="hero">
        <h1>Hi, I'm <span>{data.name}</span></h1>
        <p>A Full Stack Developer specializing in the MERN stack & AWS.</p>
        <div className="btn-group" style={{justifyContent: 'center'}}>
           <a href="https://github.com/UmarRaza16"><Github /></a>
           <a href="https://www.linkedin.com/in/md-umar-raza"><Linkedin /></a>
           <a href="umar16raza@gmail.com"><Mail /></a>
        </div>
      </header>

      <section id="skills" className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>MERN Stack</h3>
            {data.skills.map(s => <span className="tag">{s}</span>)}
          </div>
          <div className="card">
            <h3>Education</h3>
            <p><strong>{data.education}</strong></p>
            <p> 2026</p>
          </div>
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          {data.projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div style={{margin: '15px 0'}}>
                {p.tech.map(t => <span className="tag">{t}</span>)}
              </div>
              <div className="btn-group">
                <a href="https://fodiiie.netlify.app/" style={{color: '#2563eb'}}>Live Demo <ExternalLink size={14}/></a>
                <a href="https://github.com/UmarRaza16/Food-resturant-Website" style={{color: '#64748b'}}>Github</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;