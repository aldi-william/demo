<script setup lang="ts">
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import ModalComponent from '../../../components/ModalComponent.vue'; 

    // Import Swiper styles
    import 'swiper/css';

    import "swiper/css/free-mode"
    import "swiper/css/navigation"
    import "swiper/css/thumbs"
    // import required modules
    import {FreeMode,Navigation,Thumbs} from 'swiper';

    import image_arrow from '../../../assets/images/left_arrow.png';
    import image_car from '../../../assets/images/car.png';
    import image_star from '../../../assets/images/star.png';
    import image_person from '../../../assets/images/person.png';
 
    const modules = [FreeMode, Navigation, Thumbs];
    const historyback = () => {
         window.history.back();
    }
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper:any) => {
      thumbsSwiper.value = swiper;
      console.log(swiper)
    }

    const modal = ref(false);
    const showModal = () => {
      modal.value = true;
    }
</script>
<template>
  <div class="container-xl pb-20">
       <modal-component v-show="modal" @close="modal = false"></modal-component>
       <div class="flex items-center cursor-pointer my-8" @click="historyback">
          <img :src="image_arrow" class="w-4 h-4"/>
          <p class="mx-2">Kembali</p>
       </div>
       <div class="grid grid-cols-12 gap-8">
        <div class="col-span-7">
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
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="6"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper rounded-xl"
          >
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          </swiper>
        </div>
        <div class="col-span-5">
             <div class="flex flex-row items-center">
              <img :src="image_star" class="w-12 h-12"/>
              <h1 class="text-3xl font-bold">#143779</h1>
             </div>
             <div class="text-3xl font-bold py-4">
               Suzuki Ertiga Sport 2019
             </div>
             <div>
              <p>Harga mulai :</p>
              <p class="text-2xl font-bold">Rp 90.000.000</p>
             </div>
             <div class="grid grid-cols-12 rounded-lg p-4 border-gray border-2 my-4">
                <div class="col-span-12 font-bold text-xl">Detail Kendaraan</div>
                <div class="col-span-6 my-2">
                  <p>Lokasi</p>
                  <p class="font-bold">Semarang</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Warna Asli - Saat Ini</p>
                  <p class="font-bold">Putih - Putih</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Jarak tempuh saat ini</p>
                  <p class="font-bold">16.000 KM</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Pajak</p>
                  <p class="font-bold">Hidup</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Jenis Bahan Bakar</p>
                  <p class="font-bold">Bensin</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Kepemilikan</p>
                  <p class="font-bold">Pribadi</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Kunci Serep</p>
                  <p class="font-bold">Ada</p>
                </div>
                <div class="col-span-6 my-2">
                  <p>Transmisi</p>
                  <p class="font-bold">Matic</p>
                </div>
             </div>
             <button @click="showModal" class="bg-tertier px-4 py-2 rounded-xl text-white w-full text-3xl font-bold">Ikuti Lelang Ini</button>
        </div>
        <div class="col-span-7">
            <div class="font-bold px-4 py-2 bg-gray-200 rounded-lg mb-4">History Arus Lelang</div>
            <div class="grid grid-cols-12 bg-gray-200 rounded-lg px-4 py-2 overflow-y-auto h-40">
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
              <div class="col-span-12 flex flex-row justify-between">
                  <div class="flex flex-row items-center">
                    <img :src="image_person" class="w-4 h-4"/>
                    <p class="font-bold mx-4">....................</p>
                    
                  </div>
                  <div class="font-bold flex flex-row items-center">
                    <p class="mx-2">Rp 95.000.000</p>
                    <p class="mx-2">10.35 WIB</p>
                  </div>
              </div>
            </div>
        </div>
        <div class="col-span-5 border-2 border-gray py-8 px-4">
          <div class="text-center mb-4">
            Tawaran Terakhir Anda :
          </div>
          <div class="text-center text-3xl font-bold mb-4">
            Rp 120.000.000
          </div>
          <button @click="showModal" class="bg-tertier px-4 py-2 rounded-xl text-white w-full text-3xl font-bold">Tambah Tawaran</button>
        </div>
       </div>
  </div>
</template>
<style>
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
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
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