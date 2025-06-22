// components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className="mr-2 text-sm text-white"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('de')}
        className="text-sm text-white"
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
