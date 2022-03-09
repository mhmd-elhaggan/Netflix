import axios from "axios";

export const axiosInstanceSrch = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  params : {
    'api_key':"dcd1bd74b712d35627a8d6c3078ef226"
  }
});