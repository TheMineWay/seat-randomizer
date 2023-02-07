import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createI18n } from 'vue-i18n'
import { initFirebase } from './services/firebase/firebase';

const messages = {
    es: require('./i18n/es/es.json'),
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages,
});

initFirebase();

createApp(App).use(i18n).use(Antd).use(router).mount('#app')
