// dependencies
import { combineReducers } from "redux";

// replace with your own reducer.
import temporaryReducer from "./temporaryReducer";

export default combineReducers({
  // replace with your own reducer.
  temp: temporaryReducer
});
