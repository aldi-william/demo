import http from "../api/http-common";

class LoginService {

  login(data:any) {
    return http.post("/users/login", data)
  }

  kirimOTP(data:any) {
    return http.post("/users/forgot-password", data)
  }

  checkOTP(data:any){
    return http.post('/users/checkotp', data)
  }

  changePassword(data:any){
    return http.post('/users/change-password', data)
  }
}

export default new LoginService();

