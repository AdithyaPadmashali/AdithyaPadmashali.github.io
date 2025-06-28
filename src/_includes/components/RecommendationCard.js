import { html } from 'common-tags';

export const RecommendationCard = ({ name, title, text, relation, rating = 5 }) => {
    // Clamp rating between 1 and 5
    const safeRating = Math.max(1, Math.min(5, rating));
    console.log(title, safeRating)
    return html`
        <div class="recommendation-card">
        <blockquote class="recommendation-card__text">“${text}”</blockquote>
            <div class="recommendation-card__header">
                <div class="recommendation-card__info">
                    <div class="recommendation-card__meta-row">
                        <h3 class="recommendation-card__name">${name}</h3>
                        <span class="recommendation-card__meta-right">
                            <span class="recommendation-card__title">${title}</span>
                            <span class="recommendation-card__relation"> | ${relation}</span>
                        </span>
                    </div>
                    <div class="recommendation-card__stars">
                        ${[...Array(5)].map((_, i) =>
        i < safeRating
            ? '<span class="star filled">★</span>'
            : '<span class="star">☆</span>'
    ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};
