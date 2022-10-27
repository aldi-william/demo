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
  const menu = ref('semua');
  const riwayat_menu = ref('penawaran');
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  
</script>
<template>
  <div class="bg-biru_fb relative -top-2">
    <div class="container-xl">
      <!-- <h1 class="py-4 text-3xl font-bold">Riwayat Lelang</h1> -->
      <div class="grid grid-cols-12 pt-4">
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
                    <button @click="menu = 'semua'" :class="menu === 'semua' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2  rounded-lg mb-4 text-sm font-bold">Semua (9)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'menang'" :class="menu === 'menang' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Menang (3)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'kalah'" :class="menu === 'kalah' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Kalah (3)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                    <button @click="menu = 'ditolak'" :class="menu === 'ditolak' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Penawaran Ditolak (3)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'diterima'" :class="menu === 'diterima' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Penawaran Diterima (0)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                   <button @click="menu = 'proses'" :class="menu === 'proses' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Dalam Proses (0)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'siap'" :class="menu === 'siap' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mr-0 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Siap Diambil(0)</button>
             </div>
             <div class="w-96 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                 <button @click="menu = 'sudah'" :class="menu === 'sudah' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">Sudah Diambil(0)</button>
             </div>
             
            </div>
              
          </div>
          <div v-if="menu === 'semua'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
              <div class="grid grid-cols-12 gap-2 overflow-y-auto h-screen mb-8">
                  <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                      <input class="px-4 py-2 rounded-md w-full border-2 border-gray" type="text" placeholder="Cari Merek dan Model Mobil">
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                    <select class="px-4 py-2 rounded-md w-full border-2 border-gray">
                      <option value="-">Rentang Waktu</option>
                      <option value="1">Tampilkan Semua</option>
                      <option value="1">7 Hari Terakhir</option>
                      <option value="1">14 Hari Terakhir</option>
                      <option value="1">1 Bulan Terakhir</option>
                      <option value="1">6 Bulan Terakhir</option>
                      <option value="1">1 Tahun Terakhir</option>
                    </select>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 z-10 bg-white" v-for="i in 9" :key="i">
                    <div class="rounded shadow-2xl p-4">
                      <div class="relative overflow-hidden">
                        <div class="absolute bg-blue-500 rounded text-white top-3 left-3">#143779</div>
                        
                        <div class="bg-green-600 absolute bottom-0 right-0 px-4 py-0 rounded-tl-full text-white flex items-start">
                          Anda Menang
                        </div>
                        <img :src="image_car" alt="car" class="w-full z-10" @click="$router.push(`/dashboard/detail/${i}`);"/>
                      </div>
                      <div class="grid grid-cols-12 my-2 gap-2">
                          <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
                            <img :src="image_hammer" alt="hammer" class="w-6 h-6"/>
                            <div class="text-white mx-2 right-0 relative">1000</div>
                          </div>
                          <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
                            <img :src="image_users" alt="users" class="w-6 h-6"/>
                            <div class="text-white mx-2">1000</div>
                          </div>
                          <div class="col-span-4">
                              <h1 class="text-sm text-center bg-blue-500 text-white rounded-lg px-2 py-1 w-20 float-right">TAV</h1>
                          </div>
                          <div class="col-span-6 flex">
                            <img :src="image_mobil" class="w-12 h-6"/>
                            <img  :src="image_tergenang" class="w-12 h-6 mx-4"/>
                            <img  :src="image_api" class="w-12 h-6"/>
                          </div>
                      </div>
                      <div class="my-1">
                          <div class="flex flex-row items-center justify-between">
                            <h1 class="font-bold text-xl">Suzuki Ertiga Sport</h1>
                            <img :src="isFavorit[i] ? image_star : image_star_empty" alt="star" class="w-8 h-8" @click="isFavorit[i] = !isFavorit[i]"/>
                            <!-- <img :src="image_lonceng" alt="lonceng" class="w-6 h-6"/> -->
                          </div>
                          <p>2019 | Matic | 30.000 KM | Semarang </p>
                      </div>
                      <div class="flex flex-row my-1 justify-between items-center">
                        <div>
                          <h1>Harga Mulai :</h1>
                          <h1 class="text-2xl font-bold">Rp. 1.090.000.000</h1>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="bg-blue-500">
                      <div class="flex flex-row justify-between items-center p-4 shadow-xl">
                          <h1 class="text-white">9 September 2022</h1>
                          <h1 class="text-white">01:30:20</h1>
                      </div>
                    </div>       -->
                  </div>
              </div>
          </div>
          
      </div>
      <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row" v-if="riwayat_menu === 'transaksi'">
          <div class="col-span-12 bg-blue-500 mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-screen w-full sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
              <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">
              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'semua'" :class="menu === 'semua' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">7 Hari Terakhir</button>            
              </div>
              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                 <button @click="menu = 'menang'" :class="menu === 'menang' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">30 Hari Terakhir</button>
              </div>
              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                 <button @click="menu = 'kalah'" :class="menu === 'kalah' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">3 Bulan Terakhir</button>
              </div>
              <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                 <button @click="menu = 'ditolak'" :class="menu === 'ditolak' ? 'bg-white text-blue-500':'text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 text-blue-500 bg-white rounded-lg mb-4 text-sm font-bold">1 Tahun Terakhir</button>
              </div>
            </div>
          </div>
          <div v-if="menu === 'semua'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
                <div class="outer-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Tanggal</th>
                          <th>Nama Mobil</th>
                          <th>Total Pembayaran</th>
                          <th>Status</th>
                          <th>Metode Pembayaran</th>
                          <th>Tanda Terima</th>
                          <th>Catatan TAV</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in 5" :key="i+'table'">
                          <td>01 Sep 2022 10:06:14</td>
                          <td>SUZUKI ERTIGA SPORT 2019 Matic</td>
                          <td>Rp. 110,000,000.00</td>
                          <td>
                            <div class="border border-black text-white bg-green-600 px-2 py-1 rounded-full" v-if="i % 2 === 0">Berhasil</div>
                            <div class="border border-black text-white bg-red-600 px-2 py-1 rounded-full" v-else>Ditolak</div>
                          </td>
                          <td>
                            <p>Pembayaran Langsung</p>
                            <a href="#" class="text-blue-600">Bukti Pembayaran</a>
                          </td>
                          <td>
                            <div class="flex items-center justify-center">
                              <a href="#" class="text-blue-600"> Unduh</a>
                              <img :src="download" class="w-6"/>
                            </div>
                          </td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                </div> 
          </div>  
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