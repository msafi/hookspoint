"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.data = void 0;
const html_1 = require("../../code/html");
const formatDate_1 = require("../../code/formatDate");
exports.data = function () {
    return {
        layout: "layouts/base.11ty.js",
        templateClass: "tmpl-post",
    };
};
exports.render = function (data) {
    return html_1.html `
    <p
      class="colorTextMuted marginHorizontal0 marginBottom0 marginTop7 fontSize09"
    >
      ${formatDate_1.formatDate(data.page.date)}
    </p>

    <h1>${data.title}</h1>

    ${data.content}

    <footer class="padding0 borderTopNone">
      <p class="fontSize09">
        By <a href="https://twitter.com/msafi">M.K. Safi</a>
      </p>
    </footer>
  `;
};
//# sourceMappingURL=post.11ty.js.map