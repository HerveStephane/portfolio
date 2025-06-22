import { useTranslation } from 'react-i18next';
import { FaRocket, FaBriefcase, FaCrown } from 'react-icons/fa';

function Services() {
  const { t } = useTranslation();

  const plans = t('services.plans', { returnObjects: true }) as Array<{
    title: string;
    price: string;
    features: string[];
  }>;

  const icons = [
    <FaRocket size={36} className="text-blue-600 mb-4" />,
    <FaBriefcase size={36} className="text-blue-600 mb-4" />,
    <FaCrown size={36} className="text-blue-600 mb-4" />,
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{t('services.heading')}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {t('services.subheading')}
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition duration-300 transform hover:-translate-y-2 ${
                idx === 1
                  ? 'border-2 border-blue-600 bg-blue-50 shadow-2xl'
                  : 'bg-white shadow-lg hover:shadow-2xl'
              }`}
            >
              <div className="flex justify-center">{icons[idx]}</div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-6">
                {plan.price}
              </p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">
                    • {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto inline-block text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                {t('services.cta')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
