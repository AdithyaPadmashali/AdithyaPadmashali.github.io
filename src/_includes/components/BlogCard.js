import { html } from 'common-tags';

// Helper to format date in JS (fallback if filter doesn't work)
function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const BlogCard = ({ title, description, date, url, tag }) => html`
  <a class="blog-card" href="${url}">
    <div class="blog-card__content">
      <h3 class="blog-card__title">${title}</h3>
      <span class="blog-card__tag blog-card__tag--${tag && tag.toLowerCase() === 'tech' ? 'tech' : 'nontech'}">${tag}</span>
      <p class="blog-card__desc">${description}</p>
      <span class="blog-card__date">${formatDate(date)}</span>
    </div>
  </a>
`;
