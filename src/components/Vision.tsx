import { motion } from 'framer-motion';
import { visionItems } from '../data/visionData';
import type { VisionItem } from '../types';
import { FiCheckCircle } from 'react-icons/fi';
import { Briefcase, Sun } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────
const DehydrationIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a5 5 0 0 0 5-5c0-3-5-7-5-7s-5 4-5 7a5 5 0 0 0 5 5z" />
    <path d="M12 2v4" />
    <path d="M12 2l-2 2" />
    <path d="M12 2l2 2" />
    <path d="M7 5v4" />
    <path d="M7 5l-1.5 1.5" />
    <path d="M7 5l1.5 1.5" />
    <path d="M17 5v4" />
    <path d="M17 5l-1.5 1.5" />
    <path d="M17 5l1.5 1.5" />
  </svg>
);

const MushroomIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12A8 8 0 0 0 4 12h16Z" />
    <path d="M10 12v6a2 2 0 0 0 4 0v-6" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS & THEME
// ─────────────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease },
  }),
};

const stripVariant = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.85, delay: 0.35 + i * 0.12, ease },
  }),
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.65, rotate: -15 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.6, delay: 0.45 + i * 0.12, ease },
  }),
};

const visionTheme = {
  green: {
    strip: 'from-[#1a6b3c] via-[#22c55e] to-[#86efac]',
    iconBox: 'bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border border-[#bbf7d0]',
    iconColor: '#15803d',
    glow: '#22c55e',
    hover: 'hover:border-emerald-200/80 hover:shadow-[0_18px_44px_rgba(26,107,60,0.14)]',
  },
  amber: {
    strip: 'from-[#d97706] via-[#f59e0b] to-[#fcd34d]',
    iconBox: 'bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border border-[#fde68a]',
    iconColor: '#d97706',
    glow: '#f59e0b',
    hover: 'hover:border-amber-200/80 hover:shadow-[0_18px_44px_rgba(245,158,11,0.12)]',
  },
} as const;

type VisionThemeKey = keyof typeof visionTheme;

// ─────────────────────────────────────────────────────────────────
// CARD DATA
// ─────────────────────────────────────────────────────────────────
const VISION_OVERVIEW_CARDS = [
  {
    id: 'dehydration',
    title: 'Multilevel Dehydration Complex',
    desc: 'Heavy-duty facility for maximum shelf-life, nutrient retention and zero-emission processing.',
    theme: 'green' as VisionThemeKey,
    Icon: DehydrationIcon
  },
  {
    id: 'mushrooms',
    title: 'Mushroom Cultivation Hub',
    desc: 'Climate-controlled greenhouse ecosystems for premium organic fungi yields.',
    theme: 'green' as VisionThemeKey,
    Icon: MushroomIcon
  },
  {
    id: 'integration',
    title: 'Vertical Integration (The Factory)',
    desc: 'End-to-end pipeline from raw harvest to premium market-ready goods.',
    theme: 'green' as VisionThemeKey,
    Icon: Briefcase
  },
  {
    id: 'solar',
    title: 'Agrisolar / Agrivoltaics',
    desc: 'Dual-use solar canopies powering the full 7-acre complex while growing crops below.',
    theme: 'green' as VisionThemeKey,
    Icon: Sun
  }
];

// ─────────────────────────────────────────────────────────────────
// OVERVIEW CARDS & ARROWS
// ─────────────────────────────────────────────────────────────────
const VisionArrow = ({ label, index }: { label: string; index: number }) => {
  return (
    <div className="flex-shrink-0 w-12 hidden lg:flex flex-col items-center gap-1.5 mx-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 + index * 0.14 }}
        className="flex items-center w-full"
      >
        <div className={`relative flex-1 h-[1.5px] overflow-hidden bg-emerald-200`}>
          <motion.span
            className={`absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent`}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </div>
        <div className="w-0 h-0 shrink-0" style={{
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: `7px solid #22c55e`,
          opacity: 0.9,
        }} />
      </motion.div>
      <span className={`text-[8px] font-bold tracking-[0.15em] uppercase text-emerald-500`}>
        {label}
      </span>
    </div>
  );
};

