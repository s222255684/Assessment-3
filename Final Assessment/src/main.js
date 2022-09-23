//All Vue related imports so allow the website to run. 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Imports the CSS so the site has global design
import './main.css'

//Creates the app
createApp(App).use(router).mount('#app')
