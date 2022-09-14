<script setup lang="ts">
  import button_plus from '../assets/images/btn_plus.png';
  import button_minus from '../assets/images/btn_minus.png';
  import checklist from '../assets/images/checklist.png';
  import { ref } from 'vue';
  const harga = ref(500000);
  const handle_decrement = () => {
    if(harga.value <= 500000){

    }else{
      if(isActive.value === 10 && harga.value !== 1000000){
        harga.value -= 1000000;
      }else{
        harga.value -= 500000;
      }
    }
    
  }
  const handle_increment = () => { 
      if(isActive.value === 5){
         harga.value += 500000;
      }else{
         harga.value += 1000000;
      } 
  }
  const close = () => {
    emit('close');
    isTawar.value = 'awal';
  }

  const isActive = ref(5);
  const isTawar = ref('awal');
  const emit = defineEmits(['close'])
</script>
<template>
  <div class="bg-gray-200 fixed w-4/12 mx-auto left-0 right-0 z-10 px-8 py-2 border border-black rounded-lg">
    <div v-if="isTawar === 'awal'" class="relative">
      <div @click="emit('close')" class="absolute px-4 m-0 cursor-pointer -right-8 -top-8 font-bold">X</div>
      <h1 class="text-xl font-bold mt-8 text-center">Penawaran Lelang</h1>  
      <p class="text-center my-4">Penawaran meningkat per Rp 500.000,- / Rp 1.000.000,-</p>
      <div class="flex flex-row justify-around">
          <button><img :src="button_minus" class="h-12 w-12" @click="handle_decrement()"/></button>
          <p class="font-bold text-3xl">Rp {{ new Intl.NumberFormat().format(harga) }}</p>
          <button><img :src="button_plus" class="h-12 w-12" @click="handle_increment()"/></button>
      </div>
      <div class="flex justify-around my-4">
        <button @click="isActive = 5" class="px-4 py-2 text-white rounded-lg w-1/3" :class="isActive === 5 ? 'bg-blue-500':'bg-abu_abu_pucat text-gray-400'">Rp 500.000</button>
        <button @click="isActive = 10" class="px-4 py-2 text-white rounded-lg w-1/3" :class="isActive === 10? 'bg-blue-500':'bg-abu_abu_pucat text-gray-400'">Rp 1.000.000</button>
      </div>
      <div class="flex justify-center mb-4">
        <button @click="isTawar = 'konfirmasi'" class="bg-tertier px-4 py-2 rounded-xl text-white w-40 font-bold">Mulai Tawar</button>
      </div>
    </div>
    <div v-else-if="isTawar === 'konfirmasi'" class="my-4">
         <div class="text-center text-2xl font-bold">Konfirmasi Tawaran</div>
         <div class="text-center text-lg font-bold">Harga sebelumnya : Rp. 90.000.000</div>
         <div class="text-center">Anda akan menaikkan harga lelang saat ini sebesar </div>
         <div class="text-center font-bold">Rp {{ new Intl.NumberFormat().format(harga) }}</div>
         <div class="text-center">Penawaran harga Anda akan naik menjadi</div>
         <div class="text-center font-bold">Rp. 90.500.000</div>
         <div class="text-center my-4">Anda Yakin Setuju ?</div>
         <div class="flex flex-row justify-center">
          <button @click="isTawar = 'sukses'" class="bg-green-500 text-white border px-4 py-2 rounded-lg w-1/3 border-black mx-4">Ya</button>
          <button @click="isTawar = 'awal'" class="bg-red-500 text-white border px-4 py-2 rounded-lg w-1/3 border-black mx-4">Batal</button>
         </div>

    </div>
    <div v-else-if="isTawar === 'sukses'" class="relative">
        <div @click="close" class="absolute px-4 m-0 cursor-pointer -right-8 -top-10 font-bold">X</div>
        <h1 class="text-center text-3xl mb-4 font-bold mt-12">Penawaran Berhasil Tersimpan</h1>
        <div class="flex justify-center mb-12">
          <img :src="checklist" class="w-20 h-20"/>  
        </div>
        
    </div>
    
  </div>
</template>