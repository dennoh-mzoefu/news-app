import React from "react";
import NewsLogo from "../Assets/NewsLogo";
import Searchbar from "../Searchbar/Searchbar";
import { ImFilter } from "react-icons/im";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
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
        <button>top headlines</button>
        <div className="nav__icon">
          <ImFilter />
        </div>
        <div className="nav__icon">
          <MdDarkMode />
        </div>
        <div className="nav__icon">
          <MdOutlineDarkMode />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
