import React from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
	const projectList = [
		{ id: 1, name: 'UVA Maps', description: 'Django Web app providing cool information about each place' },
		{ id: 2, name: 'Music Data Lake', description: 'Pipeline of different ' }
	  ];

	return (
	<div>
		<h2>Projects</h2>
		{projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
    </div>

	);
};