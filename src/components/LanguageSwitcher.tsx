import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  inline?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ inline = true }) => {
  const { i18n } = useTranslation();

  return (
    <div className={inline ? "flex space-x-3" : "flex flex-col space-y-2"}>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`text-sm font-semibold 'text-primary-700'`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('de')}
        className={`text-sm font-semibold 'text-primary-700'`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
