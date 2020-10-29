exports.data = function () {
  return {
    layout: "layouts/base.11ty.js",
    templateClass: "tmpl-post",
  };
};

exports.render = function (data) {
  return data.content;
};
