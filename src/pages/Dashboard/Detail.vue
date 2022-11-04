<script setup lang="ts">
    import { ref, reactive, onMounted } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import ModalComponent from '../../components/ModalComponent.vue';

    // Import Swiper styles
    import 'swiper/css';

    import "swiper/css/free-mode"
    import "swiper/css/navigation"
    import "swiper/css/thumbs"
    // import required modules
    import {FreeMode,Navigation,Thumbs} from 'swiper';

    import image_arrow from '../../assets/images/left_arrow.png';
    import image_arrow_down from '../../assets/images/arrow_down.png';
    import image_car from '../../assets/images/car.png';
    import image_star from '../../assets/images/bintang.png';
    import image_person from '../../assets/images/person.png';
    import image_mobil_biru from '../../assets/images/mobil_biru.png';
    import image_mobil_putih from '../../assets/images/mobil_putih.png';
    import image_sofa_biru from '../../assets/images/sofa_biru.png';
    import image_sofa_putih from '../../assets/images/sofa_putih.png';
    import image_spedo_biru from '../../assets/images/spedo_biru.png';
    import image_spedo_putih from '../../assets/images/spedo_putih.png';
    import image_tank_biru from '../../assets/images/tank_biru.png';
    import image_tank_putih from '../../assets/images/tank_putih.png';
    import image_teko_biru from '../../assets/images/teko_biru.png';
    import image_teko_putih from '../../assets/images/teko_putih.png';
    import image_terompet_biru from '../../assets/images/terompet_biru.png';
    import image_terompet_putih from '../../assets/images/terompet_putih.png';
    import image_tri_speedo_biru from '../../assets/images/tri_speedo_biru.png';
    import image_tri_speedo_putih from '../../assets/images/tri_speedo_putih.png';
    import image_buku_biru from '../../assets/images/buku_biru.png';
    import image_buku_putih from '../../assets/images/buku_putih.png';
    import image_bintang_biru from '../../assets/images/bintang_biru.png';
    import image_bintang_putih from '../../assets/images/bintang_putih.png';
    import image_gear_biru from '../../assets/images/gear_biru.png';
    import image_gear_putih from '../../assets/images/gear_putih.png';
    import image_checklist_merah from '../../assets/images/danger.png';
    import image_checklist_kuning from '../../assets/images/warning.png';
    import image_checklist_hijau from '../../assets/images/checklist_hijau.png';
    import image_ban_biru from '../../assets/images/ban_biru.png';
    import image_ban_putih from '../../assets/images/ban_putih.png';
    import image_body_biru from '../../assets/images/body_biru.png';
    import image_body_putih from '../../assets/images/body_putih.png';
    import image_kelengkapan_biru from '../../assets/images/kelengkapan_biru.png';
    import image_kelengkapan_putih from '../../assets/images/kelengkapan_putih.png';
    import image_info_biru from '../../assets/images/info_biru.png';
    import image_setir from '../../assets/images/setir.png';
    import image_star_empty from '../../assets/images/bintang_empty.png';
    import GetFilterService from '../../services/GetService';
    import GetService from '../../services/GetService';
    import { useRoute } from 'vue-router';
    import { useBursaStore } from '../../stores/bursa';
    import { formatPrice } from '../../mixins';
    import Echo from "laravel-echo";
    import Bid from '../../services/Bid';
    
    const route = useRoute();
    // pinia
    const store = useBursaStore();
    const params = route.params.id as string;
 
    const modules = [FreeMode, Navigation, Thumbs];
    const historyback = () => {
         window.history.back();
    }
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper:any) => {
      thumbsSwiper.value = swiper;
    }

    const modal = ref(false);
    const showModal = () => {
      modal.value = true;
    }

    const menu = ref('testdrive');
    const count = ref(0);
    const priceWinner = ref(0);
    let detailInspection:any = ref([{
      car_detail:{
        transmisi:'',
        kepemilikan:'',
        bahan_bakar:'',
        pajak_berlaku:'',
        warna_eksterior:'',
        odometer:0,
        warna_interior:'',
        kota:'',
        car_brand:{
          name: ''
        },
        car_merk:{
          name:''
        },
        car_type:{
          name:''
        },
        harga_cash: 0,
        image_cars:[]
      },
      favorites: []
    }])

    let image_cars:any = ref([]);
    

    const testdrive:any = ref([]);
    const dashboard:any = ref([]);
    const instrumen:any = ref([]);
    const jok_trim:any = ref([]);
    const kaca_lampu:any = ref([]);
    const underbody:any = ref([]);
    const oli_cairan:any = ref([]);
    const ruangmesin:any = ref([]);
    const fitur:any = ref([]);
    const dokumen:any = ref([]);
    const ban:any = ref([]);
    const body:any = ref([]);
    const kelengkapan:any = ref([]);

    let status = ref('');
    let tanggal = ref('');
    let session_end = ref('');
    let hours = ref('');
    let minutes = ref('');
    let seconds = ref('');
    let millisecondHours = ref(0);
    let millisecondMinutes = ref(0);
    let millisecondSeconds = ref(0);
    let totalmilliseconds = ref(0);
    let timeToCountdown = ref('');

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

