import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function NewsDescription() {
  const { newsItem } = useSelector((state) => state.newsReducer);
  return (
    <div className="newsDescripion">
      <div className="newsDescripion__image">
        <img src={newsItem.urlToImage} />
        <div>
          <p>{newsItem.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDescription;
