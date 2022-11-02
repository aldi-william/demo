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
import VueEasyLightbox from 'vue-easy-lightbox'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css' // optional
import Echo from "laravel-echo";
import Pusher from "pusher-js";
// window.Pusher = Pusher;

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(VueNumberFormat, { prefix: 'US$ ', decimal: ',', thounsand: '.' })
app.component('v-select', vSelect)
app.use(VueEasyLightbox)
app.use(VueTippy, {
  defaultProps: { placement: 'bottom' },
})

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: "a19e68e554721cca39a0",
//   cluster: "ap1",
//   forceTLS: true
// });


app.mount('#app')