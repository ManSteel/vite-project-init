import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

//Import css
import './assets/css/style.css'
import './assets/css/main.css'

// Use pinia
const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
app.mount('#app')
