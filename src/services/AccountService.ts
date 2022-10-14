import http from "../api/http-common";
import { IDataAccount } from "../interface/IDataAccount";

class GetAccountService {
   getAccountData() {
      return http.get("/akun/my-account")  
   }

   postAccountData(data: IDataAccount){
      let formData = new FormData();

      formData.append("image", data.image);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("password", data.password);

      return http.post("/akun/update-account", formData, {
         headers: {
            "Content-Type": "multipart/form-data"
         }
      });
   }
}

export default new GetAccountService();