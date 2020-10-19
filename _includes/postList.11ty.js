const bluebird = require("bluebird");
const html = require("../code/html");
const formatDate = require("../code/formatDate");

module.exports = async function (postList, img) {
  return html`
    <ul class="listStyleTypeNone padding0">
      ${await bluebird.map(postList, async (post) => {
        return html`
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
                >${formatDate(post.date)}</time
              >
            </a>
          </li>
        `;
      })}
    </ul>

    <footer class="padding0 borderTopNone">
      <p class="fontSize09">
        Blog by <a href="https://twitter.com/msafi">M.K. Safi</a>
      </p>
    </footer>
  `;
};
