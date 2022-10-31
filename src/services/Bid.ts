import http from "../api/http-common";

class BiddingService {
   postBidding(data:any){
      return http.post("/bidding", data)
   }
}

export default new BiddingService();