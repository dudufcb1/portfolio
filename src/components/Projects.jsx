import React from 'react';
import './fetchProjects';
import { useFetchProject } from './fetchProjects';

const Projects = ({ contenido }) => {
  const { projects, loading } = useFetchProject({ contenido });
  console.log(contenido);

  if (loading) {
    return (
      <div className="projects">
        <h2>Loading...</h2>
        <div className="Cargando..."></div>
      </div>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Proyectos</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, url, title } = project;
          return (
            <a key={id} href={url} target="_blank" rel="noreferrer" className="project">
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
