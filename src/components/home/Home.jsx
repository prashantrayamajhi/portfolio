import React from 'react';
import './Home.scss'
import Prashant from './../../img/prashant.jpg'

export default function Home() {
    return (
        
        <div className="home">
            <img src={Prashant} alt="Prashant Rayamajhi" />
            <h3>Hi, I'm Prashant</h3>
            <h1>Building Fascinating Web Applications</h1>
            <p>I am a full stack developer, I specialize at working on the backend, handling server <br /> and creating and maintaining database.</p>
            <button>Connect With Me</button>
        </div>
    )
}
