import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { fetchNewsItem } from "../../redux/actions/newsActions";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const { news, darkMode } = useSelector((state) => state.newsReducer);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 6;
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(news.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(news.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, news]);
  const navigate = useNavigate();
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const dispatch = useDispatch();
  const handleNewsItem = (e, item) => {
    e.preventDefault();
    dispatch(fetchNewsItem(item));
    navigate("/newsItem");
  };
  const darkModeCss = {
    backgroundColor: "black",
    color: "white",
  };
  const darkModeCssChild = {
    backgroundColor: "rgba(255, 255, 255, .3)",
    color: "white",
    boxShadow: "2px 2px 2px  rgba(210, 105, 30, .3)",
  };
  return (
    <div style={darkMode ? darkModeCss : {}} className="whole__home">
      <div style={darkMode ? darkModeCss : {}} className="home">
        {/* newscard */}
        {currentItems &&
          currentItems?.map((item) => {
            return (
              <div
                key={item.publishedAt}
                style={darkMode ? darkModeCssChild : {}}
                className="news__card"
              >
                <div className="upper__card">
                  <img src={item.urlToImage} alt="news illustartor" />
                </div>
                <div className="middle__card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="lower__card">
                  <p>{item.publishedAt}</p>
                  {/* <Link to="/newsItem"> */}
                  <button onClick={(e) => handleNewsItem(e, item)}>more</button>
                  {/* </Link> */}
                </div>
              </div>
            );
          })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        previousClassName="prevName"
        nextClassName="prevName"
      />
    </div>
  );
}

export default Home;
