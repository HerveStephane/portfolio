import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCheckCircle, FiClock, FiUsers, FiTrendingUp } from 'react-icons/fi';

function Analytics() {
  const { t } = useTranslation();

  const icons = [
    <FiCheckCircle size={40} className="text-green-500 mb-4" />,
    <FiClock size={40} className="text-yellow-500 mb-4" />,
    <FiUsers size={40} className="text-blue-500 mb-4" />,
    <FiTrendingUp size={40} className="text-purple-500 mb-4" />
  ];

  const analyticsItems = t('analytics.items', { returnObjects: true }) as {
    label: string;
    value: string;
  }[];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">{t('analytics.heading')}</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsItems.map(({ label, value }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-default"
            >
              {icons[idx]}
              <p className="text-3xl font-semibold text-gray-800">{value}</p>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Analytics;
