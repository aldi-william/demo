import axios from "axios";

export default axios.create({
  baseURL: "https://be-lelang.tavmobil.id/api",
  headers: {
    "Content-type": "application/json",
    "x-api-key" : "RAHASIA"
  }
});