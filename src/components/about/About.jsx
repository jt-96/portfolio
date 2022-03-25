import React from 'react';
import './About.css';

function About() {

    return (
        <div className="container about my-3 py-3 px-4">
            <div className="anchor" id="about"></div>
            <h2 className="py-2">About Me</h2>
            <p className="col">Hi, my name is Jonathan, and I'm a full stack developer from Mendoza, Argentina.</p>
            <p className="col">
                Currently looking for my first experience in IT, I've been studying Programming since 2016, recently found an interest in web development, so here we are.
            </p>
            <p className="col">
                I consider myself a responsable and respectful person, auto-didact, eager to learn and always grateful for a helping hand when needed.
            </p>
        </div>
    )
}

export default About;