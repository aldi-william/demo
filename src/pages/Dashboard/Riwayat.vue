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
  const menu = ref(0);
  
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

  const slug = ref([
    {
      name: 'Semua',
      slug: '/all',
      count: semua
    },
    {
      name: 'Menang',
      slug: '/status?data=winner',
      count: winner
    },
    {
      name: 'Penawaran Ditolak',
      slug: '/status?data=cancel',
      count: cancel
    },
    {
      name: 'Penawaran Diterima',
      slug: '/status?data=confirm',
      count: confirm
    },
    {
      name: 'Dalam Proses',
      slug: '/status?data=waiting',
      count: waiting
    },
    {
      name: 'Siap Diambil',
      slug: '/status?data=ready',
      count: ready
    },
    {
      name: 'Sudah Diambil',
      slug: '/status?data=taken',
      count: taken
    }
  ]);
</script>
<template>
  <div class="bg-biru_fb relative sm:-top-2 -top-6">
    <div class="container-xl">
      <div class="grid grid-cols-12 sm:pt-4">
        <div @click="riwayat_menu = 'penawaran'" class="col-span-6 cursor-pointer" :class="riwayat_menu === 'penawaran' ? 'border-b-4 border-blue-400':'border-b-2 border-gray-400'">
             <h1 class="sm:text-2xl text-center py-2">Riwayat Penawaran</h1>
        </div>
        <div @click="riwayat_menu = 'transaksi'" class="col-span-6 cursor-pointer" :class="riwayat_menu === 'transaksi' ? 'border-b-4 border-blue-400':'border-b-2 border-gray-400'">
             <h1 class="sm:text-2xl text-center py-2">Riwayat Transaksi</h1>
        </div>
      </div>
      <div v-if="riwayat_menu === 'penawaran'" class="sm:flex relative mt-10">
          <div class="w-full sm:w-3/12 overflow-x-scroll bg-blue-500 rounded-lg pt-6 sm:py-8 sm:h-screen h-full">
            <div class="flex sm:flex-col mx-10">
             <div class="mr-4 sm:mr-0" v-for="(items,index) in 7" :key="index+'button'">
                    <button @click="menu = index" :class="menu === index ? 'bg-white text-blue-500':'text-white bg-blue-500 border border-white'" class="px-4 py-2 rounded w-60 sm:w-full mb-4">{{ slug[index].name }} ({{ slug[index].count }})</button>
             </div>
            </div> 
          </div>
          <div class="w-full sm:w-9/12 absolute sm:right-0 pl-6 mt-10 sm:mt-0" v-for="(items, index) in slug.length" :key="index+'Riwayat'">
            <div v-if="menu === index" class="absolute left-0 sm:relative">
                <RiwayatPenawaranComponent :slug="slug[index].slug"></RiwayatPenawaranComponent>
            </div>
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