const getDetailData = () => {
   GetService.getDetailData(params).then((response:any) => {
      
      priceWinner.value = response.data.data.detail.price_winner;
      detailInspection.value = response.data.data.detail;
      count.value = detailInspection.value.favorites.length;
      image_cars.value = response.data.data.image_car;
      testdrive.value = response.data.data.test_drive;
      dashboard.value = response.data.data.dashboard;
      instrumen.value = response.data.data.instrumen;
      jok_trim.value = response.data.data.jok_trim;
      kaca_lampu.value = response.data.data.kaca_lampu;
      underbody.value = response.data.data.under_body;
      oli_cairan.value = response.data.data.oli_cairan;
      ruangmesin.value = response.data.data.ruang_mesin;
      fitur.value = response.data.data.fiture;
      dokumen.value = response.data.data.dokumen;
      ban.value = response.data.data.ban;

      body.value = response.data.data.body;
      kelengkapan.value = response.data.data.kelengkapan;

   }).catch((error:any) => {
      console.log(error)
   })
}

const visibleRef = ref(false)
const visibleShowInspect = ref(false)
const indexRef = ref(0)
const indexRefInspect = ref(0) 
const imgsRef:any = ref([])
const imgsRefInspect:any = ref([])
const harga = ref(500000);
const isActive = ref(5);
const isTawar = ref('awal');
const onHide = () => (visibleRef.value = false)
const onShow = () => {
      visibleRef.value = true
}
const showImg = (index:number, image:any) => {
      // image_cars.value.map((items) => {
      //   imgsRef.value.push(items.image)
      // })
      image.map((items) => {
        imgsRef.value.push(items.image)
      })
      indexRef.value = index;
      onShow()
}

