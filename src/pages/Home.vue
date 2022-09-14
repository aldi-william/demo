<script setup lang="ts">
    import LupaPasswordComponent from '../components/LupaPasswordComponent.vue'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import image from '../assets/images/splashscreen.png';
    import logo from '../assets/images/logo.png';
    import star from '../assets/images/star.png';

    const router = useRouter();
    const isAnimated = ref(false);
    const isAbsolute = ref(false);
    const showModal = ref(false);
    const no_wa = ref('');
    const password = ref('');
    const showAnimated = () => {
        setTimeout(()=>{
          isAnimated.value = true;
        }, 3000)  
    }
    const showAbsolute = () => {
        setTimeout(()=>{
          isAbsolute.value = true;
        }, 6000)  
    }
    showAbsolute();
    showAnimated();

    const logintodashboard = () => {
        if(no_wa.value == '123' && password.value == '123'){
            localStorage.setItem('isLogin', 'true');
            router.push('/dashboard/bursamobil');
        }else {
            alert('Nomer Whatsapp atau Password Anda Salah');
        }
        
    }
</script>
<template>
  <div>
    <LupaPasswordComponent v-show="showModal" @show-modal="showModal = false"/>
  </div>
  <div class="welcome">
    <span id="splash-overlay" :class="isAnimated ? 'splash':''"></span>
    <span :id="isAnimated ?'welcome':''" class="z-depth-4"></span>
  </div> 
  
  <div class="w-full h-full bg-secondary py-20 absolute" :class="isAnimated ? 'hidden':''">
    <img :src="logo" alt="tav logo" class="w-64 mx-auto my-4"/>
    <pre class="text-primary text-3xl tracking-widest text-center my-4">L E L A N G  M E N A N G</pre>
    <img :src="star" alt="tav star" class="w-20 mx-auto my-4" />
    <img :src="image" alt="tav image" class="w-96 mx-auto my-4">
    <p class="text-center my-4 font-bold">Berburu mobil bekas Murah & Berkualitas</p>
  </div>
  <div class="w-full h-full flex flex-col justify-center py-32 bg-biru_fb" :class="isAbsolute ? 'absolute':''">
     <div class="mx-auto w-9/12 sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 p-8 rounded-xl bg-white shadow-2xl">
          <h1 class="text-center text-3xl font-bold mb-2">Selamat Datang</h1>
          <p class="text-center mb-6 text-lg">Platform LELANG MENANG Mobil Bekas Berkualitas</p>
          <div class="w-full mx-auto">
              <p class="text-left">Nomor WhatsApp</p>
              <input placeholder="Masukan Nomor WhatsApp Anda" class="px-4 py-2 rounded border border-gray w-full" v-model="no_wa" type="number"/>
          </div>
     
          <div class="w-full mx-auto my-4">
            <p class="text-left">Password</p>
            <input placeholder="Masukan Password Lelang Anda" class="px-4 py-2 rounded border border-gray w-full" v-model="password" />
          </div>
     
          <div class="w-full mx-auto mb-4 flex flex-row justify-between">
            <div><input type="checkbox"/>Ingat Password Saya</div>
            <a href="#" class="text-blue-400 hover:text-blue-500" @click="showModal = true">Lupa Password ?</a>
          </div>

          <button class="bg-primary text-white px-4 py-2 w-full mx-auto rounded mb-12" @click="logintodashboard()">Masuk</button>
          <div class="text-center">Belum Memiliki akun ? Silahkan <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUmuz7mHM__fyJl9WazOxum0_NLmT4-IPHWFqmroCQe2CWdw/viewform" class="hover:text-blue-500 text-blue-400">daftar disini</a></div>
          <div class="text-center">Ada kendala ? <a href="https://wa.me/6289668303824" class="text-blue-400 hover:text-blue-500">Hubungi Customer Service Lelang</a></div>
        
    </div>
  </div>
</template>
<style>
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