import axios from "axios";

export default axios.create({
  baseURL: "https://admin.tavmobil.id/api/lelang",
  // baseURL: "http://tav.test/api/lelang",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json",
    // "Authorization": "Bearer " + (localStorage.getItem('isLogin') || '')
  }
});