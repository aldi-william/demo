<script setup lang="ts">
    import LupaPasswordComponent from '../components/LupaPasswordComponent.vue'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import image from '../assets/images/splashscreen.png';
    import logo from '../assets/images/logo.png';
    import mata_password from '../assets/images/mata_password.png';
    import star from '../assets/images/star_splash_screen.png';
    import LoginService from '../services/UserService';
    import { IDataLogin } from '../Interface/IDataLogin';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Swal from 'sweetalert2'
    
    const router = useRouter();
    const isAnimated = ref(false);
    const isAnimated2 = ref(false);
    const isAbsolute = ref(false);
    const showModal = ref(false);
    const isLoading = ref(false);
    const fullPage = ref(true);
    const dataLogin = ref<IDataLogin>({
        no_whatsapp: '',
        password: ''
    });
    const passwordFieldType = ref('password');
    const isPassword = ref(true);
    const showAnimated = () => {
        setTimeout(()=>{
          isAnimated.value = true;
        }, 3000)
        setTimeout(()=>{
          isAnimated2.value = true;
        }, 6000) 
    }
    const showAbsolute = () => {
        setTimeout(()=>{
          isAbsolute.value = true;
        }, 6000)  
    }
    showAbsolute();
    showAnimated();

    const logintodashboard = () => {
        isLoading.value = true;
        LoginService.login(dataLogin.value).then((response:any) => {
          if(response.data.status === 'OK'){
            localStorage.setItem('isLogin', response.data.data.token);
            router.push('/dashboard/bursamobil');
          }
        }).catch((error:any) => {
            isLoading.value = false;
            Swal.fire({
              title: 'Invalid!',
              text: 'Mohon Maaf Username atau Password Anda SALAH / Belum Terdaftar / Masa Aktif Habis',
              icon: 'error',
              confirmButtonText: 'OK'
            })
        }).finally(() => {
          isLoading.value = false;
        })   
    }

    const onCancel = () => {
        isLoading.value = false;
    }

    const switchVisibility = () => {
        isPassword.value = !isPassword.value;
        if (isPassword.value === true) {
          passwordFieldType.value = 'password';
        } else {
          passwordFieldType.value = 'text';
        }
    }
</script>
<template>
  <div>
    <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
  </div>
  <div>
    <LupaPasswordComponent v-show="showModal" @show-modal="showModal = false"/>
  </div>
  <div class="welcome">
    <span id="splash-overlay" :class="isAnimated ? 'splash':''"></span>
    <span :id="isAnimated ? 'welcome':''" class="z-depth-4"></span>
  </div> 
  
  <div class="w-full h-full bg-secondary py-20 absolute" :class="isAnimated ? 'hidden':''">
    <img :src="logo" alt="tav logo" class="w-64 mx-auto my-4" preload/>
    <pre class="text-blue-500 text-3xl tracking-normal sm:tracking-widest md:tracking-widest lg:tracking-widest xl:tracking-widest 2xl:tracking-widest text-center my-4">LELANG MENANG</pre>
    <img :src="star" alt="tav star" class="w-20 mx-auto my-4" preload/>
    <div id="preload">

    </div>
    <img :src="image" alt="tav image" class="w-96 mx-auto my-4" preload>
    
    <p class="text-center my-4 font-bold">Berburu mobil bekas Murah & Berkualitas</p>
  </div>
  <div class="w-full h-full flex flex-col justify-center layer -top-10 bg-slate-300" :class="isAbsolute ? 'absolute':''">
     
     <div class="mx-auto w-11/12 sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 p-8 rounded-xl">
          <div class="w-full flex justify-center z-10" v-show="isAnimated2">
              <div class="flex">
                <img :src="logo" class="w-40">
              </div>
          </div> 
          <h1 class="text-center text-3xl font-bold mb-2">SELAMAT DATANG</h1>
          <p class="text-center mb-6 text-lg">Platform LELANG MENANG Mobil Bekas Berkualitas</p>
          <div class="w-full mx-auto">
              <p class="text-left">Username</p>
              <input placeholder="Masukan No. WhatsApp" class="bg-white px-4 py-2 rounded border border-black w-full" v-model="dataLogin.no_whatsapp" type="number"/>
          </div>
     
          <div class="w-full mx-auto my-4">
            <p class="text-left">Password</p>
            <input placeholder="Masukan Password" class="bg-white px-4 py-2 rounded border border-black w-full" v-model="dataLogin.password" :type="passwordFieldType"/>
            <div class="relative" v-show="isAnimated2">
              <button @click="switchVisibility()" class="absolute -top-[29px] right-4"><img :src="mata_password" class="w-6 h-4"></button>
            </div>
            
          </div>
     
          <div class="w-full mx-auto mb-4 flex flex-col sm:flex-row justify-between">
            <div>
              <input type="checkbox"/>
              <span class="mx-2">Ingat Password Saya</span>
            </div>   
          </div>
          <button class="bg-blue-500 text-white px-4 py-2 w-full mx-auto rounded" @click="logintodashboard()">Masuk</button>
          <div class="flex justify-center mt-1">
            <a href="#" class="text-blue-400 hover:text-blue-500" @click="showModal = true">Lupa Password ?</a>
          </div>
          
          <!-- <div class="text-center">Belum memiliki Akun ? Silahkan <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUmuz7mHM__fyJl9WazOxum0_NLmT4-IPHWFqmroCQe2CWdw/viewform" class="hover:text-blue-500 text-blue-400">daftar disini</a></div>
          <div class="text-center">Ada kendala ? <a href="https://wa.me/6289668303824" class="text-blue-400 hover:text-blue-500">Hubungi Customer Service Lelang</a></div> -->
        
     </div>
  </div>
  <div class="w-full bg-white fixed bottom-0 py-4 text-center" v-show="isAnimated2">
    &#169; 2022 | PT. TAV Mobil Indonesia
  </div>
 
