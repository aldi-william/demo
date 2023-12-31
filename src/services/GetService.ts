import http from "../api/http-common";
import { IDataFilter } from "../Interface/IDataFilter";

class GetFilterService {
  getFilter() {
    return http.get("/getCity")
  }
  getFilterMobil(query: IDataFilter) {
    return http.get(`/daftar-lelang?q=${query.search ? query.search : ''}&low=${query.lowPrice ? query.lowPrice : ''}&height=${query.heightPrice ? query.heightPrice : ''}&minYear=${query.minYear ? query.minYear : ''}&maxYear=${query.maxYear ? query.maxYear : ''}&city=${query.city ? query.city : ''}`)
  }
  getSession() {
    return http.get("/lelang-session")
  }
  getDetailData(id: string) {
    return http.get(`/daftar-lelang/${id}`)
  }
}

export default new GetFilterService();