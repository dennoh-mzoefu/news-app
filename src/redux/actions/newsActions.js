import { DARK__MODE, FETCH_NEWS, GET__NEWS__ITEM, JOIN__URL } from "./types";
import * as api from "../api/index.js";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const getNews = (addedUrl) => async (dispatch) => {
  try {
    const { data } = await api.fetchNews(addedUrl);
    dispatch({ type: FETCH_NEWS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const joinString = (data) => async (dispatch) => {
  try {
    dispatch({ type: JOIN__URL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchNewsItem = (data) => async (dispatch) => {
  try {
    dispatch({ type: GET__NEWS__ITEM, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const changeModeAction = (mode) => async (dispatch) => {
  try {
    dispatch({ type: DARK__MODE, payload: mode });
  } catch (error) {
    console.log(error.message);
  }
};
