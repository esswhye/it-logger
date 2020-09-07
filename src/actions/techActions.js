import {
  GET_TECHS,
  DELETE_TECH,
  ADD_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";
import { FloatingActionButton } from "materialize-css";

// Get tech from server

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add tech
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete Tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    SET_LOADING,
  });
};
