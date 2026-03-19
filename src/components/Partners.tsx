import { motion } from 'framer-motion';
import { partners } from '../data/partnerData';

export const Partners = () => {
  return (
    <section id="stakeholders" className="py-24 bg-white border-y border-earth-dark/5 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Centered Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-emerald-700 bg-[#f0fdf4] border border-emerald-200 shadow-sm px-4 py-2 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              STAKEHOLDERS
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight">
            Our Stakeholders & <br className="hidden sm:block" />
            <span className="text-[#1A6B3C]">Strategic Partners</span>
          </h2>
          
          <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            At the Solar Food Project, our mission is to redefine the intersection of technology and nature — pioneering a new era of investment where green energy and sustainable agrotechnology are completely vertically integrated. From seed to solar canopy to final consumer product, we ensure total food safety and unparalleled operational efficiency. By investing in our ecosystem, you are funding a blueprint for the future of global food security.
          </p>
        </motion.div>

        {/* ── Partner Logos Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-[#f9fafb] rounded-[22px] border border-earth-dark/5 shadow-sm hover:shadow-[0_12px_44px_rgba(26,107,60,0.12)] transition-all duration-300 group hover:border-[#1A6B3C]/20 hover:bg-white"
            >
              <div className="w-[110px] h-[110px] sm:w-[124px] sm:h-[124px] mb-6 bg-white rounded-[20px] flex items-center justify-center p-4 border border-slate-100 group-hover:border-[#22C55E]/40 transition-colors shadow-sm overflow-hidden ring-4 ring-white">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="w-full h-full object-contain mix-blend-multiply grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = "text-2xl font-bold text-[#1A6B3C] font-display";
                    fallback.innerText = partner.name.substring(0, 2).toUpperCase();
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
              <h3 className="font-display font-bold text-[16px] sm:text-[18px] leading-snug text-slate-900 group-hover:text-[#1A6B3C] transition-colors">{partner.name}</h3>
              <p className="text-[12px] sm:text-[13px] text-slate-500 mt-2.5 leading-relaxed font-medium">{partner.role}</p>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
