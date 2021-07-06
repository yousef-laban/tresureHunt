import { combineReducers } from "redux";
import things from "./thingsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  things: things,
  authReducer,
});

export default rootReducer;
