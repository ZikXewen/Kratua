import {
  FETCH_ALL,
  CREATE,
  DELETE,
  GETCC,
  RESETCC,
  LABEL,
  TITLE,
} from "../constants/actionTypes";
import * as api from "../api";

export const getRecords = () => async (dispatch) => {
  try {
    const { data } = await api.getRecords();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createRecord = (newRecord) => async (dispatch) => {
  try {
    const { data } = await api.createRecord(newRecord);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteRecord = (id) => async (dispatch) => {
  try {
    await api.deleteRecord(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const getCC = (id) => async (dispatch) => {
  try {
    const { data } = await api.getCC(id);
    dispatch({ type: GETCC, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const resetCC = () => async (dispatch) => {
  dispatch({ type: RESETCC });
};
export const setLabel = (title) => async (dispatch) => {
  dispatch({ type: LABEL, payload: title });
};
export const setTitle = (title) => async (dispatch) => {
  dispatch({ type: TITLE, payload: title });
};
