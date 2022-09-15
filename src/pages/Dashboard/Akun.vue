<script setup lang="ts">
import profile from '../../assets/images/profil.png';
import { ref } from 'vue';

const nama = ref('');
const no_wa = ref('');
const email = ref('');
const password = ref('');
const password_saat_ini = ref('');
const password_baru = ref('');
const password_konfirmasi = ref('');
</script>
<template>
  <div class="container-xl">
    <div class="text-center font-bold text-3xl my-12">
        Informasi Profil
    </div>
    <div class="border-2 border-gray rounded-lg w-11/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 mx-auto">
        <div class="flex justify-center my-12">
            <img :src="profile" alt="profile" class="w-40"/>
        </div>
        <div class="m-8">
          <p>Nama Lengkap</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="nama" placeholder="Masukan Nama Lengkap">
        </div>
        <div class="m-8">
          <p>Nomor WhatsApp</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" disabled v-model="no_wa" placeholder="Masukan Nomor WhatsApp">
        </div>
        <div class="m-8">
          <p>Email</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="email" placeholder="Masukan email Anda">
        </div>
        <div class="m-8">
          <p>Alamat</p>
          <textarea class="px-4 py-2 rounded w-full border border-gray">Masukan Alamat Lengkap Anda</textarea>
        </div>
        <div class="m-8">
          <p>Password</p>
          <input type="password" class="px-4 py-2 rounded w-full border border-gray" v-model="password">
          <p>Masukan Password Anda Untuk Melakukan Perubahan</p>
        </div>
        <div class="m-8">
          <button class="px-4 py-2 rounded bg-blue-400 text-white w-full">Simpan</button>
        </div>
    </div>

    <div class="text-center font-bold text-3xl my-12">
        Ganti Password
    </div>
    <div class="border-2 border-gray rounded-lg w-11/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 mx-auto">
        <div class="m-8">
          <p>Password Saat ini</p>
          <input type="password" class="px-4 py-2 rounded w-full border border-gray" v-model="password_saat_ini" placeholder="Password saat ini">
        </div>
        <div class="m-8">
          <p>Password Baru</p>
          <input type="password" class="px-4 py-2 rounded w-full border border-gray" v-model="password_baru" placeholder="Password baru">
        </div>
        <div class="m-8">
          <p>Konfirmasi Password Baru</p>
          <input type="password" class="px-4 py-2 rounded w-full border border-gray" v-model="password_konfirmasi" placeholder="Ulangi password baru">
        </div>
        <div class="m-8">
          <button class="px-4 py-2 rounded bg-blue-400 text-white w-full">Ubah Password</button>
        </div>
    </div>
    
  </div>
</template>