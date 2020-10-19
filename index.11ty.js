const postList = require("./_includes/PostList.11ty");

exports.data = {
  layout: "layouts/Home.11ty.js",
};

exports.render = async function (data) {
  return await postList(data.collections.posts, this.img);
};
