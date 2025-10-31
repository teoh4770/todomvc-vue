import { createApp } from 'vue'
import App from './App.vue'


import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'

const app = createApp(App);

app.use(Buefy, {
    defaultIconPack: 'fas',
});

app.mount('#app')
