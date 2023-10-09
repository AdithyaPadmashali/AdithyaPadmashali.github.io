import React, { useRef, useEffect } from 'react'

import AWS from '../../assets/logos/skills/technologies/amazonwebservices-original-wordmark';
import Docker from '../../assets/logos/skills/technologies/docker-plain-wordmark';
import Git from '../../assets/logos/skills/technologies/git-plain-wordmark';
import GitHub from '../../assets/logos/skills/technologies/github-original-wordmark';
import Terraform from '../../assets/logos/skills/technologies/terraform-original-wordmark';
import GCP from '../../assets/logos/skills/technologies/googlecloud-original-wordmark';
import Linux from '../../assets/logos/skills/technologies/linux-original';
import { appearOnIntersect } from '../../utils/appearOnIntersectLogic';

function TechnologiesSkills() {

    const tech_logosRef = useRef();

    useEffect(() => appearOnIntersect(tech_logosRef, 'tech', 'fancify'), [])

    return (
        <>
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
        </>
    )
}

export default TechnologiesSkills