import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  japanese: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [japanese, setJapanese] = useState(false); // `setLanguage` から `setJapanese` に名前を変更

  const toggleLanguage = () => {
    setJapanese((prevJapanese) => !prevJapanese); // 日本語かどうかの真偽値を反転
  };

  return (
    <LanguageContext.Provider value={{ japanese, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
