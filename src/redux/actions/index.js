import { PRODUCTS_REQUESTED } from "../constant/action-types";

export function getProducts(offset, keyword) {
  return { type: PRODUCTS_REQUESTED, payload: { offset, keyword } };
}
