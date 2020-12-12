import React from 'react'
import './AboutMe.scss';

import About from './About';

export default function AboutMe() {

    const about = [
        {
            id : 1,
            title : "Who Am I",
            description: "I am Prashant Rayamajhi. I have been programming for 2 years and I am inspired to become a professional web developer.",
            emoji : "🐵"
        },
        {
            id : 2,
            title : "Hobbies",
            description: "I love outdoor activities like football, cycling, hiking etc. I mostly listen to rock and metal music. I love learning, teach programming and meeting new people.",
            emoji : "⚽️"
        },
        {
            id : 3,
            title : "Education",
            description: "I finished my high school just a few weeks ago.",
            emoji : "👨🏼‍🎓"
        },
    ];
 
    const AllAbout = about.map(about=>{
        return <About key={about.id} emoji={about.emoji} title={about.title} description={about.description} />
    })
      

    return (
        <>
        <h2>More About Me</h2>
        <div className="about-wrapper">
            {AllAbout}
        </div>
        </>
    )
}
