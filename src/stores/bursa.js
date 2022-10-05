import { defineStore } from "pinia";
import http from "../api/http-common";

export const useBursaStore = defineStore({
  id: "bursa",
  state: () => ({
    data: [],
    car_detail: {}
  }),
  getters: {},
  actions: {
    async fetchBursa() {
      await http.get("/daftar-lelang")
        .then(resp => {
          this.data = resp.data.data.data
        })
    }
  }
})