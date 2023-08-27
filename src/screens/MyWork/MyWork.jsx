import React from 'react'
import './MyWork.css'

function MyWork() {
    return (
        <div id='work' className="work-section">
            <section className="work-container">
                <div className="work-title">{'< '}Usage Tracking System{' />'}</div>
                <p className="work-description">
                    As part of <a href='https://www.morganstanley.com/' target='blank'><span className='click-for-details'>
                        Morgan Stanley 2023 Technology Spring Analyst Internship </span></a>
                    program - A custom end-to-end implementation and productionalization of a system to extract,
                    process and persist application usage data for visualization and reporting.
                </p>


                <div className="work-title">{'` '}Muxable/SCTP{' `'}</div>
                <p className="work-description">
                    As a 2022 summer intern at <a href='https://www.muxable.com/' target='blank'><span className='click-for-details'>Muxable Labs, Brooklyn,
                        NY</span></a> -
                    Contribution to the open source project -
                    <a href='https://github.com/muxable/sctp' target='blank'><span className='click-for-details'>muxable/sctp</span></a> forked from pion/sctp. Based on the Go implementation of
                    <a href='https://datatracker.ietf.org/doc/html/rfc4960' target='blank'><span className='click-for-details'> Stream Control Transmission Protocol</span></a>
                    <div className="work-button-container">
                        <a href='https://github.com/muxable/sctp/pull/1' target='blank'>
                            <button className="work-button">{'> '}View Project<span>_</span></button>
                        </a>
                    </div>
                </p>

                <div className="work-title">{"< "}Chat-bot for <a href='https://www.buzzwomen.org/' target='blank'><span className='click-for-details'>Buzzwomen</span></a>{" >"}</div>
                <p className="work-description">
                    As part of the 2022 Morgan Stanley Code to Give Hackathon -
                    An application-agnostic <a href='https://rasa.com/' target='blank'><span className='click-for-details'>chat-bot engine built with RASA </span></a>for holding a friendly conversation
                    with women in rural areas who are motivated to become entrepreneurs.
                    The conversation with the chatbot would ideally assist the users in brainstorming
                    and reaching their goals.
                    <div className="work-button-container">
                        <a href='https://github.com/AdithyaPadmashali/buzz_women_chatbot_rasa' target='blank'>
                            <button className="work-button">{'> '}View Project<span>_</span></button>
                        </a>
                    </div>
                </p>

                <div className="work-title">{'__'}Python OpenFAM API{'__'}</div>
                <p className="work-description">
                    As part of <a href='https://www.hpe.com/in/en/home.html' target='blank'><span className='click-for-details'>HPE Catch Them Young Program</span></a>, 2022 -
                    <a href='https://openfam.github.io/' target='blank'><span className='click-for-details'> OpenFAM</span></a>, originally written in C++ is an API for using
                    distributed systems that contain Fabric Attached Memory.
                    Our goal - Enable support for the API in python.
                    <div className="work-button-container">
                        <a href='https://github.com/HPE-FAM/python_fam_test/tree/main' target='blank'>
                            <button className="work-button">{'> '}View Project<span>_</span></button>
                        </a>
                    </div>
                </p>

                <div className="work-title">{'${ '}<a href='https://streamr.network' target='blank'><span className='click-for-details'>Streamr</span></a> Data Challenge {' }'}</div>
                <p className="work-description">
                    2020, As a participant in the Ingenius Hackathon
                    - Integrate the Streamr API for enabling
                    data unions into our application, <a href='https://devfolio.co/projects/globetrotter' target='blank'><span className='click-for-details'>Globetrotter</span></a>. As the end goal,
                    we set up a <a href='https://streamr.network/case-studies/data-unions/' target='blank'><span className='click-for-details'>data union</span></a> to sell travel data from our application in the marketplace.
                    <div className="work-button-container">
                        <a href='https://github.com/AdithyaPadmashali/globetrotter_v1/tree/streamr_integration' target='blank'>
                            <button className="work-button">{'> '}View Project<span>_</span></button>
                        </a>
                    </div>
                </p>

            </section>
        </div>
    );
}

export default MyWork