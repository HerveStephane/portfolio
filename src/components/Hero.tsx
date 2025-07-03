import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { FiLinkedin } from 'react-icons/fi';

function Hero() {
  const { t } = useTranslation();

  // Split tagline parts and pair with icons
  const taglineParts = [
    { icon: <FaGraduationCap className="text-primary-600" />, text: t('hero.tagline.mba') },
    { icon: <FaCode className="text-green-600" />, text: t('hero.tagline.fullstack') },
    { icon: <FaRocket className="text-purple-600" />, text: t('hero.tagline.aerospace') },
    { icon: <FaShieldAlt className="text-yellow-600" />, text: t('hero.tagline.devsecops') },
  ];

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700 px-6 pt-20 pb-12">

      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center p-10 md:p-16 gap-8">
        {/* Profile Image */}
        <img
          src="/images/stephane.jpg"
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
              <span key={i} className="flex items-center space-x-2">
                <span className="text-2xl">{icon}</span>
                <span>{text}</span>
              </span>
            ))}
          </p>

          <a
            href="https://www.linkedin.com/in/herve-stephane-njanga-njafang-73055b142/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={24} />
            <span className="font-semibold">{t('hero.connect')}</span>

          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
