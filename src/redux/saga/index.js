import { takeEvery, call, put } from "redux-saga/effects";
import {
  PRODUCTS_REQUESTED,
  PRODUCTS_REQUEST_SUCCESS,
  CREATE_TAOBAO_PWD,
  CREATE_TAOBAO_PWD_SUCCESS
} from "../constant/action-types";
import { api } from "../apis/product";

export default function* watcherSaga() {
  yield takeEvery(PRODUCTS_REQUESTED, fetchProducts);
  yield takeEvery(CREATE_TAOBAO_PWD, fetchCreatePwd);
}

function* fetchProducts(action) {
  try {
    const payload = yield call(
      api.fetchProducts,
      action.payload.page,
      action.payload.keyword
    );
    yield put({ type: PRODUCTS_REQUEST_SUCCESS, payload });
  } catch (e) {
    yield put({ type: "PRODUCTS_REQUEST_ERROR", payload: e });
  }
}

function* fetchCreatePwd(action) {
  try {
    const payload = yield call(
      api.createPwd,
      action.payload.title,
      action.payload.url
    );
    yield put({ type: CREATE_TAOBAO_PWD_SUCCESS, payload });
  } catch (e) {
    yield put({ type: "PRODUCTS_REQUEST_ERROR", payload: e });
  }
}
