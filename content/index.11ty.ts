import { postList } from "./_includes/postList";

export const data = {
  layout: "layouts/home.11ty.js",
};

export const render = async function (data: any) {
  // @ts-ignore
  return await postList(data.collections.pages, this.img);
};
