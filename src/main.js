// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import {
  NConfigProvider,
  NMessageProvider,
  NButton,
  NLayout,
  NMenu
} from 'naive-ui'

const app = createApp(App)
app.use(NConfigProvider)
app.use(NMessageProvider)
app.component('NButton', NButton)
app.component('NLayout', NLayout)
app.component('NMenu', NMenu)

app.mount('#app')
