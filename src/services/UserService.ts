import http from "../api/http-common";

class LoginService {

  login(data:any) {
    return http.post("/users/login", data)
  }

  kirimOTP(data:any) {
    return http.post("/users/kirimOTP", data)
  }
}

export default new LoginService();

