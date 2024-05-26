import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ToyElement from 'toy-element'

const app = createApp(App)

app.use(createPinia())
app.use(ToyElement)

app.mount('#app')
