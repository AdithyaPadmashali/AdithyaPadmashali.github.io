import React from 'react'
import './Sidebar.css'
import NavItem from './NavItem';

function Sidebar() {
    return (
        <aside className="navbar">
            <NavItem linkTo={'skills'} content={'Skills'} />
            <NavItem linkTo={'work'} content={'Work/Experiences'} />
            <NavItem linkTo={'publications'} content={'Publications'} />
            <NavItem linkTo={'connect'} content={'Connect'} />
        </aside>
    )
}

export default Sidebar;
