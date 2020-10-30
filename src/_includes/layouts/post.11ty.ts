import { html } from "../code/html";
import { formatDate } from "../code/formatDate";

export const data = function () {
  return {
    layout: "layouts/base.11ty.js",
    templateClass: "tmpl-post",
  };
};

export const render = function (data: any) {
  return html`
    <p
      class="colorTextMuted marginHorizontal0 marginBottom0 marginTop7 fontSize09"
    >
      ${formatDate(data.page.date)}
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
