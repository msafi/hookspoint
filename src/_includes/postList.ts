import * as bluebird from "bluebird";
import { formatDate } from "../code/formatDate";
import { html } from "../code/html";

export const postList = async function (postList: any, img: any) {
  const formattedPosts = await bluebird.map<any, any>(
    postList.slice().reverse(),
    async (post) => {
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
    }
  );

  return html`
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
