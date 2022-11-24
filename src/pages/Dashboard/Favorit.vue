<script setup lang="ts">
  import bg_image from '../../assets/images/favorit_bg.png';
  import { useRouter } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import CardComponentMobil from '../../components/CardComponentMobil.vue';
  import { useFavoriteStore } from '../../stores/favoit';
  import CardComponentMobilSmartPhone from '../../components/CardComponentMobilSmartPhone.vue';
  import GetFilterService from '../../services/GetService';
  import ModalComponent from '../../components/ModalComponent.vue';
  import Bid from '../../services/Bid';
  import Echo from "laravel-echo";
  // eslint-disable-next-line no-unused-vars
  import Pusher from "pusher-js";
  import axios from "axios";
  const router = useRouter();
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const isEmpty = ref(false);

  // pinia
const store = useFavoriteStore();

const products:any = computed(() => {  
  return store.data
})

let tanggal = ref('');
let session_end = ref();
let status = ref('');
let timeToCountdown = ref('');
let waiting = ref(false);

let time = ref('');

onMounted(() => {
  store.fetchFavorite()
})

const isModalShow = ref(false);
const lelang_id = ref(0);
const price_offer = ref(0);
const lelang:any = ref({
  lelang_id: 0,
  price_offer:0
})

const bid = (val) => {
  lelang.value.lelang_id = val[1];
  lelang.value.price_offer = val[0];

  Bid.postBidding(lelang_id.value).then((resp) => {
    console.log(resp);
  })
}
      
const favorite = (id:any) =>{
  store.addFavorite(id)
  .then(()=>{
    store.fetchFavorite();
  })
}

const getDataSession = () => {
  waiting.value = true
  GetFilterService.getSession().then((response:any) => {
    tanggal.value = response.data.data.date;
    session_end.value = new Date(response.data.data.session_end).getTime();
    status.value = response.data.data.status;
    waiting.value = false
   }).catch((error:any) => {
      console.log(error)
   })
}

const myfunc = setInterval(function() {

  // Dapatkan tanggal dan waktu hari ini
  let now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  let distance = session_end.value - now;
    
  // Perhitungan waktu untuk jam, menit dan detik
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Keluarkan hasil dalam elemen dengan id = "demo"
  timeToCountdown.value =hours + ":"
  + minutes + ":" + seconds
    
  //Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(myfunc);
    getDataSession()
  }
  }, 1000);


let start_price = ref(0);
let harga_tawaran = ref(0);
let product_id = ref(0);
const startPrice = (val:Number) => {
  start_price.value = val[0];
  harga_tawaran.value = val[1];
  product_id.value = val[2];
}

getDataSession();

</script>
<template>
    <div class="bg-abu_abu_2">
      <div class="col-span-12 bg-white flex-col pt-2 z-20 w-full mx-auto fixed top-10 sm:top-[70px]"> 
            <p class="flex justify-center">
              <span class="text-blue-500 mr-2">Status :&nbsp;<span class="text-red-500">{{ status }}</span></span>
              <span class="text-blue-500">Sisa :&nbsp;<span class="text-red-500">{{waiting?'waiting...':timeToCountdown}}</span></span>
            </p>
            <div class="text-center text-xs">{{ tanggal }}</div>
      </div>
      <div class="pt-1 sm:pt-10"></div>
      <div class="container-xl pb-20" v-if="products.length < 1">
          <img :src="bg_image" alt="bg" class="w-8/12 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 mx-auto"/>
          <div class="text-3xl font-bold text-center my-4">
            <p>Buah Alpukat Buah Kedondong</p>
            <p>Mobil Favorit Masih kosong</p>
          </div>
          <div class="text-md text-center">Yuk Mulai Tambahkan Mobil Favorit kamu, Masuk Dari Menu Navigasi</div>
          <div class="flex justify-center my-4">
            <button @click="router.push('/dashboard/bursamobil')" class="bg-tertier text-black border-black border-2 px-4 py-2 shadow-2x rounded-lg">Pergi ke Bursa Mobil</button>
          </div>
      </div>
      <div class="container-xl grid grid-cols-12 gap-2 py-3 pb-40 mt-40" v-else>
        <div class="col-span-12 sm:mt-0"></div>
        <div v-for="(product,i) in products" :key="i+'products'"
            class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 z-10 bg-white">
            <CardComponentMobil :product="product" @add-fav="favorite"  @mulai-tawar="isModalShow = true" @init-data="startPrice" class="hidden sm:block" :status="status" @bid="bid"/>
            <CardComponentMobilSmartPhone :product="product" @add-fav="favorite" class="block sm:hidden" :status="status" />
        </div>
        <div class="mb-20"></div>
      </div>
    </div>
    <ModalComponent v-show="isModalShow" @close="isModalShow = false" class="z-50" :start_price="start_price" :price_offer="harga_tawaran" :product_id="product_id"/>
</template>
<style>
  .container-xl{
    max-width: 1200px;
    width: 98%;
    margin: 0 auto;
  }
</style>