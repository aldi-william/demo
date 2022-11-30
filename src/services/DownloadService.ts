import http from "../api/http-common";


class DownloadService {
   getDownloadData(paymentID: number) {
      return http.get("/history/pdf/"+paymentID)
   }
}

export default new DownloadService();