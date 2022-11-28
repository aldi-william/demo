<script setup lang="ts">
import image_hammer from '../assets/images/hammer.png';
import image_users from '../assets/images/users.png';
import image_star from '../assets/images/bintang.png';
import image_star_empty from '../assets/images/bintang_empty.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import gif from '../assets/images/svg/200.gif';
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { formatPrice, textCapitalize } from '../mixins';
import Bid from '../services/Bid';
import Echo from "laravel-echo";
// eslint-disable-next-line no-unused-vars
const route = useRoute();
const products = defineProps(['product', 'isShow', 'status'])
// const storeBursa = useBursaStore();
const harga = ref(500000);
const isActive = ref(5);
const isActiveMin = ref(5);
const isTawar = ref('awal');
const isModalShow = ref(false);

const handle_decrement = () => {
  if (harga.value <= 500000) {

  } else {
    if (isActive.value === 10 && harga.value !== 1000000) {
      harga.value -= 1000000;
    } else {
      harga.value -= 500000;
    }
  }

}
const handle_increment = () => {
  if (isActive.value === 5) {
    harga.value += 500000;
  } else {
    harga.value += 1000000;
  }
}

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

const showFavorite = ref(false);
let splash_id = ref(0);
onMounted(() => {
  console.log(products.product.favorites)
  if((products.product.favorites).length > 0){
    showFavorite.value = true;
  }
  let echo: any = new Echo({
    broadcaster: "pusher",
    key: "a19e68e554721cca39a0",
    forceTLS: true,
    cluster: "ap1",
  });
  
  
  echo.channel('bidding')
    .listen('BiddingEvent', (e) => {
      if (products.product.id == e.bidding.id) {
        splash_id.value = e.bidding.id;
        products.product.price_winner = e.bidding.price_winner
        products.product.CountPeople = e.bidding.CountPeople
        products.product.countBidding = e.bidding.countBidding
        products.product.Splash = true;
        setTimeout(() => {
          products.product.Splash = e.bidding.Splash;
        }, 100) 
      }
      
    });
})

