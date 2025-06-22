import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-purple-700 px-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center p-10 md:p-16 gap-8">
        {/* Profile Image */}
        <img
          src="/images/stephane.png"
          alt={t('hero.name')}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-600"
        />

        {/* Text Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            {t('hero.name')}
          </h1>
          <p className="text-xl text-gray-700 font-light max-w-md">
            {t('hero.subtitle')}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition"
          >
            {t('hero.connect')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
