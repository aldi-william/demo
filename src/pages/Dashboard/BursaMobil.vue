<script setup lang="ts">
import { computed, ref, onMounted, reactive } from 'vue';
import image_rentang_harga from '../../assets/images/icon_rentang_harga.png';
import image_search from '../../assets/images/icon_search.png';
import image_calender from '../../assets/images/icon_calender.png';
import image_location from '../../assets/images/icon_location.png';
import image_filter from '../../assets/images/icon_filter.png';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { useBursaStore } from '../../stores/bursa';
import { formatdate, formatPrice, textCapitalize } from '../../mixins';
import VueNumberFormat from 'vue-number-format';
import GetFilterService from '../../services/GetService';
import { IDataKota } from '../../Interface/IDataKota';
import CardComponentMobil from '../../components/CardComponentMobil.vue';
import CardComponentMobilSmartPhone2 from '../../components/CardComponentMobilSmartPhone2.vue';

const range_harga = ref(false);
const range_tahun = ref(false);
const isFavorit = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
const items = ref(''); // untuk kilometer
const kilometer = ref<number>(0);
const closeAll = () => {
  range_harga.value = false;
  range_tahun.value = false;
  isShowKm.value = false;
  items.value = '';
};


// pinia
const store = useBursaStore();

const products:any = computed(() => {
  return store.data
})

const filterBursa = reactive({
  search: "",
  lowPrice: 0,
  heightPrice: 0,
  minYear: 0,
  maxYear: 0,
  city:'',
  km:0,
  page:1,
  currentPage:1,
  totalPage:1
})

function filterQuery() {
  store.filterBursa(filterBursa);
}

onMounted(() => {
  store.fetchBursa();
})

const dataKota = ref<IDataKota[]>([{
  id: 0,
  name: ''
}]);

let tanggal = ref('');
let session_end = ref();
let status = ref('');
let timeToCountdown = ref('');
let waiting = ref(false);
const isShowKm = ref(false);

const arrayKota = ref<string[]>([]);

