import React from 'react'
import './Contact.scss';
export default function Contact() {
    return (
        <form className="form">
            <div className="container">
                <h1>Get in touch!</h1>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Full Name" required />  
                    </div>
                    <div className="input-wrapper">
                        <input type="email" placeholder="Email" required />  
                    </div>
                    <div className="input-wrapper">
                        <input type="tel" placeholder="Phone" />
                    </div>
                    <div className="input-wrapper">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button>Send</button>
               
            </div>
        </form>
    )
}
