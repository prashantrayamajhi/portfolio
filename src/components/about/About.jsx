import React from 'react';
import './AboutMe.scss';

export default function About({emoji, title, description}) {
    return (
        <div className="about">
            <h1>{emoji}</h1>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