const getDataKota = () => {
  GetFilterService.getFilter().then((response:any) => {
    dataKota.value = response.data.data;
    dataKota.value.map((item:any) => {
      var result = item.name.toLowerCase().replace('kabupaten', '');
      var capital = result.charAt(0).toUpperCase() + result.slice(1);
      arrayKota.value.push(capital);
    })
  }).catch((error:any) => {
    console.log(error)
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
timeToCountdown.value = hours + ":"
+ minutes + ":" + seconds
  
//Jika hitungan mundur selesai, tulis beberapa teks
if (distance < 0) {
  clearInterval(myfunc);
  location.reload();
  getDataSession();
}
}, 1000);

const ganti = (index) => {
  filterBursa.page = index;
  filterQuery();
}

const tahun = ref([2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990]);

getDataSession();
getDataKota();

const isShowStar = ref(false);
const favorite = (id:any) =>{
  store.addFavorite(id)
  .then(()=>{
    store.fetchBursa();
  })
}

const scrollToTop = () => {
    window.scrollTo(0,0);
}

const reset = () => {
  const filterBursa = reactive({
      search: "",
      lowPrice: 0,
      heightPrice: 0,
      minYear: 0,
      maxYear: 0,
      city:'',
      km:0,
      page:1,
      currentPage:1,
      totalPage:1
  })
}

</script>
<template>
  <div class="bg-biru_fb" @click.self="closeAll()">
    <div class="container-xl grid grid-cols-12 gap-2 sm:gap-2 relative -top-6 mb-0 sm:top-2" @click.self="closeAll()">
      <div class="col-span-12 bg-white flex-col fixed sm:top-20 left-0 top-12 z-20 w-full mx-auto"> 
            <p class="flex justify-center">
              <span class="text-blue-500 mr-2">Status :&nbsp;<span class="text-red-500">{{ status }}</span></span>
              <span class="text-blue-500">Sisa :&nbsp;<span class="text-red-500">{{waiting?'waiting...':timeToCountdown}}</span></span>
            </p>
            <div class="text-center text-xs">{{ tanggal }}</div>
      </div> 
      <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 relative bg-white top-12">
        <input type="text" v-model="filterBursa.search" @keyup="filterQuery"
          placeholder="Cari merek atau model mobil" class="pl-8 pr-4 py-2 w-full border-2 border-gray" />
        <img :src="image_search" alt="search" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end" />
      </div>
      <div class="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 relative bg-white top-12">
        <button class="pl-8 pr-4 py-2 w-full border-2 border-gray text-left" @click="range_harga = !range_harga">Range
          Harga</button>
        <img :src="image_rentang_harga" alt="rentang harga"
          class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end" />
        <div class="absolute border bg-white shadow-xl p-4 z-20" v-show="range_harga">
          <div>
            Harga Tertinggi
          </div>
          <div class="flex flex-row my-4">
            <div class="bg-biru rounded-l px-4 py-2 border border-black">Rp</div>
              <VueNumberFormat v-model:value="filterBursa.heightPrice" :options="{ precision: 0, decimal: ',', thousand: '.', prefix: '', isInteger: true }" class="px-4 py-2 border border-black"></VueNumberFormat>  
          </div>
          <div>
            Harga Terendah
          </div>
          <div class="flex flex-row my-4">
            <div class="bg-biru rounded-l px-4 py-2 border border-black">Rp</div>
              <VueNumberFormat v-model:value="filterBursa.lowPrice" :options="{ precision: 0, decimal: ',', thousand: '.', prefix: '', isInteger: true }" class="px-4 py-2 border border-black"></VueNumberFormat> 
          </div>
          <div class="flex justify-between">
            <button class="text-white bg-blue-500 px-4 py-2 w-32 mr-2 rounded" @click="filterBursa.heightPrice=0; filterBursa.lowPrice=0;">Reset</button>
            <button class="text-white bg-blue-500 px-4 py-2 w-32 ml-2 rounded" @click="filterQuery(); range_harga = false;">Terapkan</button>
          </div>
          
        </div>
      </div>
      <div class="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 relative bg-white top-12">
        <button placeholder="Tahun" class="pl-8 pr-4 py-2 w-full border-2 border-gray text-left"
          @click="range_tahun = !range_tahun">Range Tahun</button>
        <img :src="image_calender" alt="calendar" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end" />
        <div class="absolute border bg-white shadow-xl p-4 z-20 right-0" v-show="range_tahun">
          <div class="mb-2">
            Tahun
          </div>
          <div class="flex flex-row items-center justify-between shadow-xl">
            <div class="flex flex-col mb-4 w-20">
              <p>dari</p>
              <select v-model="filterBursa.minYear" @keyup="filterQuery()" class="px-1 py-2 border border-black rounded">
                <option value="0">Pilih</option>
                <option v-for="n in tahun" :value="n">{{n}}</option>
              </select>
            </div>
            <div class="text-center mx-4">-</div>
            <div class="flex flex-col mb-4 w-20">
              <p>hingga</p>
              <select v-model="filterBursa.maxYear" @keyup="filterQuery()" class="px-1 py-2 border border-black rounded">
                <option value="0">Pilih</option>
                <option v-for="n in tahun" :value="n">{{n}}</option>
              </select>
            </div>
          </div>
          <div class="flex justify-between">
            <button class="text-white bg-blue-500 px-4 py-2 mr-1 w-24 rounded" @click="filterBursa.minYear=0; filterBursa.maxYear=0; filterQuery();">Reset</button>
            <button class="text-white bg-blue-500 px-4 py-2 ml-1 w-24 rounded" @click="filterQuery(); range_tahun = false; filterBursa.minYear = 0; filterBursa.maxYear =0;">Terapkan</button>
          </div>
          
        </div>
      </div>
      <div class="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 relative top-12">
        <!-- <select placeholder="Kota" class="">
          <option value="1">Semarang</option>
        </select> -->
        <v-select placeholder="   Lokasi"   :options="arrayKota" label="name" class="bg-white px-2 py-1 outline:none" v-model="filterBursa.city" @update:modelValue="filterQuery" @change="filterQuery"></v-select>
        <img :src="image_location" alt="location" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end" />
      </div>
      <!-- <div class="col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2 relative top-12">
        <button @click="isShowKm = !isShowKm" class="pl-8 pr-4 py-2 w-full border-2 border-gray bg-white text-left">
          <span v-if="filterBursa.km === 0">Kilometer</span>
          <span v-else>{{ formatPrice(filterBursa.km * 10000) }}</span>
        </button>
        <img :src="image_filter" alt="location" class="w-4 h-4 absolute left-2 top-3 flex items-center justify-end" />
        <div v-if="isShowKm" class="border bg-white p-4 absolute z-20">
          <h1>Kilometer</h1>
          <input type="range" min="0" max="10" v-model="filterBursa.km">
          Kurang Dari {{ formatPrice(filterBursa.km * 10000) }} km
          <button class="border bg-blue-500 text-white px-4 py-2 rounded w-full" @click="filterQuery(); isShowKm = false;">Terapkan</button>
        </div>
      </div> -->
      <div class="mx-2 grid grid-cols-12 col-span-12 gap-2">
        <div v-for="(product,i) in products" :key="i+'products'"
        class="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 z-10 bg-white top-12 relative">
        <CardComponentMobil :product="product" @add-fav="favorite" class="hidden sm:block" :status="status"/>
        <CardComponentMobilSmartPhone2 :product="product" @add-fav="favorite" class="block sm:hidden" :status="status"/>      
       </div>
      </div>
      

      <div v-if="products.length < 1" class="col-span-12 relative top-12">
        data belum ada
      </div>
      <div class="col-span-12 mb-24 mt-4 relative top-12">
        <div class="flex flex-row justify-center">
          <!-- <button @click="decrement()" class="px-4 py-2 rounded border border-gray cursor-pointer bg-white hidden sm:flex">Sebelumnya</button> -->
          <div :class="i === filterBursa.page ? 'bg-yellow-500 text-white':''" class="px-4 py-2 rounded border border-gray hover:bg-blue-500 hover:text-white cursor-pointer bg-white"
            v-for="i in store.totalPage" :key="i" @click="ganti(i); scrollToTop();">{{ i }}</div>
          <!-- <button @click="increment()" class="px-4 py-2 rounded border border-gray cursor-pointer bg-white hidden sm:flex">Selanjutnya</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container-xl {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>