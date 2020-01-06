import {
  PRODUCTS_REQUEST_SUCCESS,
  PRODUCTS_REQUESTED,
  OPEN_MODAL
} from "../constant/action-types";

const initialState = {
  product: {
    total: 0,
    products: []
  },
  home: {
    main: {
      modal_open: false,
      modal_pwd: ""
    }
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
    case OPEN_MODAL: {
      return Object.assign({}, state, {
        home: {
          main: {
            modal_open: action.payload.open,
            modal_pwd: action.payload.pwd
          }
        }
      });
    }

    default: {
      return state;
    }
  }
}
export default rootReducer;
