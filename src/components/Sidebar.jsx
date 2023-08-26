import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className="navbar">
            <div>
                <p className="navbar-item">
                    Skills
                </p>
            </div>
            <div>
                <p className="navbar-item">
                    Projects
                </p>
            </div>
            <div>
                <p className="navbar-item">
                    Experiences
                </p>
            </div>
            <div>
                <p className="navbar-item">
                    Publications
                </p>
            </div>
            <div>
                <p className="navbar-item">
                    Write to me!
                </p>
            </div>
        </aside>
    )
}

export default Sidebar
