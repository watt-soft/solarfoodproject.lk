// src/components/Milestones.tsx
// ─────────────────────────────────────────────────────────────────
// Transparency & Milestones — Production component
// Framer Motion powered, fully accessible, light-theme investor UI
// Layout order: Header → PhaseCards strip → Stat chips → Accordion
// ─────────────────────────────────────────────────────────────────

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle2, Circle, PlayCircle, ChevronDown,
  Clock, 
  ShieldCheck, Activity, Radio,
} from 'lucide-react';
import { phases } from '../data/progressData';
import type { MilestoneItem } from '../types';

// ─────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────
const T = {
  primary: '#1A6B3C',
  accent: '#F59E0B',
  accentDark: '#D97706',
  gl: '#22C55E',
};

// ─────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
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
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.14, ease },
  }),
};

const stripVariant = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.85, delay: 0.45 + i * 0.14, ease },
  }),
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.65, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, rotate: 0,
    transition: { duration: 0.5, delay: 0.52 + i * 0.14, ease },
  }),
};

// ─────────────────────────────────────────────────────────────────
// PHASE CARD THEME MAP
// ─────────────────────────────────────────────────────────────────
const phaseTheme = {
  green: {
    strip: 'from-[#1a6b3c] via-[#22c55e] to-[#86efac]',
    badge: 'bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]',
    iconBox: 'bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border border-[#bbf7d0]',
    iconColor: '#15803d',
    glow: '#22c55e',
    hover: 'hover:border-emerald-200/80 hover:shadow-[0_18px_44px_rgba(26,107,60,0.14)]',
  },
  amber: {
    strip: 'from-[#d97706] via-[#f59e0b] to-[#fcd34d]',
    badge: 'bg-[#fffbeb] text-[#b45309] border border-[#fde68a]',
    iconBox: 'bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border border-[#fde68a]',
    iconColor: '#d97706',
    glow: '#f59e0b',
    hover: 'hover:border-amber-200/80 hover:shadow-[0_18px_44px_rgba(245,158,11,0.12)]',
  },
  slate: {
    strip: 'from-[#475569] via-[#94a3b8] to-[#cbd5e1]',
    badge: 'bg-[#f8fafc] text-[#64748b] border border-[#e2e8f0]',
    iconBox: 'bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0]',
    iconColor: '#64748b',
    glow: '#94a3b8',
    hover: 'hover:border-slate-200 hover:shadow-[0_18px_44px_rgba(100,116,139,0.10)]',
  },
} as const;

type PhaseThemeKey = keyof typeof phaseTheme;

interface PhaseCardItem {
  num: string; title: string; desc: string;
  theme: PhaseThemeKey;
  Icon: React.FC<{ size?: number; color?: string }>;
}

const PHASE_CARDS: PhaseCardItem[] = [
  {
    num: 'Phase 1', title: 'Core Operations',
    desc: 'Foundational capabilities — site, legal, engineering, and solar systems.',
    theme: 'green', Icon: ShieldCheck
  },
  {
    num: 'Phase 2', title: 'Capacity Expansion',
    desc: 'Scale production lines, lab upgrades, and export market development.',
    theme: 'amber', Icon: Activity
  },
  {
    num: 'Phase 3', title: 'Diversification',
    desc: 'New product lines, automation, advanced certifications, global markets.',
    theme: 'slate', Icon: Radio
  },
];

// ─────────────────────────────────────────────────────────────────
// PHASE ARROW
// ─────────────────────────────────────────────────────────────────
const PhaseArrow = ({ active, index }: { active: boolean; index: number }) => {
  const { t } = useTranslation();
  return (
    <div className="flex-shrink-0 w-11 hidden sm:flex flex-col items-center gap-1.5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 + index * 0.14 }}
        className="flex items-center"
      >
        {/* Line with shimmer */}
        <div className={`relative w-6 h-[1.5px] overflow-hidden ${active ? 'bg-emerald-200' : 'bg-slate-200'}`}>
          <motion.span
            className={`absolute inset-y-0 w-full ${active
                ? 'bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
                : 'bg-gradient-to-r from-transparent via-slate-300 to-transparent'
              }`}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: active ? 2 : 3, ease: 'linear' }}
          />
        </div>
        {/* Arrowhead */}
        <div className="w-0 h-0" style={{
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: `7px solid ${active ? '#22c55e' : '#94a3b8'}`,
          opacity: active ? 0.9 : 0.45,
        }} />
      </motion.div>
      <span className={`text-[8px] font-bold tracking-[0.12em] uppercase ${active ? 'text-emerald-400' : 'text-slate-300'}`}>
        {active ? t('milestones.status.next') : t('milestones.status.future')}
      </span>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// PHASE OVERVIEW CARD (the 3 cards at top)
