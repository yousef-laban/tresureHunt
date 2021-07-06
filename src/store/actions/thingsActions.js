import * as actiontype from "./types";
import axios from "axios";

export const fetchTreasure = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/things/treasure");
    dispatch({
      type: actiontype.FETCH_TREASURE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchGarbage = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/things/garbage");
    dispatch({
      type: actiontype.FETCH_GARBAGE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// export const addCatagory = (category) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in category) formData.append(key, category[key]);
//     const res = await axios.post("http://localhost:8000/categories/", formData);
//     dispatch({
//       type: actiontype.ADD_CATEGORY,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
