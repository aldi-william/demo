<script setup lang="ts">
  import button_plus from '../assets/images/btn_plus.png';
  import button_minus from '../assets/images/btn_minus.png';
  import checklist from '../assets/images/checklist.png';
  import { ref, onMounted } from 'vue';
  import Bid from '../services/Bid';
  import Echo from "laravel-echo";
  const harga = defineProps(['start_price', 'price_offer','product_id'])
  const close = () => {
    emit('close');
    isTawar.value = 'konfirmasi';
  }

  const isTawar = ref('konfirmasi');
  const emit = defineEmits(['close']);

  const lelang: any = ref({
      lelang_id: 0,
      price_offer: 0
  })
  const bid = (val) => {
      lelang.value.lelang_id = val[1];
      lelang.value.price_offer = val[0];
      Bid.postBidding(lelang.value).then((resp) => {
      
      })
  }

let priceWinner = ref(0);
onMounted(() => {
  // http.get(`https://admin.tavmobil.id/api/lelang/daftar-lelang/${products.product.id}`).then(res => {
  //   console.log(res)
  // })
  
  let echo: any = new Echo({
    broadcaster: "pusher",
    key: "a19e68e554721cca39a0",
    forceTLS: true,
    cluster: "ap1",
  });

  echo.channel('bidding')
    .listen('BiddingEvent', (e) => {
      priceWinner.value = e.bidding.price_winner;
    });
})
</script>
<template>
  <div class="bg-gray-200 fixed w-11/12 sm:w-4/12 mx-auto left-0 right-0 top-40 index px-8 py-2 border border-black rounded-lg">
    <div v-if="isTawar === 'konfirmasi'" class="my-4">
         <div class="text-center text-2xl font-bold">Konfirmasi Tawaran</div>
         <div class="text-center text-lg font-bold">Harga sebelumnya : Rp. {{ new Intl.NumberFormat().format(priceWinner) }}</div>
         <div class="text-center">Anda akan menaikkan harga lelang saat ini sebesar </div>
         <div class="text-center font-bold">Rp {{ new Intl.NumberFormat().format(price_offer) }}</div>
         <div class="text-center">Penawaran harga Anda akan naik menjadi</div>
         <div class="text-center font-bold">Rp. {{ new Intl.NumberFormat().format(priceWinner + price_offer)}} </div>
         <div class="text-center my-4">Anda Yakin Setuju ?</div>
         <div class="flex flex-row justify-center">
          <button @click="close" class="bg-red-500 text-white border px-4 py-2 rounded-lg w-1/3 border-black mx-4">Tidak</button>
          <button @click="bid([price_offer, product_id]); close();" class="bg-green-500 text-white border px-4 py-2 rounded-lg w-1/3 border-black mx-4">Ya</button>
          
         </div>

    </div>
    <div v-else class="relative">
        <div @click="close" class="absolute px-4 m-0 cursor-pointer -right-8 -top-10 font-bold">X</div>
        <h1 class="text-center text-3xl mb-4 font-bold mt-12">Penawaran Berhasil Tersimpan</h1>
        <div class="flex justify-center mb-12">
          <img :src="checklist" class="w-20 h-20"/>  
        </div> 
    </div>
    
  </div>
</template>
<style>
.index{
  z-index: 9999;
}
</style>