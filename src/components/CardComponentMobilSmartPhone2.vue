<script setup lang="ts">
import image_star from '../assets/images/bintang.png';
import image_star_empty from '../assets/images/bintang_empty.png';
import image_hammer from '../assets/images/palu.png';
import image_users from '../assets/images/user.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import image_bulat from '../assets/images/bintang_pembatas.png';
import { formatPrice, textCapitalize } from '../mixins';
import { useBursaStore } from '../stores/bursa';
import { ref, onMounted } from 'vue';
import Bid from '../services/Bid';
import Echo from "laravel-echo";
const store = useBursaStore();
const products = defineProps(['product','status'])



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
        products.product.countPeople.value = e.bidding.CountPeople
        products.product.countBidding.value = e.bidding.countBidding
      }
    });
})
</script>
<template>
  <div class="container-xl rounded-[3px]">
    <div class="bg-white h-full">
      <div>
            <div class="flex justify-center relative"> 
              <img :src="product.car_detail.image_feature1" alt="car" class="w-full h-40 z-10 cursor-pointer object-cover"
                @click="$router.push(`/dashboard/detail/${product.id}`);" />
                <div class="mx-1 absolute z-20 top-2 left-2 rounded-full flex justify-center items-center">
                  <img :src="product.favorites.length > 0 ? image_star : image_star_empty" alt="star" class="w-8 h-8" @click="$emit('addFav', product.id)" />
                </div>
            </div>
      </div>
      <div class="flex justify-between items-center mt-1">
          <div class="flex">
            <p class="text-[8px] px-[2px] py-[1px] bg-white text-black rounded-[2px] border border-blue-500">{{ product.code }}</p>
            <p class="text-[8px] px-[2px] py-[1px] bg-white text-black rounded-[2px] border border-blue-500 mx-2">TAV</p>    
          </div>
          <div class="flex items-center justify-end">
                  <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                    <img :src="image_mobil" class="w-[14px] h-[10px]" v-if="product.car_detail.car_inspection.accident_free !=='1'"/>
                  </div>
                  <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                    <img :src="image_tergenang" class="w-3 h-3 mx-1" v-if="product.car_detail.car_inspection.flood_free !=='1'"/>
                  </div>
                  <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                    <img :src="image_api" class="w-3 h-3" v-if="product.car_detail.car_inspection.fire_free !=='1'"/>
                  </div>
            </div>
      </div>
      <div>
          <p class="text-[10px] font-bold truncate">{{product.car_detail.car_brand.name.toUpperCase()}} {{product.car_detail.car_merk.name.toUpperCase()}}
                  {{product.car_detail.car_type.name.toUpperCase()}}</p>
          
          <div class="flex items-center">
              <p class="text-xs">{{product.car_detail.transmisi}}</p> 
              <img :src="image_bulat" class="w-2 h-2 mx-1"/> 
              <p class="text-xs">{{formatPrice(product.car_detail.km_service_terakhir)}} KM </p>
          </div>        
          <div class="flex items-center">
            <p class="text-xs">{{product.car_detail.tahun}}</p> 
            <img :src="image_bulat" class="w-2 h-2 mx-1"/> 
            <span class="text-xs truncate">{{ product.car_detail.kota ? textCapitalize(product.car_detail.kota) : ''}}</span> 
          </div>
          <p class="text-[12px] font-bold">Rp {{ formatPrice(product.open_price) }}</p>
      </div>
    </div>
    <div class="flex border-t border-gray-300 bg-blue-300 items-end rounded-b-[3px]">
        <div class="relative flex px-2 py-1 rounded items-center">
          <img :src="image_hammer" alt="hammer" class="w-4 h-4" />
          <div class="text-black mx-2 right-0 relative text-xs">{{ status === "Berlangsung" ? products.product.countBidding : '-'}}</div>
        </div>
        <div class="relative flex px-2 py-1 rounded items-center">
          <img :src="image_users" alt="users" class="w-6 h-4" />
          <div class="text-black mx-2 text-xs">{{ status === "Berlangsung" ? products.product.countPeople : '-'}}</div>
        </div>
    </div>
  </div>
</template>
<style>
.container-xl{
  width: 96%;
}
</style>