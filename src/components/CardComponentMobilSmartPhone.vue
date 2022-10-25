<script setup lang="ts">
import image_star from '../assets/images/star.png';
import image_star_empty from '../assets/images/star_empty.png';
import image_hammer from '../assets/images/palu.png';
import image_users from '../assets/images/user.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import { ref } from 'vue';
import { formatPrice, textCapitalize } from '../mixins';
import { useBursaStore } from '../stores/bursa';
const store = useBursaStore();
const products = defineProps(['product'])
const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

</script>
<template>
  <div class="bg-white h-full">
    <div class="flex border-b border-gray-300 mt-2 p-2">
    <div class="w-1/3"> 
      <img :src="product.car_detail.image_feature1" alt="car" class="w-full h-20 z-10 cursor-pointer"
              @click="$router.push(`/dashboard/detail/${product.id}`);" />
    </div>
    <div class="w-2/3 ml-2">
      <div class="flex justify-start items-center">
        <p class="text-xs px-2 py-1 bg-blue-500 text-white rounded-lg">{{ product.code }}</p>
        <p class="text-xs px-2 py-1 bg-blue-500 text-white rounded-lg mx-2">TAV</p>
        <div>
          <img :src="product.favorites.length > 0 ? image_star : image_star_empty" alt="star"
              class="w-4 h-4" @click="$emit('addFav', product.id)" />
        </div>
      </div>
      <div>
        <p class="text-xs font-bold">{{product.car_detail.car_brand.name}} {{product.car_detail.car_merk.name}}
                {{product.car_detail.car_type.name}}</p>
        <p class="text-xs">{{product.car_detail.transmisi}} {{product.car_detail.tahun}}</p>
        <p class="text-xs">{{formatPrice(product.car_detail.km_service_terakhir)}} KM | {{ product.car_detail.kota ? textCapitalize(product.car_detail.kota) : ''}} </p>
        <p class="text-lg">Rp. {{ formatPrice(product.open_price) }}</p>
      </div>
    </div>
    </div>
    <div class="flex shadow-lg">
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_hammer" alt="hammer" class="w-6 h-6" />
        <div class="text-abu_abu mx-2 right-0 relative">1000</div>
      </div>
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_users" alt="users" class="w-6 h-6" />
        <div class="text-abu_abu mx-2">1000</div>
      </div>
      <div class="flex items-center">
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_mobil" class="w-6 h-3" v-if="product.car_detail.car_inspection.accident_free !=='1'"/>
                </div>
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_tergenang" class="w-6 h-3 mx-4" v-if="product.car_detail.car_inspection.flood_free !=='1'"/>
                </div>
                <div v-if="product.car_detail.car_inspection" v-tippy="{ content: 'Kecelakaan ringan' }">
                  <img :src="image_api" class="w-6 h-3" v-if="product.car_detail.car_inspection.fire_free !=='1'"/>
                </div>
      </div>
    </div>
  </div>
  
</template>