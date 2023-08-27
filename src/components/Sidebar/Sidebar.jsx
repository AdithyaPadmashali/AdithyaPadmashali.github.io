import React from 'react'
import './Sidebar.css'
import { Link, animateScroll as scroll } from "react-scroll";

function Sidebar() {
    return (
        <aside className="navbar">
            <div>
                <Link activeClass="active" ignoreCancelEvents={true} spy={true} smooth={true} offset={-200} duration={500} to='skills'>
                    <p className="navbar-item">
                        Skills
                    </p>
                </Link>
            </div>
            <div>
                <Link activeClass="active" ignoreCancelEvents={true} spy={true} smooth={true} offset={-200} duration={500} to='work'>
                    <p className="navbar-item">
                        Work/Experiences
                    </p>
                </Link>
            </div>
            <div>
                <Link activeClass="active" ignoreCancelEvents={true} spy={true} smooth={true} offset={-260} duration={500} to='publications'>
                    <p className="navbar-item">
                        Publications
                    </p>
                </Link>
            </div>
            <div>
                <Link activeClass="active" ignoreCancelEvents={true} spy={true} offset={-200} smooth={true} duration={500} to='connect'>
                    <p className="navbar-item">
                        Connect
                    </p>
                </Link>
            </div>
        </aside>
    )
}

export default Sidebar
