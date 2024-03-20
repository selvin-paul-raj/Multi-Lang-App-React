// App.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
//languages lists
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'fr', label: 'Français' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'pl', label: 'Polski' },
  ];

  return (
    <div className="card">
     <div className="card-border-top"></div>
     <div className="msg">
     <h1>{t('greeting')}</h1>
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
     </div>
    
    </div>
  );
}

export default App;
