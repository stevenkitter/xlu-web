import {
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCTS_REQUESTED
} from "../constant/action-types";

const initialState = {
  product: {
    total: 0,
    products: []
  }
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_REQUESTED: {
      return Object.assign({}, state, {
        product: {
          total: 0,
          products: []
        }
      });
    }
    case PRODUCTS_REQUEST_SUCCESS: {
      return Object.assign({}, state, {
        product: {
          total: action.payload.data.total,
          products: state.product.products.concat(action.payload.data.list)
        }
      });
    }
    default: {
      return state;
    }
  }
}
export default rootReducer;
