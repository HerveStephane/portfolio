import { useTranslation } from 'react-i18next';
import { FiBox, FiCpu, FiCreditCard, FiGlobe } from 'react-icons/fi';

 const icons = [
    <FiCpu size={40} className="text-blue-600 mb-4" />,
    <FiBox size={40} className="text-blue-600 mb-4" />,
    <FiGlobe size={40} className="text-blue-600 mb-4" />,
    <FiCreditCard size={40} className="text-blue-600 mb-4" />
  ];

  
function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as Array<{
    institution: string;
    title: string;
    period: string;
    skills: string[]
  }>;



  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">{t('experience.heading')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center">{icons[idx]}</div>
              <h3 className="text-xl font-semibold mb-1 text-center">{item.institution}</h3>
              <p className="text-gray-700 font-medium text-center mb-1">{item.title}</p>
              <p className="text-sm text-gray-500 mb-2">{item.period}</p>
               <ul className="text-left text-gray-700 list-disc list-outside pl-5 max-w-xs">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="mb-1">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
