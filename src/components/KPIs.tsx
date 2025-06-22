import React from 'react';
import { useTranslation } from 'react-i18next';

function KPIs() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">{t('kpis.yearsExperienceValue')}</h3>
          <p className="mt-2 text-lg">{t('kpis.yearsExperience')}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">{t('kpis.projectsDeliveredValue')}</h3>
          <p className="mt-2 text-lg">{t('kpis.projectsDelivered')}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">{t('kpis.industriesServedValue')}</h3>
          <p className="mt-2 text-lg">{t('kpis.industriesServed')}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-purple-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-4xl font-extrabold">{t('kpis.degreesEarnedValue')}</h3>
          <p className="mt-2 text-lg">{t('kpis.degreesEarned')}</p>
        </div>
      </div>
    </section>
  );
}

export default KPIs;
