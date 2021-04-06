import * as actionTypes from "./actionTypes";

export const addToHistory = (path) => {
  return {
    type: actionTypes.ADD_TO_HISTORY,
    payload: path,
  };
};
