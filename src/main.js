import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Layout from '@/layouts/Layout'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).component('Layout', Layout).mount('#app')
