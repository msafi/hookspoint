"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var Image = require("@11ty/eleventy-img");
var markdownIt = require("markdown-it");
var markdownItAnchor = require("markdown-it-anchor");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setUseGitIgnore(false);
    /* Markdown Overrides */
    var markdownLibrary = markdownIt({
        html: true,
        breaks: false,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });
    eleventyConfig.setLibrary("md", markdownLibrary);
    // Browsersync Overrides
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, browserSync) {
                var content_404 = fs.readFileSync("docs/404.html");
                browserSync.addMiddleware("*", function (req, res) {
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            }
        },
        ui: false,
        ghostMode: false
    });
    eleventyConfig.addShortcode("ref", function () { });
    eleventyConfig.addShortcode("img", function (src, alt, size, outputFormat) {
        if (size === void 0) { size = "full"; }
        if (outputFormat === void 0) { outputFormat = "jpeg"; }
        return __awaiter(this, void 0, void 0, function () {
            var stats, props;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (alt === undefined) {
                            // You bet we throw an error on missing alt (alt="" works okay)
                            throw new Error("Missing `alt` on img from: " + src);
                        }
                        return [4 /*yield*/, Image(__dirname + src, {
                                widths: [600, 300],
                                formats: [outputFormat],
                                urlPath: "/images/",
                                outputDir: "./docs/images/"
                            })];
                    case 1:
                        stats = _a.sent();
                        props = size === "full" ? stats[outputFormat].pop() : stats[outputFormat][0];
                        return [2 /*return*/, "<img src=\"" + props.url + "\" width=\"" + props.width + "\" height=\"" + props.height + "\" alt=\"" + alt + "\">"];
                }
            });
        });
    });
    return {
        templateFormats: ["md", "11ty.js"],
        // These are all optional, defaults are shown:
        dir: {
            input: "site",
            includes: "_includes",
            data: "_data",
            output: "docs"
        }
    };
};
