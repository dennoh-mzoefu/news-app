import { JOIN__URL, FETCH_NEWS } from "../actions/types";

const initialState = {
  news: "",
  searchParam: "",
  searchTerm: "",
  initialParam: "everything?",
  category: "",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_NEWS:
      console.log(payload.articles);
      return { ...state, news: payload.articles };
    case JOIN__URL:
      console.log(payload);
      if (payload.name === "everything?" || payload.name === "top-headlines?") {
        return { ...state, initialParam: payload.data };
      }
      return { ...state, [payload.name]: payload.data + "&" };

    default:
      return state;
  }
};
