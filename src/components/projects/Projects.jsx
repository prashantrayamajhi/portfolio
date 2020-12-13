import React from 'react'
import './Projects.scss';
export default function Projects({id, title, img, link}) {
    return ( 
        <div key={id} className="project"> 
            <img src={img} alt={title} />
            <div className="details"> 
                <h3>{title}</h3>
                <a href={link} target="blank">Visit Site</a>
            </div>
        </div>
    )
}
