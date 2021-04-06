import mobileNavReducer from "./mobileNavReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mobileNavOpen: mobileNavReducer,
});

export default rootReducer;
