import { html } from 'common-tags';
import { RESUME_LINK } from './constants.js';

export const Hero = ({ }) => {
    return html`
        <section class="hero">
            <div class="hero__content">
            <div class="hero__fancy-divider"></div>
            <div class="hero__intro-row">
                  <h1 class="hero__title">Computer Science enthusiast <span style="font-weight:400;">who cannot distinguish between art and programming.</span></h1>
                </div>
                <p class="hero__subtitle">Currently I'm part of an agile team at Morgan Stanley where I work on UI/UX and backend components.</p>
                <div class="blogs-btn-wrapper" style="gap: 1rem;">
                    <span class="blogs-btn-halo">
                        <a href="/blogs/" class="blogs-btn">Read my blogs</a>
                    </span>
                    <span class="blogs-btn-halo">
                        <a href="${RESUME_LINK}" class="blogs-btn" target="_blank" rel="noopener noreferrer">View Resume</a>
                    </span>
                </div>
            </div>
        </section>
    `;
}