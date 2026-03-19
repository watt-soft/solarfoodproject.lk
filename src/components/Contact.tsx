import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

// ✅ Your real Google Apps Script Web App URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzsm0a7IJZQacDFIfuXpWp2-j9CjTA-T7_XXE-k5nNLdzsPhIyDvUAkBpleQujl4pla/exec';

const GOOGLE_MAPS_SRC =
  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d796.9341572439677!2d80.49459754622079!3d8.531578671210093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzEnNTIuNiJOIDgwwrAyOSc0MC43IkU!5e1!3m2!1sen!2slk!4v1773731257117!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

const contactCards = [
  { icon: FiPhone, label: 'Phone', value: '+94 76 779 6422', href: 'tel:+94767796422' },
  { icon: FiMail, label: 'Email', value: 'investors@solarfoodproject.com', href: 'mailto:investors@solarfoodproject.com' },
  { icon: FiMapPin, label: 'Address', value: 'Medawachchiya, Sri Lanka', href: undefined },
  { icon: FiClock, label: 'Business Hours', value: 'Mon – Fri, 9 AM – 5 PM', href: undefined },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const payload = {
      name: (fd.get('name') as string).trim(),
      email: (fd.get('email') as string).trim(),
      phone: (fd.get('phone') as string).trim(),
      message: (fd.get('message') as string).trim(),
      timestamp: new Date().toLocaleString('en-LK', { timeZone: 'Asia/Colombo' }),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('loading');

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // required for Apps Script — response will be opaque (normal)
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary-bg scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-sm px-4 py-2 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              CONTACT US
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-dark mb-4">
            Partner With the <span className="text-[#1A6B3C]">Future</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get in touch with our executive team for investment opportunities and technical deep dives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ───── Left Column ───── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {contactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-white p-5 rounded-2xl border border-earth-dark/5 shadow-sm hover:shadow-md transition-all"
                >
                  <card.icon className="text-2xl text-forest-green mb-3" />
                  <div className="text-xs uppercase tracking-widest text-text-secondary font-semibold mb-1">{card.label}</div>
                  {card.href ? (
                    <a href={card.href} className="text-sm font-medium text-earth-dark hover:text-forest-green transition-colors break-all">
                      {card.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-earth-dark">{card.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-earth-dark/5 shadow-sm h-[280px]">
              <iframe
                src={GOOGLE_MAPS_SRC}
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Solar Food Project Location"
              />
            </div>
          </motion.div>

          {/* ───── Right Column: Form ───── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-earth-dark/5 shadow-sm h-full flex flex-col">
              <h3 className="text-2xl font-display font-semibold text-earth-dark mb-6">Send us a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-fresh-mint bg-secondary-surface focus:border-forest-green focus:ring-2 focus:ring-forest-green/15 outline-none transition-all text-text-primary placeholder:text-text-secondary/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-fresh-mint bg-secondary-surface focus:border-forest-green focus:ring-2 focus:ring-forest-green/15 outline-none transition-all text-text-primary placeholder:text-text-secondary/40"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1.5">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+94 77 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-fresh-mint bg-secondary-surface focus:border-forest-green focus:ring-2 focus:ring-forest-green/15 outline-none transition-all text-text-primary placeholder:text-text-secondary/40"
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your investment interest…"
                    className="w-full px-4 py-3 rounded-xl border border-fresh-mint bg-secondary-surface focus:border-forest-green focus:ring-2 focus:ring-forest-green/15 outline-none transition-all text-text-primary placeholder:text-text-secondary/40 resize-none"
                  />
                </div>

                {/* Toast Feedback */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 border border-green-200 px-4 py-3 rounded-xl"
                  >
                    <FiCheck size={16} /> Message sent! We'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 px-4 py-3 rounded-xl"
                  >
                    <FiAlertCircle size={16} /> Please fill in all required fields and try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full mt-auto py-3.5 rounded-full bg-vibrant-lime text-earth-dark font-display font-bold text-lg shadow-[0_8px_32px_rgba(227,239,38,0.4)] hover:shadow-[0_12px_40px_rgba(227,239,38,0.5)] transition-all flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      Sending…
                      <span className="w-10 h-10 bg-earth-dark text-white rounded-full flex items-center justify-center shrink-0">
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="w-10 h-10 bg-earth-dark text-white rounded-full group-hover:bg-forest-green transition-colors flex items-center justify-center shrink-0">
                        <FiSend size={18} className="-ml-0.5" />
                      </span>
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};