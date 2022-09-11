<script setup lang="ts">
  import { ref } from 'vue';
  import logo_putih from '../assets/images/tav_putih.png';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  const logoutdulu = () => {
    localStorage.removeItem('isLogin');
    router.push('/');
  }
  console.log(route.name);
</script>
<template>
  <div class="bg-primary">
      <div class="flex flex-row justify-between container-xl py-4 items-center">
        <img :src="logo_putih" alt="logo" class="h-12 w-20"/>
        <ul class="flex flex-row text-white">
          <li class="mx-4" :class="route.name === 'BursaMobil' || route.name === 'BursaMobilDetail' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/bursamobil">Bursa Mobil</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Berlangsung' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/berlangsung">Berlangsung</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Favorit' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/favorit">Favorit</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Riwayat' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/riwayat">Riwayat</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Profil' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/profil">Profil</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Bantuan' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/bantuan">Bantuan</router-link>
          </li>
        </ul>
        <div>
          <button @click="logoutdulu" class="bg-primary text-white px-4 py-2 rounded">Keluar</button>
        </div>
      </div>
  </div>
</template>

<style>
  .container-xl {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
</style>