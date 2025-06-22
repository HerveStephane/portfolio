import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';

function Hero() {
  const { t } = useTranslation();

  // Split tagline parts and pair with icons
  const taglineParts = [
    { icon: <FaGraduationCap className="inline text-blue-600 mr-2" />, text: t('hero.tagline.mba') },
    { icon: <FaCode className="inline text-green-600 mr-2" />, text: t('hero.tagline.fullstack') },
    { icon: <FaRocket className="inline text-purple-600 mr-2" />, text: t('hero.tagline.aerospace') },
    { icon: <FaShieldAlt className="inline text-yellow-600 mr-2" />, text: t('hero.tagline.devsecops') },
  ];

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 px-6">
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

          <p className="text-xl text-gray-700 font-light max-w-md space-y-2">
            {taglineParts.map(({ icon, text }, i) => (
              <span key={i} className="block">
                {icon}
                {text}
              </span>
            ))}
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
