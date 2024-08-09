/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Styles
import './assets/css/styles.css'; // Ruta a tu archivo de estilos

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(MotionPlugin)
app.mount('#app')
