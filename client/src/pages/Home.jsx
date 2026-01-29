import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <section className="hero">
        <h2>Hi — I'm Mehluli. I build things with JavaScript.</h2>
        <p>Software engineer | Full-stack developer | Open to opportunities</p>
      </section>

      <section>
        <h3>Projects</h3>
        <div className="grid">
          {projects.map(p => <ProjectCard key={p._id} project={p} />)}
        </div>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
      </section>
    </div>
  );
}