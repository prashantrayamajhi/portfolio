import React from 'react'
import './Footer.scss'

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className="social">
                <a href="https://www.instagram.com/prashant_rayamajhi/" target="_"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111463.svg" alt="instagram"/></a>
                <a href="https://www.facebook.com/prashant.rayamajhi.71" target="_"><img src="https://www.flaticon.com/svg/static/icons/svg/2111/2111398.svg" alt="facebook"/></a>
                <a href="https://github.com/prashantrayamajhi" target="_"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733553.svg" alt="github"/></a>
                <a href="https://twitter.com/__prashant85__" target="_"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733579.svg" alt="twitter"/></a>
            </div>
            <div className="logo">
                <p>Prashant Rayamajhi {date}</p>
            </div>
        </footer>
    )
}
