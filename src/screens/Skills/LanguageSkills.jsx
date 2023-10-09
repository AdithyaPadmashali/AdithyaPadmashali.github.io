import React, { useRef, useEffect } from 'react'

import COriginal from '../../assets/logos/skills/languages/c-original';
import CPP from '../../assets/logos/skills/languages/cplusplus-original';
import Go from '../../assets/logos/skills/languages/go-original-wordmark';
import Java from '../../assets/logos/skills/languages/java-original-wordmark';
import Python from '../../assets/logos/skills/languages/python-original-wordmark';
import { appearOnIntersect } from '../../utils/appearOnIntersectLogic';

function LanguageSkills() {

    const language_logosRef = useRef();

    useEffect(() => appearOnIntersect(language_logosRef, 'language', 'fancify'), [])

    return (
        <>
            <div className="logos-title">Languages</div>
            <section className='logos language' ref={language_logosRef}>
                <COriginal />
                <CPP />
                <Go />
                <Java />
                <Python />
            </section>
        </>
    )
}

export default LanguageSkills;
