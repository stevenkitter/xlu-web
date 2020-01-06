import {
  PRODUCTS_REQUESTED,
  CREATE_TAOBAO_PWD,
  OPEN_MODAL
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

export function openModal(pwd) {
  return {
    type: OPEN_MODAL,
    payload: { open: true, pwd: pwd }
  };
}

export function closeModal() {
  return {
    type: OPEN_MODAL,
    payload: { open: false }
  };
}