// ─────────────────────────────────────────────────────────────────
const PhaseOverviewCard = ({ card, index, onClick }: { card: PhaseCardItem; index: number; onClick?: () => void }) => {
  const tTheme = phaseTheme[card.theme];
  const { t } = useTranslation();
  return (
    <motion.div
      variants={cardVariant}
      custom={index}
      onClick={onClick}
      className={`
        group relative flex-1 min-w-0 w-full lg:w-auto
        bg-white/80 backdrop-blur-2xl
        border border-white/90 rounded-[22px]
        overflow-hidden shadow-sm ${onClick ? 'cursor-pointer' : 'cursor-default'}
        transition-all duration-300 ${tTheme.hover}
      `}
      whileHover={{ y: -7, scale: 1.018 }}
      transition={{ duration: 0.26, ease }}
    >
      {/* Colour accent strip */}
      <motion.div
        variants={stripVariant}
        custom={index}
        className={`absolute top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r ${tTheme.strip}`}
      />

      {/* Inner corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${tTheme.glow}, transparent)`, filter: 'blur(32px)', transform: 'translate(30%,-30%)' }}
      />

      <div className="relative p-[22px] pt-6">
        {/* Phase badge */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.14 }}
          className={`absolute top-[18px] right-[18px] text-[9px] font-extrabold tracking-[0.14em] uppercase px-[11px] py-[4px] rounded-full ${tTheme.badge}`}
        >
          {t(`milestones.phase-${index + 1}.tag`)}
        </motion.span>

        {/* Icon box */}
        <motion.div
          variants={iconVariant}
          custom={index}
          className={`relative w-[52px] h-[52px] rounded-[15px] flex items-center justify-center mb-4 ${tTheme.iconBox}`}
        >
          <motion.span
            className="absolute inset-[-5px] rounded-[20px] border-[1.5px] opacity-0"
            style={{ borderColor: tTheme.iconColor }}
            animate={{ opacity: [0, 0.45, 0], scale: [1, 1.09, 1] }}
            transition={{ repeat: Infinity, duration: 3.2, delay: index * 1.1 }}
          />
          <card.Icon size={22} color={tTheme.iconColor} />
        </motion.div>

        {/* Text */}
        <motion.h3 variants={fadeUp} custom={index + 0.1}
          className="text-[17px] font-extrabold tracking-[-0.02em] leading-[1.22] text-slate-900 mb-2">
          {t(`milestones.phase-${index + 1}.name`)}
        </motion.h3>
        <motion.p variants={fadeUp} custom={index + 0.2}
          className="text-[12px] text-slate-500 leading-[1.65]">
          {t(`milestones.phase-${index + 1}.overviewDesc`)}
        </motion.p>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────
// PROGRESS RING
// ─────────────────────────────────────────────────────────────────
const ProgressRing = ({ pct, size = 52, stroke = 4, color = T.primary }: {
  pct: number; size?: number; stroke?: number; color?: string;
}) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E5E7EB" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: circ - (pct / 100) * circ }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
      />
    </svg>
  );
};


// ─────────────────────────────────────────────────────────────────
// MILESTONE STATUS CONFIG
// ─────────────────────────────────────────────────────────────────
type TagClass = MilestoneItem['tagClass'];

