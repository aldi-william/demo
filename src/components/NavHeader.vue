<script setup lang="ts">
  import { ref } from 'vue';
  import logo_putih from '../assets/images/tav_putih.png';
  import logout from '../assets/images/logout.png';
  import { useRouter, useRoute } from 'vue-router';
  import ModalLogoutComponent from './ModalLogoutComponent.vue';
  const router = useRouter();
  const route = useRoute();
  const logoutdulu = () => {
    localStorage.removeItem('isLogin');
    router.push('/');
  }
  const showLogout = ref(false);
</script>
<template>
  <ModalLogoutComponent v-show="showLogout" @logout="logoutdulu" @close="showLogout = false"/>
  <div class="bg-blue-500 fixed z-30 w-full h-12 sm:h-20">
      <div class="flex justify-between pt-2 h-8 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
        <router-link to="/dashboard/bursamobil">
          <img :src="logo_putih" alt="logo" class="h-8 w-28"/>
        </router-link>
        <div class="text-right">
          <button @click="showLogout = true" class="text-white px-4 py-1 rounded"><img :src="logout" class="w-6 h-6"></button>
        </div>
      </div>
      <div class="flex flex-row justify-between container-xl py-4 items-center">
        <router-link to="/dashboard/bursamobil"><img :src="logo_putih" alt="logo" class="h-8 w-20 hidden sm:flex md:flex lg:flex xl:flex 2xl:flex"/></router-link>
        <ul class="flex-row text-white hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <li class="mx-4" :class="route.name === 'BursaMobil' || route.name === 'BursaMobilDetail' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/bursamobil" class="hover:border-b-4 hover:border-tertier">Bursa Mobil</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Favorit' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/favorit" class="hover:border-b-4 hover:border-tertier">Favorit</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Riwayat' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/riwayat" class="hover:border-b-4 hover:border-tertier">Riwayat</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Akun' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/akun" class="hover:border-b-4 hover:border-tertier">Akun</router-link>
          </li>
          <li class="mx-4" :class="route.name === 'Bantuan' ? 'bg-tertier px-4 py-2 rounded':'px-4 py-2'">
            <router-link to="/dashboard/bantuan" class="hover:border-b-4 hover:border-tertier">Bantuan</router-link>
          </li>
        </ul>
        <div class="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <button @click="showLogout = true" class="text-white px-4 py-2 rounded">Keluar</button>
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