export const data = function () {
  return {
    layout: "layouts/base.11ty.js",
    templateClass: "tmpl-post",
  };
};

export const render = function (data: any) {
  return data.content;
};
