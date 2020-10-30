import * as fs from "fs";
import * as Image from "@11ty/eleventy-img";
import * as markdownIt from "markdown-it";
import * as markdownItAnchor from "markdown-it-anchor";

module.exports = function (eleventyConfig: any) {
  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("content/js");
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
      ready: function (err: any, browserSync: any) {
        const content_404 = fs.readFileSync("docs/404.html");

        browserSync.addMiddleware("*", (req: any, res: any) => {
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
    src: any,
    alt: any,
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

    // These are all optional, defaults are shown:
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "docs",
    },
  };
};
