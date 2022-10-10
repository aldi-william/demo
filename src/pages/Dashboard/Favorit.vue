<script setup lang="ts">
  import bg_image from '../../assets/images/favorit_bg.png';
  import image_star from '../../assets/images/star.png';
  import image_star_empty from '../../assets/images/star_empty.png';
  import image_car from '../../assets/images/car.png';
  import image_hammer from '../../assets/images/hammer.png';
  import image_users from '../../assets/images/users.png';
  import image_lonceng from '../../assets/images/lonceng.png';
  import image_api from '../../assets/images/icon_api.png';
  import image_mobil from '../../assets/images/icon_mobil.png';
  import image_tergenang from '../../assets/images/icon_tergenang.png';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  const router = useRouter();
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const isEmpty = ref(false);
</script>
<template>
  <div class="container-xl pb-20" v-if="isEmpty">
      <h1 class="mt-4 text-xl font-bold">Favoritku</h1>
      <div class="border-b-4 border-blue-400 w-24 mb-4"></div>
      <img :src="bg_image" alt="bg" class="w-8/12 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 mx-auto"/>
      <div class="text-3xl font-bold text-center my-4">
        <p>Buah Alpukat Buah Kedondong</p>
        <p>Mobil Favorit Masih kosong</p>
      </div>
      <div class="text-md text-center">Yuk Mulai Tambahkan Mobil Favorit kamu, Masuk Dari Menu Navigasi</div>
      <div class="flex justify-center my-4">
        <button @click="router.push('/dashboard/bursamobil')" class="bg-tertier text-black border-black border-2 px-4 py-2 shadow-2x rounded-lg">Pergi ke Bursa Mobil</button>
      </div>
  </div>
  <div class="container-xl grid grid-cols-12 gap-2 py-3" v-else>
    <div class="col-span-12">
      <h1 class="mt-4 text-3xl font-bold">Favoritku</h1>
    </div>
    
    <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 z-10 bg-white" v-for="i in 15" :key="i">
      <div class="rounded shadow-2xl p-4">
         <div class="relative overflow-hidden">
          <div class="absolute bg-blue-500 rounded text-white top-3 left-3">#143779</div>
          <img :src="isFavorit[i] ? image_star : image_star_empty" alt="star" class="w-8 h-8 absolute right-3 top-3" @click="isFavorit[i] = !isFavorit[i]"/>
          <div class="bg-red-600 absolute bottom-0 right-0 px-4 py-0 rounded-tl-full text-white flex items-start">
            Berlangsung
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
              <img :src="image_lonceng" alt="lonceng" class="w-6 h-6"/>
            </div>
            <p>2019 | Matic | 30.000 KM | Semarang </p>
         </div>
         <div class="flex flex-row my-1 justify-between items-center">
          <div>
            <h1>Harga Mulai :</h1>
            <h1 class="text-2xl font-bold">Rp. 1.090.000.000</h1>
          </div>
          <div>
            <button  @click="$router.push(`/dashboard/detail/${i}`);" class="bg-tertier px-4 py-2 shadow-xl text-sm">Lihat</button>
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
</template>
<style>
  .container-xl{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
</style>