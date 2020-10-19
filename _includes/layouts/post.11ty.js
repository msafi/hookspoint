const html = require("../../code/html");
const formatDate = require("../../code/formatDate");

exports.data = function () {
  return {
    layout: "layouts/Base.11ty.js",
    templateClass: "tmpl-post",
  };
};

exports.render = function (data) {
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
