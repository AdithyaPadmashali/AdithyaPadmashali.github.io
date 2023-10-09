import React, { useRef, useState, useEffect } from 'react'
import './Skills.css'

import COriginal from '../../assets/logos/skills/languages/c-original';
import CPP from '../../assets/logos/skills/languages/cplusplus-original';
import Go from '../../assets/logos/skills/languages/go-original-wordmark';
import Java from '../../assets/logos/skills/languages/java-original-wordmark';
import Python from '../../assets/logos/skills/languages/python-original-wordmark';

import AWS from '../../assets/logos/skills/technologies/amazonwebservices-original-wordmark';
import Docker from '../../assets/logos/skills/technologies/docker-plain-wordmark';
import Git from '../../assets/logos/skills/technologies/git-plain-wordmark';
import GitHub from '../../assets/logos/skills/technologies/github-original-wordmark';
import Terraform from '../../assets/logos/skills/technologies/terraform-original-wordmark';
import GCP from '../../assets/logos/skills/technologies/googlecloud-original-wordmark';
import Linux from '../../assets/logos/skills/technologies/linux-original';

import JS from '../../assets/logos/skills/webdev/javascript-original';
import Express from '../../assets/logos/skills/webdev/express-original-wordmark';
import Flask from '../../assets/logos/skills/webdev/flask-original-wordmark';
import HTML from '../../assets/logos/skills/webdev/html5-original-wordmark';
import MongoDB from '../../assets/logos/skills/webdev/mongodb-original-wordmark';
import NodeJS from '../../assets/logos/skills/webdev/nodejs-original-wordmark';
import Spring from '../../assets/logos/skills/webdev/spring-plain-wordmark';
import TS from '../../assets/logos/skills/webdev/typescript-original';
import ReactLogo from '../../assets/logos/skills/webdev/react-original-wordmark';
import CSS from '../../assets/logos/skills/webdev/css3-original-wordmark';


function Skills() {

    const language_logosRef = useRef();
    const tech_logosRef = useRef();
    const web_logosRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.forEach((value) => {
                        value === 'language' && language_logosRef.current.classList.add('fancify')
                        value === 'tech' && tech_logosRef.current.classList.add('fancify')
                        value === 'web' && web_logosRef.current.classList.add('fancify')
                    });
                } else {
                    // entry.target.classList.forEach((value) => {
                    //     value === 'language' && language_logosRef.current.classList.remove('fancify')
                    //     value === 'tech' && tech_logosRef.current.classList.remove('fancify')
                    //     value === 'web' && web_logosRef.current.classList.remove('fancify')
                    // });
                }
            })
        });
        observer.observe(language_logosRef.current)
        observer.observe(tech_logosRef.current)
        observer.observe(web_logosRef.current)

    }, [])

    return (
        <div id='skills' className="skills-section">
            <section className="logos-container">
                <div className="logos-title">Languages</div>
                <section className='logos language' ref={language_logosRef}>
                    <COriginal />
                    <CPP />
                    <Go />
                    <Java />
                    <Python />
                </section>
                <div className="logos-title">{'{ '}Technologies{' }'}</div>
                <section className="logos tech" ref={tech_logosRef}>
                    <AWS />
                    <Docker />
                    <Git />
                    <GitHub />
                    <GCP />
                    <Linux />
                    <Terraform />
                </section>
                <div className="logos-title">{'< '}Web Development{' />'}</div>
                <section className="logos web" ref={web_logosRef}>
                    <CSS />
                    <Express />
                    <Flask />
                    <HTML />
                    <JS />
                    <TS />
                    <MongoDB />
                    <NodeJS />
                    <ReactLogo />
                    <Spring />
                </section>
            </section>
        </div>

    )
}

export default Skills;