<script setup lang="ts">
import image_star from '../assets/images/bintang.png';
import image_star_empty from '../assets/images/bintang_empty.png';
import image_hammer from '../assets/images/palu.png';
import image_users from '../assets/images/user.png';
import image_api from '../assets/images/icon_api.png';
import image_mobil from '../assets/images/icon_mobil.png';
import image_tergenang from '../assets/images/icon_tergenang.png';
import image_bulat from '../assets/images/bintang_pembatas.png';
import button_plus from '../assets/images/btn_plus.png';
import button_minus from '../assets/images/btn_minus.png';
import { ref } from 'vue';
import { formatPrice, textCapitalize } from '../mixins';
import { useBursaStore } from '../stores/bursa';
const store = useBursaStore();
const products = defineProps(['product','status'])

const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
const harga = ref(500000);
const isActive = ref(5);
const isTawar = ref('awal');

const handle_decrement = () => {
    if(harga.value <= 500000){

    }else{
      if(isActive.value === 10 && harga.value !== 1000000){
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
</script>
<template>
  <div class="bg-white relative shadow-xl">
    <div class="flex border-b border-gray-300 py-1">
        <div class="w-1/3 flex items-center justify-center">
          <div class="flex justify-center z-10">
            <img :src="product.car_detail.image_feature1" alt="car" class="w-24 h-24 cursor-pointer object-cover"
                  @click="$router.push(`/dashboard/detail/${product.id}`);" />
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
              <p>Rp {{ formatPrice(product.open_price) }}</p>
              <div>
                    <img :src="product.favorites.length > 0 ? image_star : image_star_empty" alt="star"
                        class="w-6 h-6" @click="$emit('addFav', product.id)" />
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="flex shadow-lg bg-blue-300">
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_hammer" alt="hammer" class="w-6 h-6" />
        <div class="text-black mx-2 right-0 relative">1000</div>
      </div>
      <div class="relative flex px-2 py-1 rounded items-center">
        <img :src="image_users" alt="users" class="w-6 h-6" />
        <div class="text-black mx-2">1000</div>
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
          </div>
      </div>
      <div class="flex justify-center w-1/2">
        <div class="flex flex-col">
          <p class="font-bold mb-4">Rp {{ new Intl.NumberFormat().format(harga) }}</p>
          <button @click="isTawar = 'konfirmasi'; harga=500000;" class="bg-tertier px-2 py-1 rounded text-white w-24 font-bold text-xs">Mulai Tawar</button>
        </div>
      </div>
      
    </div>
  </div>
  
</template>
