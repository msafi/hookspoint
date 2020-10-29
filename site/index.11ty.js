const postList = require("./_includes/postList.11ty");

exports.data = {
  layout: "layouts/home.11ty.js",
};

exports.render = async function (data) {
  return await postList(data.collections.pages, this.img);
};
