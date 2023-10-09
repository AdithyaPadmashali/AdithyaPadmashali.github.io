import React, { useRef, useState, useEffect } from 'react'
import './Publications.css'

function Publications() {

    const publicationRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.forEach((value) => {
                        publicationRef.current.classList.add('fancify-publication')
                    });
                } else {
                    // entry.target.classList.forEach((value) => {
                    //     publicationRef.current.classList.remove('fancify-publication')
                    // });
                }
            })
        });
        observer.observe(publicationRef.current)
    }, [])

    return (
        <div id='publications' className="publication-section">
            <section className="publication-container" ref={publicationRef}>
                <div className="publication-title">Integrated log-aware CI/CD pipeline with custom bot for monitoring</div>
                <p className="publication-description">
                    {'“ Our aim is to come up with an improved CI/CD and monitoring process which is convenient for the developers to set up and leverage with the least amount of configuration and manual intervention. Additionally, it proposes a customizable python application to process and maintain the inherently complex logs generated by the pipeline, contributing to the ease of monitoring the pipeline. ”'}
                </p>
                <div className="publication-links">
                    {`Published in`}<br />
                    <a href='http://www.icccbda.com/' target='blank'><span className='click-for-details'>8th International Conference on Cloud Computing and Big Data Analytics (ICCCBDA)</span></a>

                </div>

                <div className="publication-button-container">
                    <a href='https://ieeexplore.ieee.org/abstract/document/10154891' target='blank'>
                        <button className="publication-button">{'> '}Read Paper<span>_</span></button>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Publications