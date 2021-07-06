import { combineReducers } from "redux";
import things from "./thingsReducer";

const rootReducer = combineReducers({
  things: things,
});

export default rootReducer;
