import axios from "axios";

const API = axios.create({
  baseURL: "https://kenpro674.pythonanywhere.com",
});

export default API;
