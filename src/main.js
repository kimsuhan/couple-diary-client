import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Custom CSS
import './index.css'

// V-Calendar
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

// Notification
import Notifications from '@kyvg/vue3-notification'

// Axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';

// vuex store
import store from './store';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router);
app.use(VCalendar);
app.use(Notifications);
app.use(store);
// app.use(axios);
app.mount('#app');

// createApp(App)
// .use(router)
// .use(VCalendar)
// .use(Notifications)
// .mount('#app');