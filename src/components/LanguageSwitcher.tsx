import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    // Basic prefix matching since browsers might return 'en-US' etc.
    const currentLang = i18n.language?.startsWith('si') ? 'si' : 'en';
    i18n.changeLanguage(currentLang === 'si' ? 'en' : 'si');
  };

  const isSi = i18n.language?.startsWith('si');

  return (
    <div className="fixed top-24 right-4 lg:top-6 lg:right-6 z-[100]">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-all border border-earth-dark/10 cursor-pointer group"
        aria-label="Toggle language"
      >
        <span className={`text-xs font-black tracking-wide transition-colors ${!isSi ? 'text-forest-green' : 'text-earth-dark/40 group-hover:text-earth-dark/60'}`}>EN</span>
        <div className="w-px h-3.5 bg-earth-dark/20" />
        <span className={`text-[12px] font-bold tracking-wide transition-colors ${isSi ? 'text-forest-green' : 'text-earth-dark/40 group-hover:text-earth-dark/60'}`}>සිංහල</span>
      </button>
    </div>
  );
};
