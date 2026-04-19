import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Cyberpunk Alley',
    category: 'Environment Design',
    description: 'A fully playable dystopian alleyway built in Unreal Engine 5. Featuring Lumen global illumination and complex material shaders.',
    link: '#'
  },
  {
    id: 2,
    title: 'Ruins of Eldoria',
    category: 'Level Design & Lighting',
    description: 'Fantasy ruins environment focusing on cinematic lighting, dense foliage, and vertical traversal mechanics.',
    link: '#'
  },
  {
    id: 3,
    title: 'Project Zero',
    category: 'Game Development',
    description: 'A sci-fi action prototype. Developed core mechanics using Blueprints, including advanced AI behaviors and combat systems.',
    link: '#'
  },
  {
    id: 4,
    title: 'Mecha Intro Cinematic',
    category: 'Animation',
    description: 'A short 3D cinematic sequence animated entirely in Sequencer, utilizing advanced motion capture retargeting.',
    link: '#'
  }
];

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className={`reveal-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">02. Selected Works</h2>
        
        <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
