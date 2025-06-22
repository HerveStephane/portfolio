import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locale/en.json';
import de from './locale/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
