import React from 'react';
import './Home.scss'
import Prashant from './../../img/prashant.jpg'

import Skills from './../skills/SkillsWrapper';
import Projects from './../projects/ProjectsWrapper';
import Contact from './../contact/Contact';

export default function Home() {
    return (
        <>
            <div className="home">
                <img src={Prashant} alt="Prashant Rayamajhi" />
                <h3>Hi, I'm Prashant</h3>
                <h1>Building Fascinating Web Applications</h1>
                <p>I am a full stack developer, I specialize at working on the backend, handling server <br /> and creating and maintaining database.</p>
                <a href="#contact"><button>Connect With Me</button></a>
            </div>
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}
