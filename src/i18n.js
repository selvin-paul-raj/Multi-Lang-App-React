// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Welcome!',
          changeLanguage: 'Change Language',
        },
      },
      ta: {
        translation: {
          greeting: 'வரவேற்கின்றோம்!',
          changeLanguage: 'மொழி மாற்றம்',
        },
      },
      fr: {
        translation: {
          greeting: 'Bienvenue!',
          changeLanguage: 'Changer de langue',
        },
      },
      zh: {
        translation: {
          greeting: '欢迎!',
          changeLanguage: '更改语言',
        },
      },
      es: {
        translation: {
          greeting: '¡Bienvenido!',
          changeLanguage: 'Cambiar idioma',
        },
      },
      de: {
        translation: {
          greeting: 'Willkommen!',
          changeLanguage: 'Sprache ändern',
        },
      },
      it: {
        translation: {
          greeting: 'Benvenuto!',
          changeLanguage: 'Cambia lingua',
        },
      },
      ja: {
        translation: {
          greeting: 'ようこそ!',
          changeLanguage: '言語を変更する',
        },
      },
      ko: {
        translation: {
          greeting: '환영합니다!',
          changeLanguage: '언어 변경',
        },
      },
      pt: {
        translation: {
          greeting: 'Bem-vindo!',
          changeLanguage: 'Mudar idioma',
        },
      },
      ru: {
        translation: {
          greeting: 'Добро пожаловать!',
          changeLanguage: 'Изменить язык',
        },
      },
      hi: {
        translation: {
          greeting: 'स्वागत है!',
          changeLanguage: 'भाषा बदलें',
        },
      },
      ar: {
        translation: {
          greeting: 'أهلاً وسهلاً!',
          changeLanguage: 'تغيير اللغة',
        },
      },
      nl: {
        translation: {
          greeting: 'Welkom!',
          changeLanguage: 'Verander taal',
        },
      },
      pl: {
        translation: {
          greeting: 'Witaj!',
          changeLanguage: 'Zmień język',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
