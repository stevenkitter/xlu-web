import { takeEvery, call, put } from "redux-saga/effects";
import {
  PRODUCTS_REQUESTED,
  PRODUCTS_REQUEST_SUCCESS
} from "../constant/action-types";
import { api } from "../apis/product";

export default function* watcherSaga() {
  yield takeEvery(PRODUCTS_REQUESTED, fetchProducts);
}

function* fetchProducts(action) {
  try {
    const payload = yield call(
      api.fetchProducts,
      action.payload.offset,
      action.payload.keyword
    );
    yield put({ type: PRODUCTS_REQUEST_SUCCESS, payload });
  } catch (e) {
    yield put({ type: "PRODUCTS_REQUEST_ERROR", payload: e });
  }
}
