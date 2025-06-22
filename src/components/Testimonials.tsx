import { useTranslation } from 'react-i18next';

function Testimonials() {
  const { t } = useTranslation();

  // Get the array of testimonial persons from translation
  const persons = t('testimonials.persons', { returnObjects: true }) as Array<{
    name: string;
    role: string;
    feedback: string;
  }>;

  return (
    <section id="testimonial" className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">{t('testimonials.heading')}</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">{t('testimonials.subheading')}</p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {persons.map(({ name, role, feedback }, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <p className="text-gray-800 italic mb-6">“{feedback}”</p>
              <div>
                <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
