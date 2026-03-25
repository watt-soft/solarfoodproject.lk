import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logos/solar-food-project.webp';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToAction = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { t } = useTranslation();

  const navLinks = [
    { label: t('navbar.home'), id: 'home' },
    { label: t('navbar.vision'), id: 'vision' },
    { label: t('navbar.transparency'), id: 'transparency' },
    { label: t('navbar.stakeholders'), id: 'stakeholders' },
    { label: t('navbar.contact'), id: 'contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none"
    >
      <div 
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-500 ease-out flex flex-col ${
          mobileMenuOpen 
            ? 'rounded-[32px] pl-6 pr-2 py-4 bg-[#e5e5e0]/95 backdrop-blur-xl shadow-2xl border border-earth-dark/10 mt-2 lg:mt-0' 
            : `rounded-[32px] md:rounded-full ${
                isScrolled 
                  ? 'pl-6 pr-2 py-2 md:py-2.5 bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-earth-dark/5' 
                  : 'pl-6 pr-2 py-3.5 md:pl-8 md:pr-3 md:py-5 bg-[#e5e5e0]/90 backdrop-blur-lg shadow-lg border border-white/40 md:mt-2'
              }`
        }`}


        /*logo*/
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="text-xl font-display font-bold text-earth-dark tracking-tight flex items-center gap-2 cursor-pointer" onClick={(e) => scrollToAction(e as any, 'home')}>
              <img 
                src={logo} 
                alt="Solar Food Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-earth-dark bg-white/50 rounded-full hover:bg-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 lg:gap-5 xl:gap-8 px-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToAction(e, link.id)}
                className="text-sm font-medium text-earth-dark/70 hover:text-earth-dark transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <motion.a
              href="#contact"
              onClick={(e) => scrollToAction(e, 'contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 xl:px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-sm inline-block whitespace-nowrap shrink-0 ${
                isScrolled 
                  ? 'bg-earth-dark text-white hover:bg-forest-green' 
                  : 'bg-earth-dark text-white hover:bg-forest-green'
              }`}
            >
              {t('navbar.cta')}
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu Expansion */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            className="lg:hidden w-full flex flex-col gap-2 pb-4 pt-4 border-t border-earth-dark/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToAction(e, link.id)}
                className="text-base font-semibold text-earth-dark/80 active:text-earth-dark px-4 py-3 hover:bg-white/50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToAction(e, 'contact')}
              className="mt-2 text-center px-4 py-3.5 rounded-xl bg-earth-dark text-white font-semibold shadow-md"
            >
              {t('navbar.cta')}
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
