import { defineStore } from "pinia";
import http from "../api/http-common";
import { IDataFilter } from "../Interface/IDataFilter";

export const useFavoriteStore = defineStore({
  id: "faforite",
  state: () => ({
    data: [],
    car_detail: {},
    page: 1,
    totalPage: 0,
    currentPage: 1,
  }),
  getters: {},
  actions: {
    // async decrementPage() {
    //   if(this.page < 2){
    //     this.page = 1;
    //   }else {
    //     this.page = this.page - 1;
    //   }

    // },
    // async incrementPage() {
    //   if(this.page > this.totalPage){
    //     this.page = this.totalPage
    //   }else{
    //     this.page = this.page + 1;
    //   }
    // },
    async fetchFavorite() {
      const token = localStorage.getItem('isLogin')

      //set axios header dengan type Authorization + Bearer token
      http.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await http.get("/akun/get-favorite")
        .then(resp => {
          this.data = resp.data.data.data
          this.totalPage = resp.data.data.total % resp.data.data.per_page === 0 ? resp.data.data.total / resp.data.data.per_page : Math.floor(resp.data.data.total / resp.data.data.per_page + 1)
          this.currentPage = resp.data.data.current_page
        })
    },
    async addFavorite(id: any) {
      return new Promise((resolve, reject) => {
        const token = localStorage.getItem('isLogin')

        //set axios header dengan type Authorization + Bearer token
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`
        http.post(`/akun/favorite/${id}`)
          .then(resp => {
            resolve(resp)
          }).catch((err) => {
            reject(err.response.data)
          })
      })
    },
  }
})