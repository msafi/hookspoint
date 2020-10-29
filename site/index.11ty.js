"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.data = void 0;
const postList_1 = require("./_includes/postList");
exports.data = {
  layout: "layouts/home.11tyz.js",
};
exports.render = async function (data) {
  return await postList_1.postList(data.collections.pages, this.img);
};
//# sourceMappingURL=index.11ty.js.map
