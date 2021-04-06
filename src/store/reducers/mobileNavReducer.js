import * as actionTypes from "../actions/actionTypes";

const mobileNavReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.MOBILE_NAV_TOGGLE:
      return !state;
    case actionTypes.MOBILE_NAV_CLOSE:
      return false;
    default:
      return state;
  }
};

export default mobileNavReducer;
