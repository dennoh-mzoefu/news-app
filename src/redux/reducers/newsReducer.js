import {
  JOIN__URL,
  FETCH_NEWS,
  DARK__MODE,
  GET__NEWS__ITEM,
} from "../actions/types";

const initialState = {
  news: "",
  searchParam: "",
  searchTerm: "",
  initialParam: "everything?",
  category: "",
  darkMode: false,
  newsItem: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DARK__MODE:
      console.log(payload);
      return { ...state, darkMode: payload };
    case FETCH_NEWS:
      console.log(payload.articles);
      return { ...state, news: payload.articles };
    case GET__NEWS__ITEM:
      console.log(payload);
      return { ...state, newsItem: payload };
    case JOIN__URL:
      console.log(payload);
      if (payload.data === "everything?" || payload.data === "top-headlines?") {
        return { ...state, initialParam: payload.data };
      }
      return { ...state, [payload.name]: payload.data + "&" };

    default:
      return state;
  }
};
