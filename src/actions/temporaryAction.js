// dependencies
import axios from "axios";

// files
import { TEMP_ACTION } from "./types";

export const someAction = () => async dispatch => {
  const res = await axios.get("https://example.com/here");
  dispatch({ type: TEMP_ACTION, payload: res });
};
