module.exports = function(eleventyConfig) {
    return {
        dir: {
            includes: "_includes",
            output: "_static",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
}