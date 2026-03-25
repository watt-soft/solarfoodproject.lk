import { FiMail, FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'The Vision', id: 'vision' },
  { label: 'Transparency', id: 'transparency' },
  { label: 'Our Stakeholders', id: 'stakeholders' },
  { label: 'Contact Us', id: 'contact' },
];

export const Footer = () => {
  const { t } = useTranslation();
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C342C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-bold tracking-tight mb-4">
              Solar Food<span className="text-vibrant-lime ml-1">Project</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className="text-sm text-white/70 hover:text-vibrant-lime transition-colors flex items-center gap-1 group"
                  >
                    {t(`navbar.${link.id}`)}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">{t('footer.connect')}</h4>
            <div className="flex gap-4 mb-6">
             
              <a
                href="mailto:info@solarfoodproject.lk"
                aria-label="Send email"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-vibrant-lime hover:text-earth-dark transition-colors"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <div>
            © {new Date().getFullYear()} {t('footer.rights')}
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 bg-white/5 hover:bg-vibrant-lime text-white/70 hover:text-earth-dark border border-white/10 hover:border-vibrant-lime transition-all duration-300 px-4 py-2 rounded-full"
          >
            <span className="font-bold tracking-[0.15em] uppercase text-[10px]">{t('footer.backToTop')}</span>
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-earth-dark/10 flex items-center justify-center transition-colors">
              <FiArrowUp size={12} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
