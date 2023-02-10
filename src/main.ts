import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { initFirebase } from './services/firebase/firebase';
import { i18n } from './i18n/i18n';

initFirebase();

createApp(App).use(i18n).use(Antd).use(router).mount('#app')