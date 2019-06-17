import { combineReducers } from "redux";
import bingo from "./bingo";
import modal from "./modal";

export default combineReducers({
  bingo,
  modal
});
