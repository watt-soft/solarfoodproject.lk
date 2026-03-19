import { FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'The Vision', id: 'vision' },
  { label: 'Transparency', id: 'transparency' },
  { label: 'Our Stakeholders', id: 'stakeholders' },
  { label: 'Contact Us', id: 'contact' },
];

export const Footer = () => {
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
              Pioneering the future of sustainable agrotechnology through
              vertically integrated green energy and premium food production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollTo(e, link.id)}
                    className="text-sm text-white/70 hover:text-vibrant-lime transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-vibrant-lime hover:text-earth-dark transition-colors"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:investors@solarfoodproject.com"
                aria-label="Send email"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-vibrant-lime hover:text-earth-dark transition-colors"
              >
                <FiMail size={18} />
              </a>
            </div>
            <p className="text-sm text-white/50">investors@solarfoodproject.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Solar Food Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
