import { useTranslation } from 'react-i18next';

const logos = [
  "/images/hm.png",
  "/images/mannheim.jpg",
  "/images/mannheim.jpg",
];

function Education() {
  const { t } = useTranslation();

  const educationData = t('education.items', { returnObjects: true }) as Array<{
    institution: string;
    degree: string;
    period: string;
    grade: string | null;
    details: string[];
    skills: string[];
  }>;

  const gradeLabel = t('education.gradeLabel');
  const skillsLabel = t('education.skillsLabel');

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">{t('education.heading')}</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={logos[index]}
                alt={`${edu.institution} logo`}
                className="w-30 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-center">{edu.institution}</h3>
              <p className="text-gray-700 font-medium text-center mb-1">{edu.degree}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
              {edu.grade && (
                <p className="text-sm text-gray-600 mb-3 font-semibold">
                  {gradeLabel}: {edu.grade}
                </p>
              )}
              <ul className="text-left text-gray-700 list-disc list-inside max-w-xs">
                {edu.details.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
