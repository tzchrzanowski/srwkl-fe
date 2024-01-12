import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import plTranslation from './locales/pl.json';
import ltTranslation from './locales/lt.json';

const resources = {
    en: { translation: enTranslation },
    pl: { translation: plTranslation },
    lt: { translation: ltTranslation },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pl',
        fallbackLng: 'pl',

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
