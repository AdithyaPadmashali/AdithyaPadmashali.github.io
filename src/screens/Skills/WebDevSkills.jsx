import React, { useRef, useEffect } from 'react'

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
import { appearOnIntersect } from '../../utils/appearOnIntersectLogic';

function WebDevSkills() {

    const web_logosRef = useRef();

    useEffect(() => appearOnIntersect(web_logosRef, 'web', 'fancify'), [])

    return (
        <>
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
        </>
    )
}

export default WebDevSkills