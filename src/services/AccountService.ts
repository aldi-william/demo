import http from "../api/http-common";
import { IDataAccount } from "../interface/IDataAccount";

class GetAccountService {
   getAccountData() {
      return http.get("/akun/my-account")  
   }
   postAccountData(data: IDataAccount){
      return http.post("/akun/update-account", data)
   }
}

export default new GetAccountService();