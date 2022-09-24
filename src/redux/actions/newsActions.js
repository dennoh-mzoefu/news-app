import { FETCH_NEWS, JOIN__URL } from "./types";
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
