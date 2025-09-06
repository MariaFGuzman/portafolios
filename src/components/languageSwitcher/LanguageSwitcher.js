import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './languageSwitcher.scss';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className='language-switcher'>
      <button onClick={() => switchLanguage('en')} disabled={language === 'en'}>
        English
      </button>
      <button onClick={() => switchLanguage('es')} disabled={language === 'es'}>
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
