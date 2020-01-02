import { DATA_REQUEST_SUCCESS } from "../constant/action-types";

const initialState = {
  remoteArticles: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_REQUEST_SUCCESS: {
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
    }
    default: {
      return state;
    }
  }
}
export default rootReducer;
