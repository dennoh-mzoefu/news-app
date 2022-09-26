import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./redux/actions/newsActions";
import { useEffect } from "react";
import Categories from "./components/Categories/Categories";
import NewsDescription from "./components/NewsDescription/NewsDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { news, searchParam, searchTerm, initialParam, category } = useSelector(
    (state) => state.newsReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const addedUrl = initialParam + searchTerm + category;
    console.log(addedUrl);
    if (searchTerm) {
      dispatch(getNews(addedUrl));
    }
  }, [searchTerm, initialParam, category]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Categories />
                <Home />
              </div>
            }
          />
          <Route path="/newsItem" element={<NewsDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
