import {
  GET_TECHS,
  DELETE_TECH,
  ADD_LOG,
  TECHS_ERROR,
  SET_LOADING,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      console.log(action.payload);
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};