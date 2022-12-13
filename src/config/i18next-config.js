import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
.use(LanguageDetector)
.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        'title' : 'Bienvenido {{ name }}',
      },
    },
    en: {
      translation: {
        title: "Welcome {{ name }}",
      },
    },
  },
});