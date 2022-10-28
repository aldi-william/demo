<script setup lang="ts">
  import bg_image from '../../assets/images/favorit_bg.png';
  import image_star from '../../assets/images/star.png';
  import image_star_empty from '../../assets/images/star_empty.png';
  import image_car from '../../assets/images/car.png';
  import image_hammer from '../../assets/images/hammer.png';
  import image_users from '../../assets/images/users.png';
  import image_lonceng from '../../assets/images/lonceng.png';
  import image_api from '../../assets/images/icon_api.png';
  import image_mobil from '../../assets/images/icon_mobil.png';
  import image_tergenang from '../../assets/images/icon_tergenang.png';
  import { useRouter } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import FavoriteService from '../../services/FavoriteService';
  import CardComponentMobil from '../../components/CardComponentMobil.vue';
import { useFavoriteStore } from '../../stores/favoit';
import CardComponentMobilSmartPhone from '../../components/CardComponentMobilSmartPhone.vue';
import GetFilterService from '../../services/GetService';
  const router = useRouter();
  const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const isEmpty = ref(false);
  
  // const getDataFavorite = () => {
  //   FavoriteService.getFavoriteData().then((response) => {
  //     console.log(response)
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // getDataFavorite();

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

onMounted(() => {
  store.fetchFavorite();
})

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
      <div class="container-xl grid grid-cols-12 bg-white shadow-xl mb-12">
      <div class="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 sm:px-4 sm:bg-white py-2 flex justify-center items-center z-20 sm:z-0 md:z-0 lg:z-0 xl:z-0 2xl:z-0">
        <div class="bg-white w-full fixed sm:relative px-4 sm:px-0 py-2 sm:mt-0 sm:py-0 border-black">
          <div class="grid grid-cols-12 gap-2">
            <p class="col-span-2 text-sm sm:text-2xl font-bold">
              <span class="text-blue-500">Status</span>
            </p>
            <p class="col-span-4 text-sm sm:text-2xl font-bold">:&nbsp;<span class="text-red-500">{{ status }}</span></p>
            <p class="col-span-2 text-sm sm:text-2xl font-bold"><span class="text-blue-500">Sisa</span></p>
            <p class="col-span-4 text-sm sm:text-2xl font-bold">:&nbsp;<span class="text-red-500">{{timeToCountdown}}</span></p>
          </div>
        </div>
      </div>  
      </div>
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
      <div class="container-xl grid grid-cols-12 gap-2 py-3" v-else>
        <div class="col-span-12 sm:mt-0"></div>
        <div v-for="(product,i) in products" :key="i+'products'"
            class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 z-10 bg-white">
            <CardComponentMobil :product="product" @add-fav="favorite" class="hidden sm:block"/>
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