<script setup lang="ts">
// import profile from '../../assets/images/profil.png';
// import Footer from '../../components/Footer.vue';
import GetAccountService from '../../services/AccountService';
import { IDataAccount } from '../../Interface/IDataAccount';
import { ref, reactive } from 'vue';
import upload_image from '../../assets/images/upload_image.png';

const data = ref<IDataAccount>({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  address: '',
  image:'',
  city: 0,
  province: 0,
  district: 0,
  zip_code: 0
});

const no_whatsapp = ref('');
const password_saat_ini = ref('');
const password_baru = ref('');
const password_konfirmasi = ref('');
const gambar = ref('');
const provinsi = ref([]);
const kota = ref([]);
const kecamatan = ref([]);

const getData = () => {
  GetAccountService.getAccountData().then((response:any) => {
    console.log(response)
    data.value = response.data.data;
    provinsi.value = response.data.provinces;
    kota.value = response.data.cities;
    console.log(kota.value);
    kecamatan.value = response.data.districts;
    gambar.value = response.data.data.image;
    no_whatsapp.value = response.data.data.no_whatsapp;
  }).catch((error:any) => {
    console.log(error)
  })
}

const sendDataAccount = () => {
  GetAccountService.postAccountData(data.value).then((response:any) => {
      console.log(response)
  }).catch((error:any) => {
    console.log(error)
  })
}

const changeAvatar = (e:any) => {
  data.value.image = e.target.files[0];
  gambar.value = URL.createObjectURL(e.target.files[0]);
}

const changeKota = () => {

}


getData();
</script>
<template>
  <div class="bg-biru_fb pb-24 pt-12">
    <div class="container-xl">
    <div class="text-center font-bold text-3xl mb-12">
        Informasi Profil
    </div>
    <div class="border-2 border-gray rounded-lg w-11/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 mx-auto bg-white">
        <div class="flex justify-center my-12 relative w-1/4 mx-auto">
            <img :src="gambar" alt="profile" class="w-40 rounded-full"/>
          
            <label class="absolute bottom-0 right-4">
                <input type="file" @change="changeAvatar($event)" accept="image/*"/>
                <img :src="upload_image" class="w-12">
            </label>
          
            
        </div>
        <div class="m-8">
          <p>Nama Depan</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="data.first_name" placeholder="Masukan Nama Depan">
        </div>
        <div class="m-8">
          <p>Nama Belakang</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="data.last_name" placeholder="Masukan Nama Belakang">
        </div>
        <div class="m-8">
          <p>Nomor WhatsApp</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" disabled v-model="no_whatsapp" placeholder="Masukan Nomor WhatsApp">
        </div>
        <div class="m-8">
          <p>Email</p>
          <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="data.email" placeholder="Masukan email Anda">
        </div>
        <div class="m-8 flex">
            <div class="w-1/2 mr-2">
              <p>Provinsi</p>
              <select class="px-4 py-2 rounded w-full border border-gray">
                <option v-for="(item,index) in provinsi" :key="index" :value="item.id" @click="changeKota">
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="w-1/2">
              <p>Kota</p>
              <select class="px-4 py-2 rounded w-full border border-gray">
                <option v-for="(item,index) in kota" :key="index" :value="item.id" @click="changeKota">
                  {{ item.name }}
                </option>
              </select>
            </div>
        </div>
        <div class="m-8 flex">
          <div class="w-1/2 mr-2">
            <p>Kecamatan</p>
            <select class="px-4 py-2 rounded w-full border border-gray">
              <option v-for="(item,index) in kecamatan" :key="index" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="w-1/2">
            <p>Kode Pos</p>
            <input type="text" class="px-4 py-2 rounded w-full border border-gray" v-model="data.zip_code" placeholder="Masukan Kode Pos">
          </div>
        </div>
        <div class="m-8">
          <p>Alamat</p>
          <textarea class="px-4 py-2 rounded w-full border border-gray" placeholder="Masukan Alamat Lengkap Anda" v-model="data.address">
            {{ data.address }}
          </textarea>
        </div>
        <div class="m-8">
          <p>Password</p>
          <input type="password" class="px-4 py-2 rounded w-full border border-gray" v-model="data.password">
          <p class="text-sm">Masukan Password Anda Untuk Melakukan Perubahan</p>
        </div>
        <div class="m-8">
          <button class="px-4 py-2 rounded bg-blue-400 text-white w-full" @click="sendDataAccount()">Simpan</button>
        </div>
    </div>

    <div class="text-center font-bold text-3xl py-12">
        Ganti Password
    </div>
    <div class="border-2 border-gray rounded-lg w-11/12 sm:w-8/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 mx-auto bg-white">
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
  </div>
  
</template>
<style>
input[type="file"] {
    display: none;
}
</style>