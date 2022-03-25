import React from 'react';
import CardProject from '../cardProject/Card';
import './Projects.css';
import projectsJSON from '../../assets/files/projects.json';

function Project() {

    return (
        <div className="container projects my-3 py-3 px-4">
            <div className="anchor" id="projects"></div>
            <h2 className="py-2">Projects</h2>
            <p className="py-2">Here are some of my personal projects done so far.</p>
            <div className="py-3 d-flex flex-row justify-content-around">
                    {
                        projectsJSON.map((project) => (
                            <CardProject project={project} key={project.id} />
                        ))
                    }
            </div>
        </div>
    )
}

export default Project;