import axios from "axios";

const URL = "https://newsapi.org/v2/";
const APIKEY = "apiKey=18884bf931d44b648b1e7613a40a5fd4";

export const fetchNews = (addedUrl) => axios.get(`${URL}${addedUrl}${APIKEY}`);