const VisionOverviewCard = ({ card, index, onClick }: { card: typeof VISION_OVERVIEW_CARDS[0]; index: number; onClick: () => void }) => {
  const t = visionTheme[card.theme];
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      onClick={onClick}
      className={`
        group relative flex-1 min-w-0 w-full lg:w-auto h-full p-1
        bg-white/80 backdrop-blur-2xl
        border border-white/90 rounded-[24px]
        overflow-hidden shadow-sm cursor-pointer
        transition-all duration-300 ${t.hover} flex flex-col items-center lg:items-start text-center lg:text-left
      `}
      whileHover={{ y: -7, scale: 1.018 }}
      transition={{ duration: 0.26, ease }}
    >
      <motion.div variants={stripVariant} custom={index} className={`absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r ${t.strip}`} />
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${t.glow}, transparent)`, filter: 'blur(32px)', transform: 'translate(30%,-30%)' }} />

      <div className="relative p-6 pt-7 lg:p-7 flex-1 flex flex-col justify-start w-full">
        <motion.div variants={iconVariant} custom={index} className={`relative w-[52px] h-[52px] rounded-[16px] flex items-center justify-center shrink-0 mb-5 mx-auto lg:mx-0 ${t.iconBox}`}>
          <motion.span className="absolute inset-[-6px] rounded-[22px] border-[1.5px] opacity-0"
            style={{ borderColor: t.iconColor }}
            animate={{ opacity: [0, 0.45, 0], scale: [1, 1.09, 1] }}
            transition={{ repeat: Infinity, duration: 3.2, delay: index * 1.1 }} />
          <card.Icon size={24} color={t.iconColor} />
        </motion.div>

        <motion.h3 variants={fadeUp} custom={index + 0.1} className="text-[17px] sm:text-lg font-extrabold tracking-[-0.02em] leading-[1.2] text-slate-900 mb-3">
          {card.title}
        </motion.h3>
        <motion.p variants={fadeUp} custom={index + 0.2} className="text-[13px] text-slate-500 leading-relaxed font-medium">
          {card.desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────
// DETAILED VISION CARD
// ─────────────────────────────────────────────────────────────────
const VisionCard = ({ item, index }: { item: VisionItem; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={`vision-${item.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 50, delay: index * 0.1 }}
      className={`scroll-mt-32 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white p-6 lg:p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-earth-dark/5 mb-12 relative overflow-hidden group hover:border-emerald-100 transition-colors duration-500`}
    >
      {/* Content Side */}
      <div className="w-full lg:w-[70%] z-10">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-3xl font-display font-semibold text-earth-dark">{item.title}</h3>
        </div>
        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
          {item.description}
        </p>
        <ul className="space-y-3">
          {item.bullets.map((bullet, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="flex items-start gap-3 text-text-primary"
            >
              <FiCheckCircle className="text-vibrant-lime text-xl shrink-0 mt-0.5" />
              <span className="leading-relaxed">{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Image Side */}
      <div className="w-full lg:w-[30%] aspect-[4/3] relative rounded-2xl overflow-hidden bg-earth-dark group-hover:shadow-2xl transition-shadow duration-500">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6B3C]/40 to-transparent mix-blend-multiply transition-opacity opacity-40 group-hover:opacity-20 z-10" />
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────────
export const VisionList = () => {
  return (
    <section id="vision" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-700 bg-white border border-emerald-200 shadow-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              A 7-Acre Blueprint
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight">
            The Master <span className="text-[#1A6B3C]">Plan</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A structurally integrated ecosystem maximizing agricultural yield and renewable energy.
          </p>
        </motion.div>

        {/* Overview Glassy Cards Row */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-2 mb-20 md:mb-28 w-full"
        >
          {VISION_OVERVIEW_CARDS.map((card, i) => {
            const label = 'NEXT';
            return (
              <div key={card.id} className="contents lg:flex items-center flex-1">
                <VisionOverviewCard
                  card={card}
                  index={i}
                  onClick={() => {
                    document.getElementById(`vision-${card.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                />
                {i < VISION_OVERVIEW_CARDS.length - 1 && <VisionArrow label={label} index={i} />}
              </div>
            );
          })}
        </motion.div>

        {/* Vision Details Stack */}
        <div className="space-y-4">
          {visionItems.map((item, index) => (
            <VisionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
