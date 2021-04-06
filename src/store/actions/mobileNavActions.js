import * as actionTypes from "./actionTypes";

export const toggleMobileNav = () => {
  return {
    type: actionTypes.MOBILE_NAV_TOGGLE,
  };
};

export const closeMobileNav = () => {
  return {
    type: actionTypes.MOBILE_NAV_CLOSE,
  };
};
