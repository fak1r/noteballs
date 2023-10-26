import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/router.js'

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})


createApp(App).use(router).use(pinia).mount('#app')