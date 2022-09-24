import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { joinString } from "../../redux/actions/newsActions";
import "./style.css";
function Searchbar() {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: "searchTerm", data: "q=" + searchItem };
    dispatch(joinString(data));
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </form>
    </div>
  );
}

export default Searchbar;
