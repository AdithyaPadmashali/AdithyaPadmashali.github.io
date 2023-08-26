import React from 'react'
import './Landing.css'
import GitHub from '../../assets/logos/social/GitHub'
import LinkedIn from '../../assets/logos/social/LinkedIn'
import Discord from '../../assets/logos/social/Discord'

function Landing() {
    return (
        <section className="landing">
            <div className="title-grid-this-is">
                Hi, I'm
            </div>
            <div className="title-grid-name">
                <h1>Adithya Padmashali</h1>
            </div>
            <pre className="title-grid-name-designation">Software Engineer / Full-stack Developer</pre>
            <div className="title-grid-social-media-handles">
                <div className="landing-logo">
                    <LinkedIn />
                </div>
                <div className="landing-logo">
                    <GitHub />
                </div>
                <div className="landing-logo">
                    <Discord />
                </div>
            </div>
            <div className="title-grid-resume-button">
                <button className="resume-button">View Resume</button>
            </div>
            <div className="title-grid-welcome-message">
                <h3>Welcome to my page!</h3>
            </div>
        </section>
    )
}

export default Landing;