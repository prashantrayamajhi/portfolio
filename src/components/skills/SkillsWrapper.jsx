import React from 'react'
import './Skills.scss';

export default function SkillsWrapper() {
    return (
        <div className="skills-wrapper" id="skills">
            <h2>My Skills</h2>
            <div className="skills-cards">
                <div className="card">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML 5, CSS, JS</li>
                        <li>SCSS</li>
                        <li>Bootstrap</li>
                        <li>J-Query</li>
                        <li>React</li>
                        <li>Typescript</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Backend</h3>
                    <ul>
                        <li>Nodejs</li>
                        <li>Typescript</li>
                        <li>MySQL</li>
                        <li>Postgres</li>
                        <li>Mongodb</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Technologies</h3>
                    <ul>
                        <li>Github</li>
                        <li>Visual Studio Code</li>
                        <li>Codepen io</li>
                        <li>Discord</li>
                        <li>Stackoverflow</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
