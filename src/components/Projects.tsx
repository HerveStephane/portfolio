import { useTranslation } from 'react-i18next';
import { FiCpu, FiBox, FiGlobe, FiCreditCard } from 'react-icons/fi';

function Projects() {
  const { t } = useTranslation();

  const icons = [
    <FiCpu size={40} className="text-blue-600 mb-4" />,
    <FiBox size={40} className="text-blue-600 mb-4" />,
    <FiGlobe size={40} className="text-blue-600 mb-4" />,
    <FiCreditCard size={40} className="text-blue-600 mb-4" />
  ];

  const projects = t('projects.items', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">{t('projects.heading')}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {t('projects.subheading')}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer"
            >
              <div className="flex justify-center">{icons[idx]}</div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
