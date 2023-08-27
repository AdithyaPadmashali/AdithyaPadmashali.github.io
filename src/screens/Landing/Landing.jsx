import React, { useEffect, useRef, useState } from 'react'
import './Landing.css'
import GitHub from '../../assets/logos/social/GitHub'
import LinkedIn from '../../assets/logos/social/LinkedIn'
import Discord from '../../assets/logos/social/Discord'

function Landing() {

    const buttonRef = useRef();
    const [isButtonIntersecting, setIsButtonIntersecting] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setIsButtonIntersecting(entry.isIntersecting)
        });
        observer.observe(buttonRef.current)
    }, [])

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
                <div className="landing-logo">
                    <a href='https://www.linkedin.com/in/adithya-padmashali-034b67195' target='blank'>
                        <LinkedIn />
                    </a>
                </div>
                <div className="landing-logo">
                    <a href='https://www.github.com/AdithyaPadmashali' target='blank'>
                        <GitHub />
                    </a>
                </div>
                <div className="landing-logo">
                    <a href='https://discordapp.com/users/636595226709852190' target='blank'>
                        <Discord />
                    </a>
                </div>
            </div>
            <div className="title-grid-resume-button">
                <a href='https://drive.google.com/file/d/1vSAZFcXFNlpYhZ1rABfNckKLCKYGmaEh/view?usp=sharing' target='blank'>
                    <button className="resume-button" ref={buttonRef}>{'> '}View Resume<span>_</span></button>
                </a>
            </div>
            <div className="title-grid-welcome-message">
                <h3>Welcome to my page!</h3>
            </div>
        </section>
    )
}

export default Landing;