import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as string[];

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
              <p className="text-lg text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
