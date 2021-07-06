//
import axios from "axios";
import decode from "jwt-decode";
// Action Types
import * as actionType from "./types";

export const signup = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signup`, userData);

    dispatch(setUser(res.data.token));

    history.push("/message/signup");
  } catch (error) {
    console.log(error);
  }
};

export const signin = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/signin`, userData);

    dispatch(setUser(res.data.token));
    history.push("/message/signin");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (history) => {
  return setUser();
};

export const checkForToken = () => {
  const token = document.cookie;

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) return setUser();
    else return setUser(token);
  }

  return setUser();
};

const setUser = (token) => {
  if (token) {
    document.cookie = `${token}`;

    return {
      type: actionType.SET_USER,
      payload: decode(token),
    };
  } else {
    document.cookie =
      "myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    return {
      type: actionType.SET_USER,
      payload: null,
    };
  }
};
