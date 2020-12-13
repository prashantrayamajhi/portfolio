import React from 'react'
import './Projects.scss';

import Projects from './Projects';

// images
import ConfessionImage from './../../img/confession.jpg'
import NewcastleImage from './../../img/newcastle.jpg'
import Trostrumimage from './../../img/trostrum.jpg'
import EronImage from './../../img/eron.jpg'

export default function ProjectsWrapper() {
    const projects = [
        {
            id : 1,
            img: NewcastleImage,
            title: "Newcastle Organiser",
            link : "https://newcastle-organizer.vercel.app/"
        },
        {
            id : 2,
            img: ConfessionImage,
            title: "Confession App",
            link : "http://share-secrets.herokuapp.com/"
        },
        {
            id : 3,
            img: Trostrumimage,
            title: "Trostrum",
            link : "https://trostrum-g.vercel.app/"
        },
        {
            id : 4,
            img: EronImage,
            title: "Eron Services",
            link : "https://prashantrayamajhi.github.io/eron/"
        },
    ]

    const AllProjects = projects.map(project => {
        return <Projects id={project.id} img = {project.img} title={project.title} link={project.link}/>
    })
    return (
        <>
        <h2 id="projects">My Projects</h2>
        <div className="project-wrapper">
            {AllProjects}
        </div>
        </>
    )
}
