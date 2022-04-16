import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import VueMathjax from 'vue-mathjax-next';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueMathjax)
app.use(router)


app.mount('#app')