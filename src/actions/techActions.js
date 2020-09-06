import {
  GET_TECHS,
  DELETE_TECH,
  ADD_LOG,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

// Get tech from server

export const getTechs = () => async (dispatch) => {
  try {
    console.log("triggered");
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    SET_LOADING,
  });
};
