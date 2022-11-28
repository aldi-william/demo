<script setup lang="ts">
import { computed, onMounted } from "vue-demi"
import { useHistoryStore } from "../stores/history";
import CardComponentMobil from '../components/CardComponentMobil.vue';
import CardComponentMobilSmartPhone from '../components/CardComponentMobilSmartPhone.vue';


const slug = defineProps({
  slug: String
})

const store = useHistoryStore();
const products:any = computed(() => {
  return store.data
})

const favorite = (id:any) =>{
  store.addFavorite(id)
  .then(()=>{
    store.fetchHistory(slug.slug);
  })
}

onMounted(() => {
  store.fetchHistory(slug.slug)
})
</script>
<template>
  
  <div class="grid grid-cols-12 gap-2 overflow-y-auto mb-8" :class="products.length >=3 ? 'h-screen':'h-[500px]'">
                  <div class="col-span-12 sm:col-span-6">
                      <input class="px-4 py-2 rounded-md w-full border-2 border-gray" type="text" placeholder="Cari Merek dan Model Mobil">
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <select class="px-4 py-2 rounded-md w-full border-2 border-gray">
                      <option value="-">Rentang Waktu</option>
                      <option value="1">Tampilkan Semua</option>
                      <option value="1">7 Hari Terakhir</option>
                      <option value="1">14 Hari Terakhir</option>
                      <option value="1">1 Bulan Terakhir</option>
                      <option value="1">6 Bulan Terakhir</option>
                      <option value="1">1 Tahun Terakhir</option>
                    </select>
                  </div>
                  
                  <div v-for="(product,i) in products" :key="i+'products'" class="col-span-12 sm:col-span-6 bg-white">
                    <CardComponentMobil v-if="!product.lelang_mobil" :product="product" @add-fav="favorite" class="hidden sm:block" status="Berlangsung"/>
                    <CardComponentMobilSmartPhone v-if="!product.lelang_mobil" :product="product" @add-fav="favorite" class="block sm:hidden" status="Berlangsung"/>
                  </div>
  </div>
</template>