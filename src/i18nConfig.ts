import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en-EN';
import ru from './locales/ru-RU';
import { themedRu, themedEn } from './locales/themed';

export type ILocale = 'ru' | 'en';

export type nameSpace = 'common' | 'themed';

interface IInitParams {
  ns: nameSpace[];
  defaultNS: nameSpace;
  resources: {
    [keyLocales in ILocale]: {
      [keyNS in nameSpace]: object;
    };
  };
  lng?: ILocale;
  fallbackLng: ILocale;
  detection: {
    lookupCookie: string;
  };
}

const initParams: IInitParams = {
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: en,
      themed: themedEn,
    },
    ru: {
      common: ru,
      themed: themedRu,
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  detection: {
    lookupCookie:
      'org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE',
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(initParams);

export default i18n;
