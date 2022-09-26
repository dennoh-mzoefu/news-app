import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinString } from "../../redux/actions/newsActions";
import "./style.css";
function Searchbar() {
  const { darkMode } = useSelector((state) => state.newsReducer);
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: "searchTerm", data: "q=" + searchItem };
    dispatch(joinString(data));
  };
  const darkModeCssChild = {
    backgroundColor: "rgba(255, 255, 255, .3)",
    color: "white",
    boxShadow: "2px 2px 2px rgba(210, 105, 30, .3)",
  };
  const darkModeCssChildInput = {
    // backgroundColor: "rgba(255, 255, 255, .3)",
    // color: "white",
    // boxShadow: "2px 2px 2px rgba(255, 255, 255, .6)",
  };
  return (
    <div style={darkMode ? darkModeCssChild : {}} className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search..."
          style={darkMode ? darkModeCssChildInput : {}}
          className="search-input"
        />
        <a href="" onClick={handleSubmit} className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </form>
    </div>
  );
}

export default Searchbar;
