const html = require("../../code/html");

exports.render = function (data) {
  const { title, description, metadata, content } = data;

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title ? title : metadata.title}</title>
        <meta
          name="description"
          content="${description || metadata.description}"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
        <link rel="stylesheet" href="/css/index.css" />
      </head>

      <body class="maxWidth150 lineHeight16 marginTop0">
        <header>
          <p
            class="marginTop2 marginHorizontal0 marginBottom0 fontWeight500 fontSize1"
          >
            <a class="colorBlack textDecorationNoneHover" href="/"
              >${metadata.title}
              <span class="fontSize25 colorRed lineHeight0 marginLeftNegative1"
                >.</span
              ></a
            >
          </p>
        </header>

        <main>${content}</main>
      </body>
    </html>
  `;
};
