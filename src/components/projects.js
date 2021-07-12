import { useState, useEffect } from "react";

const Projects = () => {
  const [activeTag, setActiveTag] = useState(null);
  const projects = [
    {
      title: 'Recipe Blog',
      tags: ['html', 'css', 'js'],
      img: 'https://picsum.photos/id/695/320/275',
      description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. '
    },
    {
      title: 'My Gallery',
      tags: ['html', 'css', 'responsive'],
      img: 'https://picsum.photos/id/694/320/275',
      description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. '
    },
    {
      title: 'Checkout',
      tags: ['html', 'css', 'responsive'],
      img: 'https://picsum.photos/id/693/320/275',
      description: 'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. '
    },
  ];

  const getTags = () => {
    let tags = [];
    projects.map(p => {
      p.tags.map(t => {
        if (!tags.includes(t)) tags.push(t);
      });
    });
    return tags;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects ({projects.length})</h2>
        <TagsChooser tags={getTags()} onChange={setActiveTag} />
      </div>

      {activeTag ?
        projects.filter(p => p.tags.includes(activeTag)).map(p => <Project key={p.title} project={p} />) :
        projects.map(p => <Project key={p.title} project={p} />)}
    </section>
  );
}

const Project = ({project}) => {
  return (
    <div className="card project">
      <img src={project.img} alt={project.title} />
      <div className="info">
        <div className="tags">
          {project.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
        </div>
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.description}</p>
        <div className="buttons">
          <button className="btn primary">Demo</button>
          <button className="btn secondary">Code</button>
        </div>
      </div>
    </div>
  );
}
 
const TagsChooser = ({ tags, onChange }) => {
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    onChange(activeTag);
  }, [activeTag]);

  const handleClick = (t) => {
    setActiveTag(t == activeTag ? null : t)
  }

  return (
    <div className="tags-chooser">
      {tags.map(t =>
        <span key={t} className={`tag ${activeTag == t ? 'active' : ''}`} onClick={() => handleClick(t)}>{t}</span>)
      }
    </div>
  );
}

export default Projects;