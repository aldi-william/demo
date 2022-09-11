<script setup lang="ts">
  import { ref } from 'vue';
  import image_rentang_harga from '../../../assets/images/icon_rentang_harga.png';
  import image_search from '../../../assets/images/icon_search.png';
  import image_calender from '../../../assets/images/icon_calender.png';
  import image_location from '../../../assets/images/icon_location.png';
  import image_filter from '../../../assets/images/icon_filter.png';
  import image_car from '../../../assets/images/car.png';
  import image_hammer from '../../../assets/images/hammer.png';
  import image_users from '../../../assets/images/users.png';
  import image_lonceng from '../../../assets/images/lonceng.png';
  import image_star from '../../../assets/images/star.png';
  import image_star_empty from '../../../assets/images/star_empty.png';
  const range_harga = ref(false);
  const range_tahun = ref(false);
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
</script>
<template>
  <div class="bg-biru_fb">
  <div class="container-xl grid grid-cols-12 gap-2 py-3">
    <div class="col-span-5 px-4 py-2 border-2 border-gray flex justify-center items-center bg-white">Hari ini : Rabu 7 September 2022</div>
    <div class="col-span-3 bg-white">
      <div class="px-4 py-2 border-2 border-gray rounded">
        <div class="flex flex-col justify-around py-2">
          <p>1. Sesi Pagi : 09.00 - 11.00 WIB</p>
          <p>2. Sesi Sore : 13.00 - 15.00 WIB</p>
        </div>
      </div>
    </div>
    <div class="col-span-4 bg-white">
      <div class="px-4 py-2 border-2 border-gray rounded">
        <div class="flex flex-col justify-around">
          <p class="text-2xl font-bold"><span class="text-blue-500">Status Lelang</span> : <span class="text-red-500">Berlangsung</span></p>
          <p class="text-2xl font-bold"><span class="text-blue-500">Sisa Waktu</span> : <span class="text-red-500">01:30:20</span></p>
        </div>
      </div>
    </div>
    <div class="col-span-4 relative bg-white">
         <input placeholder="Cari Merek, Model Mobil atau lainnya" class="pl-8 pr-4 py-2 w-full border-2 border-gray"/>
         <img :src="image_search" alt="search" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end"/>
    </div>
    <div class="col-span-2 relative bg-white">
         <button class="pl-8 pr-4 py-2 w-full border-2 border-gray" @click="range_harga = !range_harga">Range Harga</button>
         <img :src="image_rentang_harga" alt="rentang harga" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end"/>
         <div class="absolute border bg-white shadow-xl p-4 z-20" v-show="range_harga">
             <div>
              Harga 
             </div>
             <div class="flex flex-row my-4">
                <div class="bg-biru rounded-l px-4 py-2 border border-black">Rp</div><input placeholder="harga terendah" class="px-4 py-2 border border-black rounded-r"/>
             </div>
             <div class="flex flex-row my-4">
                <div class="bg-biru rounded-l px-4 py-2 border border-black">Rp</div><input placeholder="harga tertinggi" class="px-4 py-2 border border-black rounded-r"/>
             </div>
             <button class="text-white bg-primary px-4 py-2 w-full rounded">Terapkan</button>
         </div>
    </div>
    <div class="col-span-2 relative bg-white">
         <button placeholder="Tahun" class="pl-8 pr-4 py-2 w-full border-2 border-gray" @click="range_tahun = !range_tahun">Tahun</button>
         <img :src="image_calender" alt="calendar" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end"/>
         <div class="absolute border bg-white shadow-xl p-4 z-20" v-show="range_tahun">
             <div class="mb-2">
              Tahun 
             </div>
             <div class="flex flex-row items-center justify-between shadow-xl">
                <div class="flex flex-col mb-4 w-20">
                  <p>dari</p> 
                  <input placeholder="2010" class="px-4 py-2 border border-black rounded"/>
                </div>
                <div class="text-center mx-4">-</div>
                <div class="flex flex-col mb-4 w-20">
                  <p>hingga</p> 
                  <input placeholder="2022" class="px-4 py-2 border border-black rounded"/>
                </div>
             </div>
             
             <button class="text-white bg-primary px-4 py-2 w-full rounded">Terapkan</button>
         </div>
    </div>
    <div class="col-span-2 relative">
         <select placeholder="Kota" class="pl-8 pr-4 py-2 w-full border-2 border-gray">
            <option value="1">Semarang</option>
            <option value="2">Jakarta</option>
            <option value="3">Bandung</option>
         </select>
         <img :src="image_location" alt="location" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end"/>
    </div>
    <div class="col-span-2 relative">
         <select class="pl-8 pr-4 py-2 w-full border-2 border-gray">
             <option>Range Tahun</option>
             <option>Range Kilometer</option>
         </select>
         <img :src="image_filter" alt="location" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end"/>
    </div>
    <div class="col-span-4 z-10" v-for="i in 16" :key="i">
      <div class="rounded shadow-2xl p-4">
         <div class="relative overflow-hidden">
          <div class="absolute bg-primary rounded text-white top-3 left-3">#143779</div>
          <img :src="isFavorit[i] ? image_star : image_star_empty" alt="star" class="w-8 h-8 absolute right-3 top-3" @click="isFavorit[i] = !isFavorit[i]"/>
          <div class="bg-red-600 absolute bottom-0 right-0 px-4 py-0 rounded-tl-full text-white flex items-start">
            Berlangsung
          </div>
          <img :src="image_car" alt="car" class="w-full z-10" @click="$router.push(`/dashboard/bursamobil/detail/${i}`);"/>
         </div>
         <div class="flex flex-row justify-between">
          <div class="w-1/2 flex flex-row my-4">
                <div class="relative mr-4">
                    <img :src="image_hammer" alt="hammer" class="w-16"/>
                    <div class="text-white mx-2 absolute top-1 -right-1">100</div>
                </div>
                <div class="relative">
                    <img :src="image_users" alt="users" class="w-16"/>
                    <div class="text-white mx-2 absolute top-1 right-0">100</div>
                </div>
          </div>
          <div class="px-2 py-1 my-4 flex items-center justify-center bg-primary text-white rounded-lg">
              <h1 class="text-sm w-12 text-center">TAV</h1>
          </div>
         </div>
         <div class="my-1">
            <div class="flex flex-row items-center justify-between">
              <h1 class="font-bold text-xl">Suzuki Ertiga Sport</h1>
              <img :src="image_lonceng" alt="lonceng" class="w-6 h-6"/>
            </div>
            <p>2019 | Matic | 30.000 KM | Semarang </p>
         </div>
         <div class="flex flex-row my-1 justify-between items-center">
          <div>
            <h1>Harga Mulai</h1>
            <h1 class="text-2xl font-bold">Rp. 90.000.000</h1>
          </div>
          <div>
            <button class="bg-yellow-500 px-4 py-2 shadow-xl">Buat Penawaran</button>
          </div>
         </div>
      </div>
      <div class="bg-blue-500">
         <div class="flex flex-row justify-between items-center p-4 shadow-xl">
            <h1 class="text-white">9 September 2022</h1>
            <h1 class="text-white">01:30:20</h1>
         </div>
      </div>      
    </div>
    <div class="col-span-12">
         <div class="flex flex-row justify-center">
            <div class="px-4 py-2 rounded border border-gray cursor-pointer bg-white">Sebelumnya</div>
            <div class="px-4 py-2 rounded border border-gray hover:bg-primary hover:text-white cursor-pointer bg-white" v-for="i in 5">{{ i }}</div>
            <div class="px-4 py-2 rounded border border-gray cursor-pointer bg-white">Selanjutnya</div>
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
</style>