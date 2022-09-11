<script setup lang="ts">
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';

    import "swiper/css/free-mode"
    import "swiper/css/navigation"
    import "swiper/css/thumbs"
    // import required modules
    import {FreeMode,Navigation,Thumbs} from 'swiper';

    import image_arrow from '../../../assets/images/left_arrow.png';
    import image_car from '../../../assets/images/car.png';
    const modules = [FreeMode, Navigation, Thumbs];
    const historyback = () => {
         window.history.back();
    }
    let thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper:any) => {
      thumbsSwiper = swiper;
      console.log(swiper)
    }
</script>
<template>
  <div class="container-xl">
       <p class="text-primary text-xl my-4">Rabu, 10 September 2022</p>
       <div class="flex flex-row justify-between my-4">
          <div class="flex flex-row text-2xl">
            <h1 class="py-2">Sesi Pagi Sedang Berlangsung :&nbsp;</h1>
            <p class="px-4 py-2 bg-yellow-500 rounded-lg">09:00:05</p>
          </div>
          <div class="flex flex-row text-2xl">
            <h1 class="py-2">Sesi Sore Mulai : &nbsp;</h1>
            <p class="px-4 py-2 bg-yellow-500 rounded-lg">13:00 WIB </p>
          </div>
       </div>
       <div class="flex items-center cursor-pointer" @click="historyback">
          <img :src="image_arrow" class="w-4 h-4"/>
          <p class="mx-2">Kembali</p>
       </div>
       <div class="grid grid-cols-12">
        <div class="col-span-6">
          <swiper :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }">
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
              <swiper-slide><img :src="image_car"></swiper-slide>
          </swiper>
         <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :spaceBetween="10"
          :slidesPerView="5"
          :freeMode="true"
          watchSlidesProgress
          :modules="[Thumbs]"
          class="w-1/4 h-20"
          >
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
          <swiper-slide><img :src="image_car"></swiper-slide>
         </swiper>

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

</style>