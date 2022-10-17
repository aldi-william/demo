import http from "../api/http-common";

class FavoriteService {
   getFavoriteData() {
      return http.get("/akun/get-favorite");
   }
}

export default new FavoriteService();