import React from 'react'
import './MyWork.css'

function MyWork() {
    return (
        <div className="work-section">
            <section className="work-container">
                <div className="work-title">{'< '}Usage Tracking System{' />'}</div>
                <p className="work-description">
                    {'As part of Morgan Stanley 2023 Technology Spring Analyst Internship program - A custom end-to-end implementation and productionalization of a system to extract, process and persist application usage data for visualization and reporting.'}
                </p>

                <div className="work-title">{'` '}Muxable/SCTP{' `'}</div>
                <p className="work-description">
                    {'As a 2022 summer intern at Muxable Labs, Brooklyn, NY - Contribution to the open source project - muxable/sctp forked from pion/sctp. Based on the Go implementation of Stream Control Transmission Protocol'}
                </p>

                <div className="work-title">{"< "}Chat-bot for Buzzwomen{" >"}</div>
                <p className="work-description">
                    {'As part of the 2022 Morgan Stanley Code to Give Hackathon - An application-agnostic chat-bot engine for holding a friendly conversation with women in rural areas who are motivated to become entrepreneurs. The conversation with the chatbot would ideally assist the users in brainstorming and reaching their goals.'}
                </p>

                <div className="work-title">{'__'}Python OpenFAM API{'__'}</div>
                <p className="work-description">
                    {'As part of HPE Catch Them Young Program, 2022 - OpenFAM, originally written in C++ is an API for using distributed systems that contain Fabric Attached Memory. Our goal - Enable support for the API in python.'}
                </p>

                <div className="work-title">{'${ '}Streamr Data Challenge {' }'}</div>
                <p className="work-description">
                    {'2021, As a participant in the Ingenius Hackathon - Integrate the Streamr API for enabling data unions into our application, Globetrotter. '}
                </p>

            </section>
        </div>
    );
}

export default MyWork