import * as actiontype from "../actions/types";

const initialState = {
  treasure: [],
  garbage: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_TREASURE:
      return {
        ...state,
        treasure: action.payload,
      };
    case actiontype.FETCH_GARBAGE:
      return {
        ...state,
        garbage: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
