
import { createApp } from 'vue'
import ToyElement from 'toy-element'

import App from './App.vue'

const app = createApp(App)
app.use(ToyElement)
app.mount('#app')
