import { createApp } from "vue";

import router from "./router";
import store from "./store/store";

import App from './App.vue';
import BaseCard from './components/base/BaseCard.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseBadge from './components/base/BaseBadge.vue'


const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);


app.use(router);
app.use(store);

app.mount('#app');