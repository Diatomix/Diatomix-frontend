import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import translationEN from './locales/en/translation.json';
import translationSK from './locales/sk/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  sk: {
    translation: translationSK,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language'),
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
      wait: true,
    },
  });
console.log('i18n initialized');
export default i18n;
