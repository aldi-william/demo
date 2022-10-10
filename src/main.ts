import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueNumberFormat from 'vue-number-format'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueLazyLoad from 'vue-lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})
app.component('v-select', vSelect)
app.use(VueLazyLoad)

app.mount('#app')