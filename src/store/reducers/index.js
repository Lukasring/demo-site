import mobileNavReducer from "./mobileNavReducer";
import historyReducer from "./historyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mobileNavOpen: mobileNavReducer,
  history: historyReducer,
});

export default rootReducer;
