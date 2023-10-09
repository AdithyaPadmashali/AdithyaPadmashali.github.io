import React from 'react'
import './Skills.css'
import LanguageSkills from './LanguageSkills';
import TechnologiesSkills from './TechnologiesSkills';
import WebDevSkills from './WebDevSkills';


function Skills() {
    return (
        <div id='skills' className="skills-section">
            <section className="logos-container">
                <LanguageSkills />
                <TechnologiesSkills />
                <WebDevSkills />
            </section>
        </div>
    )
}

export default Skills;