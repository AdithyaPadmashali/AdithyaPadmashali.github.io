import { html } from 'common-tags';

export const ExperienceCard = ({ company, role, daterange, location, description, technologies }) => {
    return html`
        <div class="experience-card">
            <div class="experience-card__header">
                <h3 class="experience-card__company">${company}</h3>
                <span class="experience-card__daterange">${daterange}</span>
            </div>
            <span class="experience-card__location">${location}</span>
            <p class="experience-card__role">${role}</p>
            <p class="experience-card__description">${Array.isArray(description) ? description.join(' ') : description}</p>
            <ul class="experience-card__tech-list">
                ${technologies.map(tech => html`<li>${tech}</li>`).join('')}
            </ul>
        </div>
        `;
};