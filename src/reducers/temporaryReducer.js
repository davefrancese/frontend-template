// This is a placeholder.
// Add a real reducer below.
import { TEMP_ACTION } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case TEMP_ACTION:
      return {
        ...state
        // action.payload here
      };
    default:
      return state;
  }
};
