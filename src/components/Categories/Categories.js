import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinString } from "../../redux/actions/newsActions";
import "./style.css";
function Categories() {
  const { darkMode, category } = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  const handleCategories = (e, payload) => {
    e.preventDefault();
    payload = "category=" + payload;
    const data = { name: "category", data: payload };
    console.log(payload);
    dispatch(joinString(data));
  };
  const darkModeCss = {
    backgroundColor: "black",
    color: "white",
    borderBottom: "1px solid  rgba(210, 105, 30, .3)",
  };
  const darkModeCssChild = {
    backgroundColor: "rgba(255, 255, 255, .3)",
    color: "white",
    boxShadow: "2px 2px 2px rgba(210, 105, 30, .3)",
  };
  return (
    <div className="categories" style={darkMode ? darkModeCss : {}}>
      <div className="left__nav">
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "general")}
        >
          General
        </button>
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "business")}
        >
          Business
        </button>
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "politics")}
        >
          Politics
        </button>
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "entertainment")}
        >
          Entertainment
        </button>
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "sports")}
        >
          Sports
        </button>
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleCategories(e, "technology")}
        >
          Technology
        </button>
      </div>
    </div>
  );
}

export default Categories;
