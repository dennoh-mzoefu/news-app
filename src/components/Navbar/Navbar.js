import React, { useState } from "react";
import NewsLogo from "../Assets/NewsLogo";
import Searchbar from "../Searchbar/Searchbar";
import { ImFilter } from "react-icons/im";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { changeModeAction, joinString } from "../../redux/actions/newsActions";

function Navbar() {
  const { darkMode } = useSelector((state) => state.newsReducer);
  const [mode, setMode] = useState(darkMode);
  const dispatch = useDispatch();
  const changeMode = (e) => {
    e.preventDefault();
    setMode(!mode);
    dispatch(changeModeAction(mode));
  };
  const topHeadline = false;
  const handleTopHeadline = (e) => {
    e.preventDefault();
    topHeadline = !topHeadline;
    const data = {
      name: "",
      data: topHeadline ? "top-headlines?" : "everything?",
    };
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
    <div className="navbar" style={darkMode ? darkModeCss : {}}>
      <div className="left__nav">
        <div className="nav__logo">
          <NewsLogo />
        </div>
        <h2>News</h2>
      </div>
      <div className="left__nav">
        <Searchbar />
      </div>
      <div className="left__nav">
        <button
          style={darkMode ? darkModeCssChild : {}}
          onClick={(e) => handleTopHeadline(e)}
        >
          top headlines
        </button>
        <div className="nav__icon">
          <ImFilter />
        </div>
        {mode && (
          <div className="nav__icon" onClick={(e) => changeMode(e)}>
            <MdDarkMode />
          </div>
        )}
        {mode == false && (
          <div className="nav__icon" onClick={(e) => changeMode(e)}>
            <MdOutlineDarkMode />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
