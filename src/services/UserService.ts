import http from "../api/http-common";

class LoginService {

  login(data:any) {
    return http.post("/users/login", data)
  }

  test(){
    return http.get("/test")
  }
}

export default new LoginService();

