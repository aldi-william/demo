import http from "../api/http-common";

class HistoryPenawaranService {
  getHistoryData() {
    return http.get("/history/winner");
  }
}

export default new HistoryPenawaranService();