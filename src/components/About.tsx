import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">{t('about.heading')}</h2>
      <p className="text-xl text-gray-700 leading-relaxed text-left">{t('about.description')}</p>
    </section>
  );
}

export default About;
