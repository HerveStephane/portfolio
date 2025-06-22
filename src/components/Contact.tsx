import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="bg-green-100 text-green-900 py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">{t('contact.heading')}</h2>
      <p className="text-lg mb-8">{t('contact.description')}</p>
      <a
        href="mailto:herve.njanga@gmail.com"
        className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold shadow hover:bg-gray-200 transition"
      >
        {t('contact.button')}
      </a>
    </section>
  );
}

export default Contact;
