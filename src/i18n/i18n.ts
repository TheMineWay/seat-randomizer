import { createI18n } from "vue-i18n";

const messages = {
    es: require('./es/es.json'),
}

export const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages,
});