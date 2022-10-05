import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/index.css'
import mixins from './mixins'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.mixin(mixins)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios);

app.mount('#app')