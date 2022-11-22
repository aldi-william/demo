<script setup lang="ts">
  import { ref } from 'vue'
  import card_car from '../../assets/images/card_car.png'
  import label_icon from '../../assets/images/label_icon.png'
  import popup from '../../assets/images/popup.png'
  import image_star from '../../assets/images/star.png';
  import image_star_empty from '../../assets/images/star_empty.png';
  import image_car from '../../assets/images/car.png';
  import image_hammer from '../../assets/images/hammer.png';
  import image_users from '../../assets/images/users.png';
  import image_lonceng from '../../assets/images/lonceng.png';
  import image_mobil from '../../assets/images/icon_mobil.png';
  import image_tergenang from '../../assets/images/icon_tergenang.png';
  import image_api from '../../assets/images/icon_api.png';
  import download from '../../assets/images/download.png';
  import RiwayatPenawaranComponent from '../../components/RiwayatPenawaranComponent.vue';
  import RiwayatTransaksiComponent from '../../components/RiwayatTransaksiComponent.vue';
  import RiwayatPenawaranService from "../../services/RiwayatPenawaranService";
  const menu = ref('semua');
  
  const riwayat_menu = ref('penawaran');
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  
  const semua = ref(0);
  const cancel = ref(0);
  const confirm = ref(0);
  const ready = ref(0);
  const taken = ref(0);
  const waiting = ref(0);
  const winner = ref(0);
  RiwayatPenawaranService.getCountData().then(res=>{
    semua.value = res.data.data.all;
    cancel.value = res.data.data.cancel;
    confirm.value = res.data.data.confirm;
    ready.value = res.data.data.ready;
    taken.value = res.data.data.taken;
    waiting.value = res.data.data.waiting;
    winner.value = res.data.data.winner;
  }).catch(err => console.log(err) )
</script>
<template>
  <div class="bg-biru_fb relative sm:-top-2 -top-6">
    <div class="container-xl">
      <!-- <h1 class="py-4 text-3xl font-bold">Riwayat Lelang</h1> -->
      <div class="grid grid-cols-12 sm:pt-4">
        <div @click="riwayat_menu = 'penawaran'" class="col-span-6 cursor-pointer" :class="riwayat_menu === 'penawaran' ? 'border-b-4 border-blue-400':'border-b-2 border-gray-400'">
             <h1 class="sm:text-2xl text-center py-2">Riwayat Penawaran</h1>
        </div>
        <div @click="riwayat_menu = 'transaksi'" class="col-span-6 cursor-pointer" :class="riwayat_menu === 'transaksi' ? 'border-b-4 border-blue-400':'border-b-2 border-gray-400'">
             <h1 class="sm:text-2xl text-center py-2">Riwayat Transaksi</h1>
        </div>
      </div>
      <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row" v-if="riwayat_menu === 'penawaran'">
          <div class="col-span-12 bg-blue-500 mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-screen w-full sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
            <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">
             <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'semua'" :class="menu === 'semua' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2  rounded-lg mb-4 text-sm font-bold">Semua ({{ semua }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'menang'" :class="menu === 'menang' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2  rounded-lg mb-4 text-sm font-bold">Menang ({{ winner }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'ditolak'" :class="menu === 'ditolak' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2  rounded-lg mb-4 text-sm font-bold">Penawaran Ditolak ({{ cancel }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'diterima'" :class="menu === 'diterima' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Penawaran Diterima ({{ confirm }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'proses'" :class="menu === 'proses' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Dalam Proses ({{ waiting }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'siap'" :class="menu === 'siap' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2  rounded-lg mb-4 text-sm font-bold">Siap Diambil({{ ready }})</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                 <button @click="menu = 'sudah'" :class="menu === 'sudah' ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="w-60 px-4 py-2 rounded-lg mb-4 text-sm font-bold">Sudah Diambil({{ taken }})</button>
             </div>
             
            </div>
              
          </div>
          <div v-if="menu === 'semua'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/all"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'menang'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/winner"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'kalah'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/lose"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'ditolak'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/status?data=cancel"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'diterima'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/status?data=confirm"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'proses'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/status?data=waiting"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'siap'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/status?data=ready"></RiwayatPenawaranComponent>
          </div>
          <div v-if="menu === 'sudah'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
            <RiwayatPenawaranComponent slug="/status?data=taken"></RiwayatPenawaranComponent>
          </div>
          
      </div>
      <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row" v-if="riwayat_menu === 'transaksi'">
          <RiwayatTransaksiComponent/>
      </div>
    </div>
  </div>
</template>
<style>
  .container-xl{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  /** TABLE */

  table ,tr td{
    border:1px solid black;
  }

  tbody {
      display:block;
      max-height:650px;
      overflow-y:scroll;
  }

  thead, tbody tr {
      display:table;
      width:100%;
      table-layout:fixed;
  }

  thead tr{
    border-radius: 1rem;
  }

  thead {
      color: white;
      background:#4F8FDA;
      width:100%; 
  }

  table {
      width:100%;
      text-align: center;
  }

  @media only screen and (max-width: 600px) {
      thead, tbody tr {
          display:table;
          width:100%;
          table-layout:fixed;
      }
      table{
        width:300%;
        text-align: center;
      }
      .outer-table{
        overflow-x: scroll;
      }
  }
  
/* SCROLL BAR */

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #bfbfbf; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray; 
}
</style>