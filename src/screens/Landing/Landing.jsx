import React from 'react'
import './Landing.css'
import Logos from './Logos'

function Landing() {

    return (
        <section id='landing' className="landing">
            <div className="title-grid-this-is">
                Hi, I'm
            </div>
            <div className="title-grid-name">
                <h1>Adithya Padmashali</h1>
            </div>
            <pre className="title-grid-name-designation">Software Engineer / Full-stack Developer</pre>
            <div className="title-grid-social-media-handles">
                <Logos />
            </div>
            <div className="title-grid-resume-button">
                <a href='https://drive.google.com/file/d/1vSAZFcXFNlpYhZ1rABfNckKLCKYGmaEh/view?usp=sharing' target='blank'>
                    <button className="resume-button">{'> '}View Resume<span>_</span></button>
                </a>
            </div>
            <div className="title-grid-welcome-message">
                <h3>Welcome to my page!</h3>
            </div>
        </section>
    )
}

export default Landing;
