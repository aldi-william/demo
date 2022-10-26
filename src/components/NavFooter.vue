<script setup lang="ts">
    import icon_bursa_lelang_hitam from '../assets/images/icon_bursa_lelang_hitam.png';
    import icon_bursa_lelang_putih from '../assets/images/icon_bursa_lelang_putih.png';
    import icon_akun_hitam from '../assets/images/icon_akun_hitam.png';
    import icon_akun_putih from '../assets/images/icon_akun_putih.png';
    import icon_bantuan_hitam from '../assets/images/icon_bantuan_hitam.png';
    import icon_bantuan_putih from '../assets/images/icon_bantuan_putih.png';
    import icon_favorit_hitam from '../assets/images/icon_star_hitam.png';
    import icon_favorit_putih from '../assets/images/icon_star_putih.png';
    import icon_riwayat_hitam from '../assets/images/icon_riwayat_hitam.png';
    import icon_riwayat_putih from '../assets/images/icon_riwayat_putih.png';
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>
<template>
  <div class="fixed bottom-0 left-0 right-0 w-full z-10 flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
    <div class="flex w-full justify-between">
      <router-link to="/dashboard/bursamobil" class="w-1/5 button">
        <div class="flex flex-col w-full py-2" :class="route.name === 'BursaMobil' || route.name === 'BursaMobilDetail' ? 'bg-blue-500':'bg-gray-300'">
          <div class="flex flex-row justify-center">
            <img :src="route.name === 'BursaMobil' || route.name === 'BursaMobilDetail' ? icon_bursa_lelang_putih : icon_bursa_lelang_hitam" class="w-4 h-4"/>
          </div>
          <h1 class="text-center text-sm" :class="route.name === 'BursaMobil' || route.name === 'BursaMobilDetail' ? 'text-white':''">Bursa</h1>
        </div>
      </router-link>
      
      <router-link to="/dashboard/favorit" class="w-1/5 button">
        <div class="flex flex-col w-full py-2" :class="route.name === 'Favorit' ? 'bg-blue-500':'bg-gray-300'">
          <div class="flex flex-row justify-center">
            <img :src="route.name === 'Favorit' ? icon_favorit_putih : icon_favorit_hitam" class="w-4 h-4"/>
          </div>
          <h1 class="text-center text-sm" :class="route.name === 'Favorit' ? 'text-white':''">Favorit</h1>
        </div>
      </router-link>
       
      <router-link to="/dashboard/riwayat" class="w-1/5 button">
        <div class="flex flex-col w-full py-2" :class="route.name === 'Riwayat' ? 'bg-blue-500':'bg-gray-300'">
          <div class="flex flex-row justify-center">
            <img :src="route.name === 'Riwayat' ? icon_riwayat_putih : icon_riwayat_hitam" class="w-4 h-4"/>
          </div>
          <h1 class="text-center text-sm" :class="route.name === 'Riwayat' ? 'text-white':''">Riwayat</h1>
       </div>
      </router-link>
      
      <router-link to="/dashboard/akun" class="w-1/5 button">
        <div class="flex flex-col w-full py-2" :class="route.name === 'Akun' ? 'bg-blue-500':'bg-gray-300'">
          <div class="flex flex-row justify-center">
            <img :src="route.name === 'Akun' ? icon_akun_putih : icon_akun_hitam" class="w-4 h-4"/>
          </div>
          <h1 class="text-center text-sm" :class="route.name === 'Akun' ? 'text-white':''">Akun</h1>
       </div>
      </router-link>

      <router-link to="/dashboard/bantuan" class="w-1/5 button">
        <div class="flex flex-col w-full py-2" :class="route.name === 'Bantuan' ? 'bg-blue-500':'bg-gray-300'">
          <div class="flex flex-row justify-center">
            <img :src="route.name === 'Bantuan' ? icon_bantuan_putih : icon_bantuan_hitam" class="w-2 h-4"/>
          </div>
          <h1 class="text-center text-sm" :class="route.name === 'Bantuan' ? 'text-white':''">Bantuan</h1>
       </div>
      </router-link> 
    </div>
  </div>
</template>
<style>
.button {
  position: relative;
  border: none;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button:after {
  content: "";
  background: lightblue;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
</style>
