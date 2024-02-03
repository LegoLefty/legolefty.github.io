module.exports = function(eleventyConfig) {
    return {
        dir: {
            includes: "_includes",
            output: "docs",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}