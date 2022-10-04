import axios from "axios";

export default axios.create({
  baseURL: "https://admin.tavmobil.id/api/lelang",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  }
});