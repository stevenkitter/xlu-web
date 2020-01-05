import { Products, CreateTaobaoPwd } from "../constant/request";

export const api = {
  async fetchProducts(page, keyword) {
    const response = await fetch(
      keyword.length > 0
        ? Products + "?page=" + page + "&keyword=" + keyword
        : Products + "?page=" + page
    );
    return await response.json();
  },

  async createPwd(title, url) {
    const response = await fetch(CreateTaobaoPwd, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, url: url })
    });
    return await response.json();
  }
};
