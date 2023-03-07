import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: false,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        'creation-date': 'created in 2023',
        'new-quote': 'new quote',
        'server-error': 'sorry, server error',
      },
    },
    ru: {
      translation: {
        'creation-date': 'Сделано в 2023',
        'new-quote': 'новая цитата',
        'server-error': 'извините, ошибка сервера'
      },
    },
  },
});

export default i18n;
