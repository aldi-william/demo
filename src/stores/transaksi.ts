import { defineStore } from "pinia";
import http from "../api/http-common";
import { IDataFilter } from "../Interface/IDataFilter";

export const useTransaksiStore = defineStore({
  id: "transaksi",
  state: () => ({
    data: [],
  }),
  getters: {},
  actions: {
    async fetchTransaksi() {

      const token = localStorage.getItem('isLogin')


      //set axios header dengan type Authorization + Bearer token
      http.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await http.get(`/history/payment`)
        .then(resp => {
          this.data = resp.data.data.data
        })
    }
  }
})