import { Products } from "../constant/request";

export const api = {
  async fetchProducts(offset, keyword) {
    const response = await fetch(
      keyword.length > 0
        ? Products + "?offset=" + offset + "&keyword=" + keyword
        : Products + "?offset=" + offset
    );
    return await response.json();
  }
};
