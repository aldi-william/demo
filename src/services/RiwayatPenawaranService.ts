import http from "../api/http-common";

class HistoryPenawaranService {
  getHistoryData() {
    return http.get("/history/winner");
  }
  getCountData(){
    return http.get("/history/count")
  }
}

export default new HistoryPenawaranService();