const statusConfig: Record<TagClass, {
  labelKey: string;
  Icon: React.FC<{ className?: string }>;
  itemBg: string; itemBorder: string; badge: string; dot: string;
}> = {
  done: {
    labelKey: 'done',
    Icon: ({ className }) => <CheckCircle2 className={className} />,
    itemBg: 'bg-emerald-50/80', itemBorder: 'border-emerald-200/60',
    badge: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500',
  },
  active: {
    labelKey: 'active',
    Icon: ({ className }) => <PlayCircle className={className} />,
    itemBg: 'bg-amber-50/80', itemBorder: 'border-amber-200/60',
    badge: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500',
  },
  planned: {
    labelKey: 'planned',
    Icon: ({ className }) => <Circle className={className} />,
    itemBg: 'bg-white', itemBorder: 'border-slate-100',
    badge: 'bg-slate-100 text-slate-500', dot: 'bg-slate-300',
  },
};

// ─────────────────────────────────────────────────────────────────
// MILESTONE LIST ITEM
// ─────────────────────────────────────────────────────────────────
const MilestoneListItem = ({ item, index, phaseId }: { item: MilestoneItem; index: number; phaseId: string }) => {
  const cfg = statusConfig[item.tagClass];
  const { t } = useTranslation();

  return (
    <motion.li
      variants={fadeUp}
      custom={index}
      className={`
        flex items-start gap-3.5 p-4 rounded-2xl border
        transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5
        ${cfg.itemBg} ${cfg.itemBorder}
      `}
    >
      <div className="mt-0.5 shrink-0">
        <cfg.Icon className={`w-5 h-5 ${item.tagClass === 'active' ? 'text-amber-500' :
            item.tagClass === 'done' ? 'text-emerald-600' : 'text-slate-300'
          }`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold leading-snug ${item.tagClass === 'planned' ? 'text-slate-400' : 'text-slate-800'
          }`}>
          {t(`milestones.${phaseId}.items.${item.id}`)}
        </p>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${cfg.badge}`}>
            {item.tagClass === 'active' && (
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
            )}
            {t(`milestones.status.${cfg.labelKey}`)}
          </span>
          {item.date && (
            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-medium">
              <Clock size={10} />{item.date}
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
};

// ─────────────────────────────────────────────────────────────────
// ACCORDION PHASE CARD
// ─────────────────────────────────────────────────────────────────
const AccordionPhaseCard = ({
  phase, isOpen, onClick, index,
}: {
  phase: (typeof phases)[0];
  isOpen: boolean; onClick: () => void; index: number;
}) => {
  const { t } = useTranslation();
  const doneCount = phase.items.filter(i => i.tagClass === 'done').length;
  const activeCount = phase.items.filter(i => i.tagClass === 'active').length;
  const total = phase.items.length;
  const hasStarted = doneCount > 0 || activeCount > 0;
  const phaseColor = index === 0 ? T.primary : index === 1 ? T.accent : '#6B7280';

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`
        rounded-3xl border bg-white transition-all duration-300
        ${isOpen
          ? 'border-emerald-200 shadow-xl shadow-emerald-50'
          : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
        }
      `}
    >
      {/* Header */}
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full text-left p-6 md:p-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-3xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          {/* Left */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span
                className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: `${phaseColor}14`, color: phaseColor }}
              >
                {phase.tag}
              </span>
              {hasStarted && (
                <div className="flex items-center gap-2">
                  <ProgressRing pct={phase.progress} size={32} stroke={3} color={phaseColor} />
                  <span className="text-xs font-semibold text-slate-500">{phase.progress}%</span>
                </div>
              )}
              {activeCount > 0 && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  {t('milestones.status.activeNow')}
                </span>
              )}
            </div>
            <h3 className={`text-xl md:text-2xl font-bold leading-tight transition-colors duration-200 ${isOpen ? 'text-emerald-700' : 'text-slate-800 group-hover:text-emerald-700'
              }`}>
              {t(`milestones.${phase.id}.name`)}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mt-2 max-w-2xl">{t(`milestones.${phase.id}.desc`)}</p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="flex items-center gap-4 sm:border-l sm:border-slate-100 sm:pl-6">
              <div className="text-center">
                <div className="text-3xl font-bold leading-none text-emerald-600">{doneCount}</div>
                <div className="text-[9px] font-bold tracking-widest uppercase text-slate-400 mt-1">
                  {t('milestones.status.of')} {total}<br />{t('milestones.status.doneSuffix')}
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease }}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${isOpen
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-slate-200 text-slate-400 group-hover:border-emerald-400 group-hover:text-emerald-600'
                }`}
            >
              <ChevronDown size={16} strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>

        {/* Progress bar */}
        {hasStarted && (
          <div className="mt-5">
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${phaseColor}, ${phaseColor}cc)` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${phase.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease, delay: 0.3 }}
              />
            </div>
          </div>
        )}
      </button>

      {/* Expandable body — CSS grid-based, always in DOM, no layout shift */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div
            className="px-6 pb-8 md:px-8 border-t border-slate-100 pt-6"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 0.4s ease',
              transitionDelay: isOpen ? '0.2s' : '0s',
            }}
          >
            {/* Summary strip */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                {total} {t('milestones.status.milestones')}
              </span>
              <div className="flex items-center gap-3">
                {doneCount > 0 && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 size={12} /> {doneCount} {t('milestones.status.doneSuffix')}
                  </span>
                )}
                {activeCount > 0 && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                    <PlayCircle size={12} /> {activeCount} {t('milestones.status.active')}
                  </span>
                )}
                {total - doneCount - activeCount > 0 && (
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <Circle size={12} /> {total - doneCount - activeCount} {t('milestones.status.planned')}
                  </span>
                )}
              </div>
            </div>

            {/* Milestone grid */}
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {phase.items.map((item, idx) => (
                <MilestoneListItem key={item.id} item={item} index={idx} phaseId={phase.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────
export const Milestones = () => {
  const { t } = useTranslation();
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openPhaseId, setOpenPhaseId] = useState<string | null>('all');

  // Click toggles the accordion on/off
  const togglePhase = (id: string) =>
    setOpenPhaseId(prev => (prev === id ? null : id));

  // Hover: exclusive switch — only ONE phase open at a time
  const handleMouseEnter = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setOpenPhaseId(id);
    }, 150);
  };

  const handleMouseLeave = (_id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    // Don't close on leave — keep current open until user hovers another
  };

  return (
    <section id="transparency" className="relative pt-8 pb-24 md:pt-12 md:pb-32 bg-slate-50 scroll-mt-28">

      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D1FAE5 0%, transparent 70%)' }} />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FEF3C7 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 1. HEADER ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-700 bg-white border border-emerald-200 shadow-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
              {t('milestones.badge')}
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-5 leading-[1.08] tracking-tight">
            {t('milestones.title1')}{' '}
            <em className="not-italic" style={{ color: T.primary }}>{t('milestones.titleHighlight')}</em>
          </motion.h2>

          <motion.p variants={fadeUp} custom={2}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t('milestones.subtitle')}
          </motion.p>
        </motion.div>

        {/* ── 2. PHASE OVERVIEW CARDS ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mb-12 w-full"
        >
          {PHASE_CARDS.map((card, i) => (
            <div key={card.num} className="contents lg:flex items-center w-full lg:w-auto">
              <PhaseOverviewCard card={card} index={i} onClick={() => {
                const phaseId = `phase-${i + 1}`;
                setOpenPhaseId(prev => prev === phaseId ? null : phaseId);
                setTimeout(() => {
                  document.getElementById(phaseId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
              }} />
              {i < PHASE_CARDS.length - 1 && <PhaseArrow active={i === 0} index={i} />}
            </div>
          ))}
        </motion.div>


        {/* ── 4. ACCORDION ── */}
        <div className="flex flex-col gap-4">
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              id={phase.id}
              onMouseEnter={() => handleMouseEnter(phase.id)}
              onMouseLeave={() => handleMouseLeave(phase.id)}
            >
              <AccordionPhaseCard
                phase={phase}
                index={index}
                isOpen={openPhaseId === 'all' || openPhaseId === phase.id}
                onClick={() => togglePhase(phase.id)}
              />
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
};

export default Milestones;