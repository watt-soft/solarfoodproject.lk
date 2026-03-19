import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const stats = [
  { value: '7.0+', label: 'Strategic Acres' },
  { value: '100%', label: 'Agrivoltaic Solar Ecosystem' },
  { value: 'Zero-Waste', label: 'Vertical Integration' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] lg:h-screen lg:min-h-0 flex flex-col overflow-hidden bg-earth-dark z-10 w-full"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-background.jpg')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-earth-dark/50 z-0" />

      {/* Gradient fade into cards at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-earth-dark/80 to-transparent z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-between pt-20 pb-6 md:pt-24 lg:pt-24 lg:pb-8">

        {/* Hero Text */}
        <motion.div
          className="max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center py-4 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline — reduced from 5rem to 3.75rem */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-4 lg:mb-4 drop-shadow-lg"
          >
            Investing in a Brighter Future with{' '}
            <span className="text-vibrant-lime drop-shadow-md">Solar Energy</span>{' '}
            and Sustainable Agriculture
          </motion.h1>

          {/* Subtitle — reduced from text-xl/2xl to text-base/lg */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto drop-shadow"
          >
            7-Acres of Zero-Waste Innovation. Integrating Green Energy,
            Premium Food Production, and Food Safety.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 lg:mb-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-full bg-vibrant-lime text-earth-dark font-display font-bold text-sm lg:text-base shadow-[0_8px_32px_rgba(227,239,38,0.4)] hover:shadow-[0_12px_40px_rgba(227,239,38,0.5)] transition-all flex items-center gap-2 lg:gap-3 group"
            >
              Get Started
              <span className="bg-earth-dark text-white p-1.5 rounded-full group-hover:bg-forest-green transition-colors">
                <FiArrowRight size={16} className="lg:w-[18px] lg:h-[18px]" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stat Cards — anchored to bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full mt-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card px-4 py-4 lg:px-6 lg:py-5 transition-all flex items-center lg:block gap-4 lg:gap-0"
              >
                <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 rounded-full bg-vibrant-lime/20 flex items-center justify-center lg:mb-3 relative z-10">
                  <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-vibrant-lime animate-pulse" />
                </div>
                <div className="relative z-10">
                  <div className="text-xl lg:text-2xl font-display font-bold text-white lg:mb-1 leading-none text-left lg:text-center xl:text-left drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-xs text-white/80 font-medium uppercase tracking-widest mt-1 lg:mt-0 text-left lg:text-center xl:text-left drop-shadow-md">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};