import React, {useState} from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom';


export default function Navbar() {

    // open or close menu
    const [open, setOpen] = useState(false);

    const onMenuClick = () => {
        setOpen(!open)
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <p><Link to="/" className="nav-brand">Prashant Rayamajhi</Link></p>
            </div>

            <ul className={`nav-list ${open ? 'responsive' : ''}`}>
                    <li className="nav-item"><a className="nav-link" href="/" onClick={onMenuClick}>Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#skills" onClick={onMenuClick}>Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="/#projects" onClick={onMenuClick}>Projects</a></li>
                    <li className="nav-item"><Link className="nav-link" to="/blog" onClick={onMenuClick}>Blog</Link></li>
                    <li className="nav-item"><a className="nav-link" href="/#contact" onClick={onMenuClick}>Contact</a></li>
            </ul>
            <div className="hamburger">
                <img onClick={onMenuClick} alt="" src="https://www.flaticon.com/svg/static/icons/svg/1636/1636053.svg" />
            </div>
        </nav>
    )
}
