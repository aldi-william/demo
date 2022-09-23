<script setup lang="ts">
    import ChangePasswordComponent from '../components/ChangePasswordComponent.vue'
    import { useRouter, useRoute } from 'vue-router';
    const router = useRouter();
    const route = useRoute();
    if(route.params.token === undefined){
        router.push('/')
    }
    
</script>
<template>
  <div>
     <ChangePasswordComponent/>
  </div>
</template>