</template>
<style>

.layer{
  background: url('../assets/images/layer.png');
  background-repeat: repeat;
  background-size: 60%;
}

@media only screen and (max-width: 600px) {
  .layer{
    background: url('../assets/images/layer.png');
    background-repeat: repeat;
    background-size: 210%;
  }
}

.welcome .splash {
  height: 0px;
  padding: 0px;
  border: 130em solid #E2E8F0;
  position: fixed;
  left: 50%;
  top: 100%;
  display: block;
  box-sizing: initial;
  overflow: hidden;

  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: puff 0.5s 1.8s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, borderRadius 0.2s 2.3s linear forwards;
}

.welcome #welcome {
  background: #548ecb;
  width: 56px;
  height: 56px;
  position: absolute;
  left: 50%;
  top: 50%;
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  animation: init 0.5s 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 1s 0.8s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 1s 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0.5s 2.7s cubic-bezier(0.86, 0, 0.07, 1) forwards, hide 2s 2.9s ease forwards;
}
   
/* moveIn */
.welcome header,
.welcome a.btn {
  opacity: 0;
  animation: moveIn 2s 3.1s ease forwards;
}

@keyframes init {
  0% {
    width: 0px;
    height: 0px;
  }
  100% {
    width: 56px;
    height: 56px;
    margin-top: 0px;
    opacity: 1;
  }
}

@keyframes puff {
  0% {
    top: 100%;
    height: 0px;
    padding: 0px;
  }
  100% {
    top: 50%;
    height: 100%;
    padding: 0px 100%;
  }
}

@keyframes borderRadius {
  0% {
    border-radius: 50%;
  }
  100% {
    border-radius: 0px;
  }
}

@keyframes moveDown {
  0% {
    top: 50%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 96%;
  }
}

@keyframes moveUp {
  0% {
    background: #548ecb;
    top: 96%;
  }
  50% {
    top: 40%;
  }
  100% {
    top: 50%;
    background: #548ecb;
  }
}

@keyframes materia {
  0% {
    background: #548ecb;
  }
  50% {
    background: #548ecb;
    top: 26px;
  }
  100% {
    background: #548ecb;
    width: 100%;
    height: 64px;
    border-radius: 0px;
    top: 26px;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>