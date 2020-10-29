const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setUseGitIgnore(false);

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#",
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("docs/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  eleventyConfig.addShortcode("ref", function () {});
  eleventyConfig.addShortcode("img", async function (
    src,
    alt,
    size = "full",
    outputFormat = "jpeg"
  ) {
    if (alt === undefined) {
      // You bet we throw an error on missing alt (alt="" works okay)
      throw new Error(`Missing \`alt\` on img from: ${src}`);
    }

    // returns Promise
    let stats = await Image(__dirname + src, {
      widths: [600, 300],
      formats: [outputFormat],
      urlPath: "/images/",
      outputDir: "./docs/images/",
    });

    let props =
      size === "full" ? stats[outputFormat].pop() : stats[outputFormat][0];

    return `<img src="${props.url}" width="${props.width}" height="${props.height}" alt="${alt}">`;
  });

  return {
    templateFormats: ["md", "11ty.js"],

    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "docs",
    },
  };
};
