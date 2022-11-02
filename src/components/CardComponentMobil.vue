<script setup lang="ts">
import image_car from '../assets/images/car.png';
import image_hammer from '../assets/images/hammer.png';
import image_users from '../assets/images/users.png';
import image_lonceng from '../assets/images/lonceng.png';
import image_star from '../assets/images/bintang.png';
import image_star_empty from '../assets/images/bintang_empty.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import button_plus from '../assets/images/btn_plus.png';
import button_minus from '../assets/images/btn_minus.png';
import gif from '../assets/images/svg/200.gif';
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { formatPrice, textCapitalize } from '../mixins';
import http from '../../src/api/http-common'
// import { useBursaStore } from '../stores/bursa';
import { useFavoriteStore } from '../stores/favoit';
import Bid from '../services/Bid';
import Echo from "laravel-echo";
// eslint-disable-next-line no-unused-vars
import Pusher from "pusher-js";
import axios from 'axios';
const route = useRoute();
const products = defineProps(['product', 'isShow', 'status'])
const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
// const storeBursa = useBursaStore();
const harga = ref(500000);
const isActive = ref(5);
const isTawar = ref('awal');

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

const lelang_id = ref(0);
const price_offer = ref(0);
const lelang: any = ref({
  lelang_id: 0,
  price_offer: 0
})

const bid = (val) => {
  lelang.value.lelang_id = val[1];
  lelang.value.price_offer = val[0];
  console.log(lelang.value)
  Bid.postBidding(lelang.value).then((resp) => {

  })
}

// const price_winner = ref(0)

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
      // console.log(e.bidding.price_winner);
      if (products.product.id == e.bidding.id) {
        products.product.price_winner = e.bidding.price_winner
      }
    });
})

</script>
<template>
  <div class="rounded shadow-2xl p-4 h-full">
    <div class="relative overflow-hidden">
      <div class="absolute bg-blue-500 rounded text-white top-3 left-3 px-2">{{ product.code }}</div>
      <!-- <div class="bg-red-600 absolute bottom-0 right-0 px-4 py-0 rounded-tl-full text-white flex items-start">
              Berlangsung
            </div> -->
      <img :src="product.car_detail.image_feature1" alt="car" class="w-full h-64 z-10 cursor-pointer object-cover"
        @click="$router.push(`/dashboard/detail/${product.id}`);" />
    </div>
    <div class="grid grid-cols-12 my-2 gap-2">
      <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
        <img :src="image_hammer" alt="hammer" class="w-6 h-6" />
        <div class="text-white mx-2 right-0 relative">1000</div>
      </div>
      <div class="col-span-4 bg-abu_abu relative flex px-2 py-1 rounded items-center">
        <img :src="image_users" alt="users" class="w-6 h-6" />
        <div class="text-white mx-2">1000</div>
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
        <img :src="product.favorites.length > 0 ? image_star : image_star_empty" alt="star"
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
        <h1 v-if="route.name === 'BursaMobil'">Harga Mulai :</h1>
        <h1 v-else>Penawaran Terbaru :</h1>
        <!-- <div>{{ price_winner }}</div> -->
        <h1 class="text-2xl font-bold">Rp {{ formatPrice(product.price_winner) }}</h1>
      </div>
      <div>
        <button @click="$router.push(`/dashboard/detail/${product.id}`);"
          class="bg-tertier px-4 py-2 shadow-xl text-sm hover:bg-blue-500 hover:text-white">Lihat</button>
      </div>
    </div>
    <div class="border border-gray-400 p-2 rounded-lg" v-show="route.name === 'Favorit' && status === 'Berlangsung'">
      <div class="flex flex-row justify-center">
        <button><img :src="button_minus" class="h-8 w-8" @click="handle_decrement()" /></button>
        <p class="font-bold text-xl mx-4">Rp {{ new Intl.NumberFormat().format(harga) }}</p>
        <button><img :src="button_plus" class="h-8 w-8" @click="handle_increment()" /></button>
      </div>
      <div class="flex justify-around my-1">
        <button @click="isActive = 5" class="px-2 py-1 text-white rounded-lg w-1/3 text-xs"
          :class="isActive === 5 ? 'bg-blue-500 border border-gray-500' : 'bg-abu_abu_pucat text-gray-400'">Rp
          500.000</button>
        <button @click="isActive = 10" class="px-2 py-1 text-white rounded-lg w-1/3 text-xs"
          :class="isActive === 10 ? 'bg-blue-500 border border-gray-500' : 'bg-abu_abu_pucat text-gray-400'">Rp
          1.000.000</button>
      </div>
      <div class="flex justify-center pb-2">
        <button @click="isTawar = 'konfirmasi'; bid([harga, product.id])"
          class="bg-tertier px-2 py-1 rounded-xl text-black border border-black w-32 font-bold">Mulai Tawar</button>
      </div>
    </div>
  </div>
</template>