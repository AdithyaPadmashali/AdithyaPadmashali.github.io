import React from 'react'
import { Link } from "react-scroll";

function NavItem({ linkTo, content }) {
    return (
        <div>
            <Link activeClass="active" ignoreCancelEvents={true} spy={true} smooth={true} offset={-200} duration={500} to={linkTo}>
                <p className="navbar-item">
                    {content}
                </p>
            </Link>
        </div>
    )
}

export default NavItem;
