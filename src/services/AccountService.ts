import http from "../api/http-common";
import { IDataAccount, IDataPassword } from "../Interface/IDataAccount";

class GetAccountService {
   getAccountData() {
      return http.get("/akun/my-account")
   }

   postAccountData(data: IDataAccount) {
      let formData = new FormData();

      formData.append("image", data.image);
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("address", data.address);
      formData.append("password", data.password);
      formData.append("province", data.province);
      formData.append("city", data.city);
      formData.append("district", data.district);
      formData.append("zip_code", data.zip_code);

      return http.post("/akun/update-account", formData, {
         headers: {
            "Content-Type": "multipart/form-data"
         }
      });
   }

   getProvince() {
      return http.get("/akun/get-province")
   }

   postCity(data: any) {
      return http.post("/akun/get-city", data)
   }

   postDistrict(data: any) {
      return http.post("/akun/get-district", data)
   }

   postChangePassword(data: IDataPassword) {
      return http.post("/akun/update-password", data)
   }
}

export default new GetAccountService();