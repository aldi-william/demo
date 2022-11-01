<script setup lang="ts">
  import bg_image from '../../assets/images/favorit_bg.png';
  import { useRouter } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import CardComponentMobil from '../../components/CardComponentMobil.vue';
  import { useFavoriteStore } from '../../stores/favoit';
  import CardComponentMobilSmartPhone from '../../components/CardComponentMobilSmartPhone.vue';
  import GetFilterService from '../../services/GetService';
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
let session_end = ref('');
let status = ref('');
let hours = ref('');
let minutes = ref('');
let seconds = ref('');
let millisecondHours = ref(0);
let millisecondMinutes = ref(0);
let millisecondSeconds = ref(0);
let totalmilliseconds = ref(0);
let timeToCountdown = ref('');

let time = ref('');

onMounted(() => {
     store.fetchFavorite()
})


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
   GetFilterService.getSession().then((response:any) => {
      tanggal.value = response.data.data.date;
      session_end.value = response.data.data.session_end;
      status.value = response.data.data.status;
      hours.value = session_end.value.split(':')[0];
      minutes.value = session_end.value.split(':')[1];
      seconds.value = session_end.value.split(':')[2];
      millisecondHours.value = parseInt(hours.value) * 60 * 60 * 1000;
      millisecondMinutes.value = parseInt(minutes.value) * 60 * 1000;
      millisecondSeconds.value = parseInt(seconds.value) * 1000;
      totalmilliseconds.value = millisecondHours.value + millisecondMinutes.value + millisecondSeconds.value;
   }).catch((error:any) => {
      console.log(error)
   })
}

const myfunc = setInterval(function() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var millisecondHours = hours * 60 * 60 * 1000;
  var millisecondMinutes = minutes * 60 * 1000;
  var millisecondSeconds = seconds * 1000;
  var total = millisecondHours + millisecondMinutes + millisecondSeconds;
  var timeleft = totalmilliseconds.value - total;

  let secondsLeft = Math.floor(timeleft / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  secondsLeft = secondsLeft % 60;
  minutesLeft = minutesLeft % 60;
  hoursLeft = hoursLeft % 24;
  timeToCountdown.value = hoursLeft + ':' + minutesLeft + ':' + secondsLeft;
  if(timeToCountdown.value == '0:0:0') {
    clearInterval(myfunc)
    getDataSession();
  }
}, 1000)

getDataSession();

</script>
<template>
    <div class="bg-abu_abu_2">
      <div class="col-span-12 bg-white flex-col pt-2 z-20 w-full mx-auto fixed top-10 sm:top-[70px]"> 
            <p class="flex justify-center">
              <span class="text-blue-500 mr-2">Status :&nbsp;<span class="text-red-500">{{ status }}</span></span>
              <span class="text-blue-500">Sisa :&nbsp;<span class="text-red-500">{{timeToCountdown}}</span></span>
            </p>
            <div class="text-center text-xs">{{ tanggal }}</div>
      </div>
      <div class="pt-10"></div>
      <div class="container-xl pb-20" v-if="products.length < 1">
          <h1 class="mt-8 text-xl font-bold">Favoritku</h1>
          <div class="border-b-4 border-blue-400 w-24 mb-4"></div>
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
            <CardComponentMobil :product="product" @add-fav="favorite" class="hidden sm:block" :status="status" @bid="bid"/>
            <CardComponentMobilSmartPhone :product="product" @add-fav="favorite" class="block sm:hidden" :status="status" />
        </div>
        <div class="mb-20"></div>
      </div>
    </div>
    
</template>
<style>
  .container-xl{
    max-width: 1200px;
    width: 98%;
    margin: 0 auto;
  }
</style>