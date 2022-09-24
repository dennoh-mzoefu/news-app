import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./redux/actions/newsActions";
import { useEffect } from "react";

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
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
