
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          hero: {
            title: "Hi, I’m Hervé Stéphane Njanga Njafang",
            subtitle: "MBA | Software Engineer | DevSecOps & Strategy",
            cta: "Let’s Connect"
          },
          about: {
            heading: "About Me",
            text: "I am an MBA candidate and experienced Software Engineer based in Munich..."
          },
          experience: {
            heading: "Experience Highlights"
          }
        }
      },
      de: {
        translation: {
          hero: {
            title: "Hallo, ich bin Hervé Stéphane Njanga Njafang",
            subtitle: "MBA | Softwareentwickler | DevSecOps & Strategie",
            cta: "Lass uns verbinden"
          },
          about: {
            heading: "Über mich",
            text: "Ich bin MBA-Student und erfahrener Softwareentwickler mit Sitz in München..."
          },
          experience: {
            heading: "Berufliche Höhepunkte"
          }
        }
      }
    }
  });

export default i18n;
