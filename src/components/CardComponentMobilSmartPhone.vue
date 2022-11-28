<script setup lang="ts">
import image_star from '../assets/images/bintang.png';
import image_star_empty from '../assets/images/bintang_empty.png';
import image_hammer from '../assets/images/palu.png';
import image_users from '../assets/images/user.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import image_bulat from '../assets/images/bintang_pembatas.png';
import { onMounted, ref } from 'vue';
import { formatPrice, textCapitalize } from '../mixins';
import { useBursaStore } from '../stores/bursa';
import Bid from '../services/Bid';
import Echo from "laravel-echo";
import { useRoute } from 'vue-router'
const route = useRoute();
const store = useBursaStore();
const products = defineProps(['product','status'])
const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
const harga = ref(500000);
const isActive = ref(5);
const isActiveMin = ref(5);
const isTawar = ref('awal');

const handle_decrement = () => {
    if(harga.value <= 500000){

    }else{
      if(isActiveMin.value === 10 && harga.value !== 1000000){
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

  const lelang: any = ref({
  lelang_id: 0,
  price_offer: 0
})

  const bid = (val) => {
  lelang.value.lelang_id = val[1];
  lelang.value.price_offer = val[0];
  // console.log(lelang.value)
  Bid.postBidding(lelang.value).then((resp) => {

  })
}

// const price_winner = ref(0)
const countPeople = ref(0);
const countBidding = ref(0);
let splash_id = ref(0);
const showFavorite = ref(false);
onMounted(() => {
  // http.get(`https://admin.tavmobil.id/api/lelang/daftar-lelang/${products.product.id}`).then(res => {
  //   console.log(res)
  // })
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
      // console.log(e.bidding.price_winner);
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
  <div class="bg-white relative shadow-xl">
    <div class="flex border-b border-gray-300 py-1">
        <div class="w-1/3 flex items-center justify-center">
          <div class="flex justify-center z-10 relative">
            <img :src="product.car_detail.image_feature1" alt="car" class="w-24 h-24 cursor-pointer object-cover"
                  @click="$router.push(`/dashboard/detail/${product.id}`);" />
            <div :class="product.id == splash_id && product.Splash ? 'absolute top-0 z-50 color-blue h-full w-full':''">   
            </div>
          </div>    
        </div>
        <div class="w-2/3">
          <div class="flex justify-left items-center mt-1">
            <p class="text-[8px] bg-white text-black border border-blue-400">{{ product.code }}</p>
            <p class="text-[8px] bg-white text-black mx-1 border border-blue-400">TAV</p>
          </div>
          <div>
            <p class="text-lg font-bold truncate">{{product.car_detail.car_brand.name.toUpperCase()}} {{product.car_detail.car_merk.name.toUpperCase()}}
                    {{product.car_detail.car_type.name.toUpperCase()}}</p>
            <div class="text-xs flex items-center">
              <p>{{product.car_detail.transmisi}}</p> 
              <img :src="image_bulat" class="w-2 h-2 mx-1"/> 
              <p>{{formatPrice(product.car_detail.km_service_terakhir)}} KM</p>
            </div>
            <div class="text-xs truncate flex items-center"> 
              <p>{{product.car_detail.tahun}}</p> 
              <img :src="image_bulat" class="w-2 h-2 mx-1"/> 
              <p>{{ product.car_detail.kota ? textCapitalize(product.car_detail.kota) : ''}}</p> 
            </div>
            <div class="text-lg font-bold flex justify-between">
              <p>Rp {{ route.name === 'Riyawat' ? formatPrice(product.price_winner) : formatPrice(product.price_winner) }}</p>
              <div>
                    <img :src="showFavorite ? image_star : image_star_empty" alt="star"
                        class="w-6 h-6" @click="$emit('addFav', product.id)" />
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="flex shadow-lg bg-blue-300">
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_hammer" alt="hammer" class="w-6 h-6" />
        <div class="text-black mx-2 right-0 relative">{{ status === 'Berlangsung' ? product.countBidding : '-' }}</div>
      </div>
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_users" alt="users" class="w-8 h-6" />
        <div class="text-black mx-2">{{ status === 'Berlangsung' ? product.CountPeople : 0 }}</div>
      </div>
      <div class="flex items-center">
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_mobil" class="w-6 h-3 mr-2" v-if="product.car_detail.car_inspection.accident_free !=='1'"/>
                </div>
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_tergenang" class="w-6 h-3 mx-2" v-if="product.car_detail.car_inspection.flood_free !=='1'"/>
                </div>
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_api" class="w-6 h-3 ml-2" v-if="product.car_detail.car_inspection.fire_free !=='1'"/>
                </div>
      </div>
    </div>
    <div class="bg-white flex items-center p-2 justify-center" v-show="status === 'Berlangsung'">
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
</template>
<style scoped>
.color-blue{
  background: rgba(93, 93, 239, 0.9);
}
</style>