</script>
<template>
  <div>
    <div class="rounded shadow-2xl p-4 h-full">
    <div class="relative overflow-hidden">
      <div class="absolute bg-blue-500 rounded text-white top-3 left-3 px-2">{{ product.code }}</div>
      <!-- <div class="bg-red-600 absolute bottom-0 right-0 px-4 py-0 rounded-tl-full text-white flex items-start">
              Berlangsung
            </div> -->
      <img :src="product.car_detail.image_feature1" alt="car" class="w-full h-64 z-10 cursor-pointer object-cover"
        @click="$router.push(`/dashboard/detail/${product.id}`);" />
      <div :class="product.id == splash_id && product.Splash ? 'absolute top-0 z-50 color-blue h-screen w-screen':''">   
      </div>
    </div>
    <div class="grid grid-cols-12 my-2 gap-2">
      <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
        <img :src="image_hammer" alt="hammer" class="w-6 h-6" />
        <div class="text-white mx-2 right-0 relative" v-if="status === 'Berlangsung'">{{ product.countBidding  }}</div>
        <div class="text-white mx-2 right-0 relative" v-else>-</div>
      </div>
      <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
        <img :src="image_users" alt="users" class="w-6 h-6" />
        <div class="text-white mx-2" v-if="status === 'Berlangsung'">{{ product.CountPeople }}</div>
        <div class="text-white mx-2" v-else>-</div>
      </div>
      <div class="col-span-4">
        <h1 class="text-sm text-center bg-blue-500 text-white rounded-lg px-2 py-1 w-20 float-right">TAV</h1>
      </div>
      <div class="col-span-6 flex">
        <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
          <img :src="image_mobil" class="w-8 h-6 mr-2" v-if="product.car_detail.car_inspection.accident_free !== '1'" />
        </div>
        <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
          <img :src="image_tergenang" class="w-8 h-6 mx-2" v-if="product.car_detail.car_inspection.flood_free !== '1'" />
        </div>
        <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
          <img :src="image_api" class="w-8 h-6 ml-2" v-if="product.car_detail.car_inspection.fire_free !== '1'" />
        </div>
      </div>
    </div>
    <div class="my-1">
      <div class="flex flex-row items-center justify-between">
        <h1 class="font-bold text-xl">{{ product.car_detail.car_brand.name.toUpperCase() }}
          {{ product.car_detail.car_merk.name.toUpperCase() }}
          {{ product.car_detail.car_type.name.toUpperCase() }}</h1>
        <img :src="gif" class="w-20 h-20" v-show="isShow" />
        <img :src="showFavorite ? image_star : image_star_empty" alt="star"
          class="w-8 h-8 cursor-pointer" @click="$emit('addFav', product.id);" />
        <!-- <img :src="isFavorit[product.id] ? image_star : image_star_empty" alt="star"
              class="w-8 h-8" @click="isFavorit[i] = !isFavorit[i]" /> -->
        <!-- <img :src="image_lonceng" alt="lonceng" class="w-6 h-6" /> -->
      </div>
      <p>{{ product.car_detail.tahun }} | {{ product.car_detail.transmisi }} |
        {{ formatPrice(product.car_detail.km_service_terakhir) }} KM | {{ product.car_detail.kota ?
            textCapitalize(product.car_detail.kota) : ''
        }} </p>
    </div>
    <div class="flex flex-row my-1 justify-between items-center">
      <div>
        <!-- <h1 v-if="route.name === 'BursaMobil'">Harga Mulai :</h1>
        <h1 v-else>Penawaran Terbaru :</h1> -->
        <!-- <div>{{ price_winner }}</div> -->
        <h1 class="text-2xl font-bold">Rp {{ route.name === 'Riyawat' ? formatPrice(product.price_winner) : formatPrice(product.price_winner) }}</h1>
      </div>
      <div>
        <button @click="$router.push(`/dashboard/detail/${product.id}`);"
          class="bg-tertier px-4 py-2 shadow-xl text-sm hover:bg-blue-500 hover:text-white">Lihat</button>
      </div>
    </div>
    <div class="bg-gray-200 flex items-center p-2 justify-center" v-show="route.name === 'Favorit' && status === 'Berlangsung'">
      <div class="flex justify-center w-1/2">
          <div class="flex flex-col w-9/12">
          <button @click="isActive = 5; handle_increment()" class="px-2 py-1 text-white rounded w-full text-xs mb-4" :class="isActive === 5 ? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">+ Rp 500.000</button>
          <button @click="isActive = 10; handle_increment()" class="px-2 py-1 text-white rounded w-full text-xs" :class="isActive === 10? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">+ Rp 1.000.000</button>
          <p class="font-bold mt-4 mx-auto">Rp {{ new Intl.NumberFormat().format(harga) }}</p>
          </div>
      </div>
      <div class="flex justify-center w-1/2">
        <div class="flex flex-col w-9/12">
          <button @click="isActiveMin = 5; handle_decrement()" class="px-2 py-1 text-white rounded w-full text-xs mb-4" :class="isActiveMin === 5 ? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">- Rp 500.000</button>
          <button @click="isActiveMin = 10; handle_decrement()" class="px-2 py-1 text-white rounded w-full text-xs" :class="isActiveMin === 10? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">- Rp 1.000.000</button>
          <button @click="$emit('mulaiTawar'); $emit('initData', [product.price_winner, harga, product.id]); " class="bg-tertier px-2 py-1 rounded text-white w-24 font-bold text-xs mt-4 mx-auto">Mulai Tawar</button>
        </div>
      </div>
    </div>
    </div>
  </div>
  
  
</template>
<style scoped>
.color-blue{
  background: rgba(93, 93, 239, 0.9);
}
</style>