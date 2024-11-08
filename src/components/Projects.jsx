import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2><a href="https://github.com/ArnavBarway/">Projects</a></h2>
    <div className="project-grid">
      <div className="project-card">
        <h3>TSC Project</h3>
        <p>A web application for a currency system.</p>
        <a href="http://tsc.is-best.net" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div className="project-card">
        <h3>kindNodes</h3>
        <p>An open-source Minecraft server hosting dashboard.</p>
        <a href="https://kind-nodes.vercel.app" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
