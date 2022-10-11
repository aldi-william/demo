<script setup lang="ts">
  import logo from '../assets/images/logo.png';
</script>
<template>
  <div>
    <div class="w-full bg-white fixed bottom-0 py-4 text-center z-10">
    &#169; 2022 | PT. TAV Mobil Indonesia
  </div>
  <div class="w-full sm:w-1/12 fixed top-0 py-4 text-center">
    <div class="flex justify-center sm:justify-start">
      <img :src="logo" class="w-40">
    </div>
  </div>
  </div>
  
</template>