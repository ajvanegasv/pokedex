import  { createApp } from 'vue';
import App from './App.vue';
import './css/style.css';
import { VueWrapper } from '@vue/test-utils';
import Magnify from "vue-material-design-icons/Magnify.vue";
import Github from "vue-material-design-icons/Github.vue";

const app = createApp(App);

app.component("Magnify", Magnify);
app.component("Github", Github);

app.mount('#app');
