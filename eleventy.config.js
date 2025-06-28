import { Hero } from './src/_includes/components/Hero.js';
import { ExperienceCard } from './src/_includes/components/ExperienceCard.js';
import { RecommendationCard } from './src/_includes/components/RecommendationCard.js';
import { Divider } from './src/_includes/components/Divider.js';
import { BlogCard } from './src/_includes/components/BlogCard.js';

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/styles/");

    eleventyConfig.addWatchTarget("src/css/");

    eleventyConfig.addShortcode("Hero", Hero);
    eleventyConfig.addShortcode("ExperienceCard", ExperienceCard);
    eleventyConfig.addShortcode("RecommendationCard", RecommendationCard);
    eleventyConfig.addShortcode("Divider", Divider);
    eleventyConfig.addShortcode("BlogCard", BlogCard);

    eleventyConfig.addCollection("posts", (collectionApi) => {
        return collectionApi.getFilteredByGlob("src/blogs/posts/**/*.md").sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    })

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};