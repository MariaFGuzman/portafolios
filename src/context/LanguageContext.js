import React, { createContext, useState, useContext } from 'react';

const languages = {
  en: 'English',
  es: 'Español',
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);
