<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import download from '../assets/images/download.png';
import { useTransaksiStore } from "../stores/transaksi";
import axios from "axios";
const menu = ref('week');

const store = useTransaksiStore();
const payments:any = computed(() => {
  return store.data
})

const uri = (slug:any)=>{
  menu.value = slug
  store.fetchTransaksi(menu.value)
}

onMounted(() => {
  store.fetchTransaksi(menu.value)
})

const downloadPDF = (paymentID) => {
  // DownloadService.getDownloadData(paymentID).then((response) => {
  //   const url = window.URL.createObjectURL(new Blob([response.data]));
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', 'file.pdf');
  //   document.body.appendChild(link);
  //   link.click();
  // });

  axios.get(`https://admin.tavmobil.id/api/lelang/history/pdf/${paymentID}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('isLogin')}`,
      'Accept': 'application/pdf',
    },
    responseType: 'blob'
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf');
    document.body.appendChild(link);
    link.click();
  });

}

</script>

<template>
  <!-- {{payments}} -->
  <div class="col-span-12 bg-blue-500 mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-screen w-full sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12">
      <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">
      <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
          <button @click="uri('week'); menu='week';" :class="menu === 'week' ? 'bg-white text-blue-500':'border border-white text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 rounded-lg mb-4 text-sm font-bold">7 Hari Terakhir</button>            
      </div>
      <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
          <button @click="uri('month'); menu='menang';" :class="menu === 'menang' ? 'bg-white text-blue-500':'border border-white text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 rounded-lg mb-4 text-sm font-bold">30 Hari Terakhir</button>
      </div>
      <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
          <button @click="uri('three-month'); menu='kalah';" :class="menu === 'kalah' ? 'bg-white text-blue-500':'border border-white text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 rounded-lg mb-4 text-sm font-bold">3 Bulan Terakhir</button>
      </div>
      <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
          <button @click="uri('year'); menu='ditolak';" :class="menu === 'ditolak' ? 'bg-white text-blue-500':'border border-white text-white bg-blue-500'" class="w-60 mr-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto px-4 py-2 rounded-lg mb-4 text-sm font-bold">1 Tahun Terakhir</button>
      </div>
    </div>
  </div>
  <div v-if="menu === 'week'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
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
                <tr v-for="payment in payments" :key="payment.id+'table'">
                  <td>{{payment.created_at}}</td>
                  <td>{{`${payment.lelang_mobil.car_detail.car_brand.name} ${payment.lelang_mobil.car_detail.car_merk.name} ${payment.lelang_mobil.car_detail.car_type.name}`}}</td>
                  <td>{{payment.paid}}</td>
                  <td>
                    <div class="border border-black text-white bg-green-600 px-2 py-1 rounded-full" v-if="payment.status === 1">Berhasil</div>
                    <div class="border border-black text-white bg-red-600 px-2 py-1 rounded-full" v-else>Ditolak</div>
                  </td>
                  <td>
                    <p>{{payment.methode}}</p>
                    <!-- <a href="{{payment.image}}" class="text-blue-600" v-if="payment.image != null">Bukti Pembayaran</a> -->
                    <img :src="payment.image" class="p-1" v-if="payment.image != null" />
                    <p v-else>-</p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <button @click="downloadPDF(payment.id)" class="text-blue-600"> Unduh</button>
                      <img :src="download" class="w-6"/>
                    </div>
                  </td>
                  <td>
                    <p v-if="payment.note != null">{{payment.note}}</p>
                    <p v-else>-</p>
                  </td>
                </tr>
              </tbody>
            </table>
        </div> 
  </div>
  <div v-if="menu === 'menang'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
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
                <tr v-for="payment in payments" :key="payment.id+'table'">
                  <td>{{payment.created_at}}</td>
                  <td>{{`${payment.lelang_mobil.car_detail.car_brand.name} ${payment.lelang_mobil.car_detail.car_merk.name} ${payment.lelang_mobil.car_detail.car_type.name}`}}</td>
                  <td>{{payment.paid}}</td>
                  <td>
                    <div class="border border-black text-white bg-green-600 px-2 py-1 rounded-full" v-if="payment.status === 1">Berhasil</div>
                    <div class="border border-black text-white bg-red-600 px-2 py-1 rounded-full" v-else>Ditolak</div>
                  </td>
                  <td>
                    <p>{{payment.methode}}</p>
                    <!-- <a href="{{payment.image}}" class="text-blue-600" v-if="payment.image != null">Bukti Pembayaran</a> -->
                    <img :src="payment.image" class="p-1" v-if="payment.image != null" />
                    <p v-else>-</p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <a v-bind:href="'https://admin.tavmobil.id/history/pdf/' +payment.id" class="text-blue-600"> Unduh</a>
                      <img :src="download" class="w-6"/>
                    </div>
                  </td>
                  <td>
                    <p v-if="payment.note != null">{{payment.note}}</p>
                    <p v-else>-</p>
                  </td>
                </tr>
              </tbody>
            </table>
        </div> 
  </div> 
  <div v-if="menu === 'kalah'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
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
                <tr v-for="payment in payments" :key="payment.id+'table'">
                  <td>{{payment.created_at}}</td>
                  <td>{{`${payment.lelang_mobil.car_detail.car_brand.name} ${payment.lelang_mobil.car_detail.car_merk.name} ${payment.lelang_mobil.car_detail.car_type.name}`}}</td>
                  <td>{{payment.paid}}</td>
                  <td>
                    <div class="border border-black text-white bg-green-600 px-2 py-1 rounded-full" v-if="payment.status === 1">Berhasil</div>
                    <div class="border border-black text-white bg-red-600 px-2 py-1 rounded-full" v-else>Ditolak</div>
                  </td>
                  <td>
                    <p>{{payment.methode}}</p>
                    <!-- <a href="{{payment.image}}" class="text-blue-600" v-if="payment.image != null">Bukti Pembayaran</a> -->
                    <img :src="payment.image" class="p-1" v-if="payment.image != null" />
                    <p v-else>-</p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <a v-bind:href="'https://admin.tavmobil.id/history/pdf/' +payment.id" class="text-blue-600"> Unduh</a>
                      <img :src="download" class="w-6"/>
                    </div>
                  </td>
                  <td>
                    <p v-if="payment.note != null">{{payment.note}}</p>
                    <p v-else>-</p>
                  </td>
                </tr>
              </tbody>
            </table>
        </div> 
  </div> 
  <div v-if="menu === 'ditolak'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
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
                <tr v-for="payment in payments" :key="payment.id+'table'">
                  <td>{{payment.created_at}}</td>
                  <td>{{`${payment.lelang_mobil.car_detail.car_brand.name} ${payment.lelang_mobil.car_detail.car_merk.name} ${payment.lelang_mobil.car_detail.car_type.name}`}}</td>
                  <td>{{payment.paid}}</td>
                  <td>
                    <div class="border border-black text-white bg-green-600 px-2 py-1 rounded-full" v-if="payment.status === 1">Berhasil</div>
                    <div class="border border-black text-white bg-red-600 px-2 py-1 rounded-full" v-else>Ditolak</div>
                  </td>
                  <td>
                    <p>{{payment.methode}}</p>
                    <!-- <a href="{{payment.image}}" class="text-blue-600" v-if="payment.image != null">Bukti Pembayaran</a> -->
                    <img :src="payment.image" class="p-1" v-if="payment.image != null" />
                    <p v-else>-</p>
                  </td>
                  <td>
                    <div class="flex items-center justify-center">
                      <a v-bind:href="'https://admin.tavmobil.id/history/pdf/' +payment.id" class="text-blue-600"> Unduh</a>
                      <img :src="download" class="w-6"/>
                    </div>
                  </td>
                  <td>
                    <p v-if="payment.note != null">{{payment.note}}</p>
                    <p v-else>-</p>
                  </td>
                </tr>
              </tbody>
            </table>
        </div> 
  </div>   
</template>