<script setup lang="ts">
    const emit = defineEmits(['logout','close']);
</script>
<template>
  <div>
     <div class="bg-black text-white px-4 py-2 fixed top-0 left-0 right-0 m-auto h-screen w-screen z-20 opacity-50">
     </div>
     <div class="bg-white w-10/12 sm:w-3/12 fixed top-1/2 left-0 right-0 mx-auto px-8 py-4 rounded-lg z-20">
        <h1 class="text-black font-bold text-xl">Keluar</h1>
        <p class="text-black">Anda Ingin Keluar ?</p>
        <div class="flex flex-row-reverse">
          <button class="m-4 text-blue-400" @click="emit('close')">Tidak</button>
          <button class="m-4 text-blue-400" @click="emit('logout')">Ya</button>
        </div>
      </div>
  </div>
</template>