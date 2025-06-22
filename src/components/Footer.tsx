import { FiLinkedin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm md:text-base mb-4 md:mb-0">
          {t('footer.copyright', { year })}
        </p>
        <a
          href="https://www.linkedin.com/in/herve-stephane-njanga-njafang-73055b142/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="LinkedIn Profile"
        >
          <FiLinkedin size={24} />
          <span className="font-semibold">{t('footer.linkedin')}</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
