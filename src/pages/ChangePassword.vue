<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router';
    import LoginService from '../services/UserService';
    import { ref, onBeforeMount } from 'vue';
    const data2 = ref({
        no_whatsapp: '',
        password: '',
        confirm_password: ''
    });
    
    
    const router = useRouter();
    const route = useRoute();

    const data = ref({
        verified_number: route.params.otp
    });

    const res = ref('');
    const otp = ref<any>(null);
    

    onBeforeMount(() => {
        LoginService.checkOTP(data.value).then((response:any) => {
            res.value = response.data.data.no_whatsapp;
        }).catch((error:any) => {
            console.log(error)
        })   
    })

    const sum = ref({
        no_whatsapp:'',
        password: '',
        otp:''
    }) 

    const submit = (result:string) => {
        sum.value.no_whatsapp = result;
        sum.value.otp = data.value.verified_number as string;
        sum.value.password = data2.value.password;
        LoginService.changePassword(sum.value).then((response:any) => {
            if(response.data.status === 'OK'){
                alert("Password berhasil diubah");
            }
        }).catch((error:any) => {
            console.log(error)
        })   
    }
       
    
</script>
<template>
  <div>
    <div class="absolute left-0 right-0 top-12 text-center border rounded shadow-xl z-10 bg-white w-11/12 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 p-8 mx-auto">
      <div class="flex flex-col">
        <h1 class="text-blue-500 text-2xl font-bold mb-4">Silahkan Masukan Password Baru</h1>
        <input placeholder="Password Baru" class="px-4 py-2 border border-gray rounded mb-4" v-model="data2.password" type="password"/>
        <input placeholder="Ulangi Password" class="px-4 py-2 border border-gray rounded mb-4" v-model="data2.confirm_password" type="password"/>
        <button @click="submit(res)" :disabled="data2.password === data2.confirm_password && data2.password !== '' ? false:true" class=" text-white px-4 py-2 rounded mb-4" :class="data2.password === data2.confirm_password && data2.password !== '' ? 'bg-blue-500':'bg-gray-300'">Simpan</button>
      </div>
    </div>
  </div>
</template>