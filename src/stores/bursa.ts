import { defineStore } from "pinia";
import http from "../api/http-common";
import { IDataFilter } from "../interface/IDataFilter";

export const useBursaStore = defineStore({
  id: "bursa",
  state: () => ({
    data: [],
    car_detail: {},
  }),
  getters: {},
  actions: {
    async fetchBursa() {
      await http.get("/daftar-lelang")
        .then(resp => {
          this.data = resp.data.data.data
        })
    },
    async filterBursa(query: IDataFilter) {
      await http.get(`/daftar-lelang?q=${query.search}&low=${query.lowPrice}&height=${query.heightPrice}&minYear=${query.minYear}&maxYear=${query.maxYear}&city=${query.city}&range${(query.km*1000)}`)
        .then(resp => {
          this.data = resp.data.data.data
        })
    },
  }
})