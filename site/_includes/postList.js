"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postList = void 0;
const bluebird = require("bluebird");
const formatDate_1 = require("../code/formatDate");
const html_1 = require("../code/html");

exports.postList = async function (postList, img) {
  const formattedPosts = await bluebird.map(
    postList.slice().reverse(),
    async (post) => {
      return html_1.html`
        <li>
          <a
            href="${post.url}"
            class="colorBlack textDecorationNoneHover backgroundColorBackgroundHover padding2 borderRadius2 displayBlock"
          >
            <span class="fontWeight600 fontSize14"
              >${post.data.title && post.data.title}</span
            >
            <time
              class="displayBlock backgroundColorUnset colorTextMuted"
              datetime="${post.date}"
              >${formatDate_1.formatDate(post.date)}</time
            >
          </a>
        </li>
      `;
    }
  );
  return html_1.html`
    <ul class="listStyleTypeNone padding0">
      ${formattedPosts.join("")}
    </ul>

    <footer class="padding0 borderTopNone">
      <p class="fontSize09">
        Blog by <a href="https://twitter.com/msafi">M.K. Safi</a>
      </p>
    </footer>
  `;
};
//# sourceMappingURL=postList.js.map
