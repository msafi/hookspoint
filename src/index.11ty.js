const postList = require("./_includes/postList.11ty");

exports.data = {
  layout: "layouts/home.11ty.js",
};

exports.render = async function (data) {
  // console.log("data.collections", data.collections);
  console.log(Object.keys(data.collections));
  return await postList(data.collections.pages, this.img);
};
