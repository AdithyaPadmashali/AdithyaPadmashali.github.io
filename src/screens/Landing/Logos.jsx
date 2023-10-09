import React from 'react'
import GitHub from '../../assets/logos/social/GitHub'
import LinkedIn from '../../assets/logos/social/LinkedIn'
import Discord from '../../assets/logos/social/Discord'

function Logos() {
    return (
        <>
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
        </>
    )
}

export default Logos;