const handle_increment = () => { 
      if(isActive.value === 5){
         harga.value += 500000;
      }else{
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

onMounted(() => {
  // http.get(`https://admin.tavmobil.id/api/lelang/daftar-lelang/${products.product.id}`).then(res => {
  //   console.log(res)
  // })
  store.fetchBursa();
  getDetailData();
  let echo: any = new Echo({
    broadcaster: "pusher",
    key: "a19e68e554721cca39a0",
    forceTLS: true,
    cluster: "ap1",
  });

  echo.channel('bidding')
    .listen('BiddingEvent', (e) => {
      priceWinner.value = e.bidding.price_winner
    });
})

const favorite = (id:any) =>{
  store.addFavorite(id)
  .then(()=>{
    store.fetchBursa();
  })
  getDetailData()
}

getDataSession();
// getDetailData();
</script>
<template>
  <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  
  <div class="bg-biru_fb h-screen">
    <div class="container-xl pb-20">
      <div class="col-span-12 bg-white flex-col fixed sm:top-20 left-0 top-12 z-20 w-full mx-auto"> 
            <p class="flex justify-center">
              <span class="text-blue-500 mr-2">Status :&nbsp;<span class="text-red-500">{{ status }}</span></span>
              <span class="text-blue-500">Sisa :&nbsp;<span class="text-red-500">{{timeToCountdown}}</span></span>
            </p>
            <div class="text-center text-xs">{{ tanggal }}</div>
      </div>
       
       <ModalComponent v-show="modal" @close="modal = false"/>

       <div class="flex items-center cursor-pointer my-1 mt-4 relative sm:top-10" @click="historyback">
          <img :src="image_arrow" class="w-4 h-4"/>
          <p class="mx-2">Kembali</p>
       </div>
       
       <div class="grid grid-cols-12 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8 relative sm:top-10">
        <div class="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7">
          <swiper
            style="
              --swiper-navigation-color: #fff;
              --swiper-pagination-color: #fff;
            "
            :loop="true"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2 rounded-xl">
            <swiper-slide v-for="(item, index) in image_cars" :key="index+'image_car'">
              <img :src="item.image" @click="showImg(index, image_cars)" class="cursor-pointer">
            </swiper-slide>

          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="6"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
          <swiper-slide v-for="(item, index) in image_cars" :key="index+'image_car'">
            <img :src="item.image">
          </swiper-slide>
          
          </swiper>
        </div>


        <div class="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 relative -top-12 sm:top-0">
             <div class="font-bold py-1 bg-white p-4">
               {{ detailInspection.car_detail ? detailInspection.car_detail.car_brand.name : '' }} {{ detailInspection.car_detail ? detailInspection.car_detail.car_merk.name: '' }} {{ detailInspection.car_detail ? detailInspection.car_detail.car_type.name : '' }}
             </div>
             <div class="bg-white p-4 grid grid-cols-12">
              <div class="col-span-6">
                <p>Harga penawaran :</p>
                <p class="font-bold">Rp {{ detailInspection.car_detail ? formatPrice(priceWinner) : 0}}</p>
              </div>
              <div class="col-span-4">
                <div>Tahun :</div>
                <div class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.tahun : 0}}</div>
              </div>
              <div class="col-span-2">
                <img :src="count > 0 ? image_star : image_star_empty" alt="star" class="w-8 h-8 cursor-pointer" @click="favorite(detailInspection.id)" />
              </div>     
             </div>
             <div class="grid grid-cols-12 rounded-lg p-4 border-gray border-2 my-4 bg-white">
                <div class="col-span-6 my-1">
                  <p>Lokasi</p>
                  <p class="font-bold text-xs">{{ detailInspection.car_detail ? detailInspection.car_detail.kota : '' }} </p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Warna Exterior</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.warna_eksterior : '' }}</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Jarak tempuh</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? formatPrice(detailInspection.car_detail.odometer) : 0 }} KM</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Warna Interior</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.warna_interior : '' }}</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Bahan Bakar</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.bahan_bakar : '' }}</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Pajak Berlaku</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.pajak_berlaku : '' }}</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Transmisi</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.transmisi : '' }}</p>
                </div>
                <div class="col-span-6 my-1">
                  <p>Kepemilikan</p>
                  <p class="font-bold">{{ detailInspection.car_detail ? detailInspection.car_detail.kepemilikan : '' }}</p>
                </div>
                
             </div>
             <div class="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5 border-2 border-gray px-4 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 bg-gray-200 rounded-lg">
            <div class="flex items-center p-2 justify-center" v-show="status === 'Berlangsung'">
                  <div class="flex justify-center w-1/2">
                      <div class="flex flex-col w-9/12">
                      <button @click="isActive = 5; handle_increment()" class="px-2 py-1 text-white rounded w-full text-xl mb-1" :class="isActive === 5 ? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">+ Rp 500.000</button>
                      <button @click="isActive = 10; handle_increment()" class="px-2 py-1 text-white rounded w-full text-xl" :class="isActive === 10? 'text-black border border-black':'bg-abu_abu_pucat text-gray-400'">+ Rp 1.000.000</button>
                      </div>
                  </div>
                  <div class="flex justify-center w-1/2">
                    <div class="flex flex-col">
                      <p class="font-bold text-xl mb-1">Rp {{ new Intl.NumberFormat().format(harga) }}</p>
                      <button @click="isTawar = 'konfirmasi'; bid([harga, detailInspection.id])" class="bg-tertier px-4 py-2 rounded text-white w-40 font-bold text-sm">Mulai Tawar</button>
                    </div>
                  </div>
        
            </div>
        </div>
        </div>
        
        <!-- <div class="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7 mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 relative -top-12 sm:top-0">
            <div class="font-bold px-4 py-2 bg-white rounded-lg mb-4">History Arus Lelang</div>
            <div class="grid grid-cols-12 bg-white rounded-lg px-4 py-2 overflow-y-auto h-40">
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>                   
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>                   
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>                   
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>                   
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>                   
                  </div>
              </div>
            </div>
        </div> -->
        <div class="col-span-12 relative -top-12 sm:top-0">
          <div class="text-xl sm:text-3xl font-bold flex flex-col sm:flex-row items-center justify-between">
          <div class="flex items-center">
              <span class="">Detail Laporan Kendaraan</span>
              <img :src="image_info_biru" class="mx-2 w-6 h-6"/>
          </div> 
          <div class="flex mt-4 sm:mt-0">
            <div class="flex items-center">
              <img :src="image_checklist_hijau" class="w-6 h-6 mx-4"/>
              <span class="text-sm sm:text-xl">Oke</span>
            </div>
            <div class="flex items-center">
              <img :src="image_checklist_kuning" class="w-6 h-6 mx-4"/>
              <span class="text-sm sm:text-xl">Perlu diperhatikan</span>
            </div>
            <div class="flex items-center">
              <img :src="image_checklist_merah" class="w-6 h-6 mx-4"/>
              <span class="text-sm sm:text-xl">Tidak tersedia</span>
            </div>
          </div>
          </div>

          <div class="grid grid-cols-12 sm:flex md:flex lg:flex xl:flex 2xl:flex sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
            <div class="col-span-12 bg-blue-500 mt-6 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12 p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg sm:h-full w-full sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12">
              <div class="flex sm:flex-col overflow-x-scroll sm:w-full sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible 2xl:overflow-visible">
              
                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'testdrive'" :class="menu === 'testdrive' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2  rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'testdrive' ? image_mobil_biru : image_mobil_putih" class="w-6 mx-2"/>Test Drive({{testdrive.length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'dashboard'" :class="menu === 'dashboard'? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2  rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'dashboard' ? image_spedo_biru: image_spedo_putih " class="w-6 mx-2" />Dashboard({{Object.keys(dashboard).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'instrumen'" :class="menu === 'instrumen' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2  rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'instrumen' ? image_tri_speedo_biru: image_tri_speedo_putih" class="w-6 mx-2" />Instrumen({{Object.keys(instrumen).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'jok-trim'" :class="menu === 'jok-trim' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'jok-trim' ? image_sofa_biru : image_sofa_putih" class="w-6 mx-2" />Jok & Trim({{Object.keys(jok_trim).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'kaca-lampu'" :class="menu === 'kaca-lampu' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'kaca-lampu' ? image_terompet_biru : image_terompet_putih " class="w-6 mx-2" />Kaca & Lampu({{Object.keys(kaca_lampu).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'underbody'" :class="menu === 'underbody' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'underbody' ? image_tank_biru : image_tank_putih" class="w-6 mx-2" />Under Body({{Object.keys(underbody).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'oli-cairan'" :class="menu === 'oli-cairan' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'oli-cairan' ? image_teko_biru : image_teko_putih" class="w-6 mx-2" />Oli & Cairan({{Object.keys(oli_cairan).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'ruangmesin'" :class="menu === 'ruangmesin' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'ruangmesin' ? image_gear_biru : image_gear_putih " class="w-6 mx-2" />Ruang Mesin({{Object.keys(ruangmesin).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'fitur'" :class="menu === 'fitur' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'fitur' ? image_bintang_biru : image_bintang_putih " class="w-6 mx-2" />Fitur({{Object.keys(fitur).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'dokumen'" :class="menu === 'dokumen' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'dokumen' ? image_buku_biru : image_buku_putih " class="w-6 mx-2" />Dokumen({{Object.keys(dokumen).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'ban'" :class="menu === 'ban' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'ban' ? image_ban_biru : image_ban_putih " class="w-6 mx-2" />Ban({{Object.keys(ban).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'body'" :class="menu === 'body' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'body' ? image_body_biru : image_body_putih " class="w-6 mx-2" />Body({{Object.keys(body).length-1}})
                  </button>
                </div>

                <div class="w-full sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
                  <button @click="menu = 'kelengkapan'" :class="menu === 'kelengkapan' ? 'text-blue-500 bg-white':'text-white bg-blue-500'" class="w-48 px-4 py-2 rounded-lg mb-4 text-sm font-bold flex items-center justify-start">
                    <img :src="menu === 'kelengkapan' ? image_kelengkapan_biru : image_kelengkapan_putih " class="w-6 mx-2" />Kelengkapan({{Object.keys(kelengkapan).length-1}})
                  </button>
                </div>

              </div>
       
            </div>
            <div v-if="menu === 'testdrive'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" @click="items.open = !items.open" v-for="(items, index) in testdrive" :key="index+'testdrive'">
                <div v-if="items.name !== 'catatan_test_drive'">
                    <div class="flex flex-row justify-between">
                      <div class="flex items-center">
                        <h1 class="font-bold text-md" >{{ items.name }}</h1>
                        <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                      </div>
                      <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                    </div>
                    <div class="flex justify-around my-4" v-show="items.value === 2 && items.open"><img :src="image_setir" class="w-40"/></div>
                    <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>
                
              <div>
                Catatan Test Drive : {{ testdrive[testdrive.length-1] ? testdrive[testdrive.length-1].value:'-' }}
              </div>
            </div>
            <div v-if="menu === 'dashboard'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in dashboard" :key="index+'dashboard'">
                <div v-if="items.name !== 'catatan_dashboard'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>
 
              <div>
                Catatan Dashboard : {{ dashboard[dashboard.length-1] ? dashboard[dashboard.length-1].value : 0 }}
              </div>

            </div>
            <div v-if="menu === 'instrumen'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in instrumen" :key="index+'jok_trim'">
                <div v-if="items.name !== 'catatan_instrumen'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>



              <div>Catatan Instrumen : {{ instrumen[instrumen.length-1].value }}</div>
                
            </div>
            <div v-if="menu === 'jok-trim'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in jok_trim" :key="index+'jok_trim'">
                <div v-if="items.name !== 'catatan_jok_trim'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                    
                    <!-- <div>qkwjelkqwjekqwjelkqjlkejqlwkejlqwkejlqkwjelqkwjelkqwjelkqjwlekqjwlekqjwlekjqw</div> -->
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Jok & Trim : {{ jok_trim[jok_trim.length-1].value }}</div>
                
            </div>
            <div v-if="menu === 'kaca-lampu'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in kaca_lampu" :key="index+'kaca_lampu'">
                <div v-if="items.name !== 'catatan_kaca_lampu'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Kaca & Lampu: {{ kaca_lampu[kaca_lampu.length-1].value }}</div>

            </div>
            <div v-if="menu === 'underbody'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in underbody" :key="index+'under_body'">
                <div v-if="items.name !== 'catatan_under_body'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Underbody : {{ underbody[underbody.length-1].value }}  </div>

            </div>
            <div v-if="menu === 'oli-cairan'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in oli_cairan" :key="index+'oli_cairan'">
                <div v-if="items.name !== 'catatan_oli_cairan'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Oli & Cairan : {{ oli_cairan.catatan_oli_cairan }}</div>

            </div>
            <div v-if="menu === 'ruangmesin'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">
              
              <div class="mb-4 cursor-pointer" v-for="(items, index) in ruangmesin" :key="index+'ruang_mesin'">
                <div v-if="items.name !== 'catatan_ruang_mesin'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Oli & Cairan : {{ruangmesin.catatan_ruang_mesin}}</div>

            </div>
            <div v-if="menu === 'fitur'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in fitur" :key="index+'fitur'">
                <div v-if="items.name !== 'catatan_fitur'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Fitur : {{ fitur[fitur.length-1].value }}</div>

            </div>
            <div v-if="menu === 'dokumen'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in dokumen" :key="index+'dokumen'">
                <div v-if="items.name !== 'catatan_dokumen'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Dokumen : {{ dokumen[dokumen.length-1].value }}</div>

            </div>
            <div v-if="menu === 'ban'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">
              <table width="100%">
                <thead>
                  <tr class="bg-blue-500 text-white">
                    <th class="w-1/2 rounded-tl">Posisi Ban</th>
                    <th class="w-1/4">Tipe Velg</th>
                    <th class="w-1/4 rounded-tr">Ketebalan Ban</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(items, index) in ban" :key="index+'ban'" class="border border-black text-center">
                    <td class="w-1/2 border border-black">{{ items.name }}</td>
                    <td class="w-1/4 border border-black">{{ items.value }} </td>
                    <td class="w-1/4 border border-black">
                      <img :src="items.ketebalan === 2 ? image_checklist_kuning: (items.ketebalan === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2 mx-auto"/>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div v-if="menu === 'body'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in body" :key="index+'body'">
                <div v-if="items.name !== 'catatan_body'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Dokumen : {{ dokumen[dokumen.length-1].value }}</div>

            </div>
            <div v-if="menu === 'kelengkapan'" class="col-span-12 my-12 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full bg-white p-4">

              <div class="mb-4 cursor-pointer" v-for="(items, index) in kelengkapan" :key="index+'kelengkapan'">
                <div v-if="items.name !== 'catatan_kelengkapan'">
                  <div class="flex flex-row justify-between">
                  <div class="flex items-center" @click="items.open = !items.open">
                    <h1 class="font-bold text-md">{{ items.name }}</h1>
                    <img :src="image_arrow_down" class="w-4 h-3 mx-2" v-show="items.value === 2"/>
                  </div>
                  <img :src="items.value === 2 ? image_checklist_kuning: (items.value === 1 ? image_checklist_hijau: image_checklist_merah)" class="w-6 mt-2"/>
                  </div>
                <div class="flex sm:justify-around my-4" v-show="items.value === 2 && items.open">
                  <div class="overflow-x-auto">
                    <div class="flex-none w-full">
                      <div class="flex w-[1200px] sm:w-full">
                        <div v-for="(images, index) in items.image" :key="index+'itemsImage'" class="w-[200px] sm:w-full" @click="showImg(index, items.image)">
                          <img :src="images.image" class="w-40 h-20 object-cover pr-2"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div class="border-b border-black w-11/12"></div>
                </div>
                
              </div>

              <div>Catatan Dokumen : {{ dokumen[dokumen.length-1].value }}</div>

            </div>
          </div>
        </div>
       </div>
    </div>
  </div>
  
</template>
<style scoped>
  div.ex1 {
    background-color: lightblue;
    width: 40px;
    overflow-x: scroll;
  }
  .container-xl {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }


.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 100%;
  max-height: 500px;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .mySwiper2 {
    height: 70%;
    max-height: 350px;
    width: 100%;
  }

}

.mySwiper {
  height: 20%;
  max-height: 50px;
  box-sizing: border-box;
  padding-top: 10px;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SCROLL BAR */

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #bfbfbf; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray; 
}

</style>