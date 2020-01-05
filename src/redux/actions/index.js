import {
  PRODUCTS_REQUESTED,
  CREATE_TAOBAO_PWD
} from "../constant/action-types";

export function getProducts(page, keyword) {
  return { type: PRODUCTS_REQUESTED, payload: { page, keyword } };
}

export function createTaobaoPwd(title, url) {
  return {
    type: CREATE_TAOBAO_PWD,
    payload: { title, url }
  };
}
