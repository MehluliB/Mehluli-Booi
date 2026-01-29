import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      {project.coverImage && <img src={project.coverImage} alt={project.title} className="card-img" />}
      <div className="card-body">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <p className="stack">{project.stack?.join(' · ')}</p>
        <div className="links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </article>
  );
}