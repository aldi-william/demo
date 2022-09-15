<script setup lang="ts">
import VOtpInput from 'vue3-otp-input';
import { ref } from 'vue';
const emit = defineEmits(['showModal']);
const event = ref('resetPassword');
const detik = ref(180);


const kirimotp = () => {
  const interval = setInterval(()=>{
  detik.value = detik.value - 1;
    if(detik.value <= 0){
      clearInterval(interval);
    }
  }, 1000)
  event.value = 'verifotp';
}

const handleOnComplete =  () => {
  event.value = 'passwordbaru';
}

const exit = () => {
  emit('showModal', false);
}
</script>
<template>
  <div class="absolute left-0 right-0 top-12 text-center border rounded shadow-xl z-10 bg-white w-11/12 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 p-8 mx-auto">
    <div v-if="event ==='resetPassword'">
      <p class="float-right cursor-pointer" @click="emit('showModal')">X</p>
      <h1 class="text-left text-primary text-3xl font-bold my-4">Reset Password</h1>
      <p class="text-justify my-4">Masukan Nomer WhatsApp yang terhubung dengan akun TAV Mobil Anda. Kami akan mengirimkan tautan ke nomor WhatsApp Anda untuk melakukan reset password</p>
      <input placeholder="Nomer WhatsApp" class="px-4 py-2 border border-gray w-full rounded"/>
      <p class="text-red-600 text-left mb-4">Nomor yang Anda masukan tidak valid</p>
      <button class="bg-primary text-white px-4 py-2 rounded w-full" @click="kirimotp()">Kirim</button>
    </div>
    <div v-else-if="event ==='verifotp'">
        <h1 class="text-2xl text-primary">Verifikasi OTP Anda</h1>
        <p class="mb-6">Masukan kode OTP yang telah dikirimkan ke nomor WhatsApp Anda :</p>
        <v-otp-input 
        ref="otpInput" 
        :num-inputs="6" 
        input-classes="w-full border-2 border-gray px-4 py-2" 
        separator="-"
        @on-complete="handleOnComplete"/>
        <div class="mt-6">Belum dapat kode OTP ? Coba kirim ulang {{ detik }} detik</div>
    </div>
    <div v-else-if="event === 'passwordbaru'" class="flex flex-col">
      <h1 class="text-primary text-2xl font-bold mb-4">Silahkan Masukan Password Baru</h1>
      <input placeholder="Password Baru" class="px-4 py-2 border border-gray rounded mb-4"/>
      <input placeholder="Ulangi Password" class="px-4 py-2 border border-gray rounded mb-4"/>
      <button class="bg-primary text-white px-4 py-2 rounded mb-4" @click="exit">Simpan</button>
    </div>
  </div>
</template>