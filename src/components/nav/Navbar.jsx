import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <p><Link to="/" className="nav-brand">Prashant Rayamajhi</Link></p>
            </div>

            <ul className="nav-list">
                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">Works</a></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
