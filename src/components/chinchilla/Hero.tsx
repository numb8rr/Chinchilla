'use client';

import { motion } from 'framer-motion';
import ChinchillaMascot from './ChinchillaMascot';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(47,216,232,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm font-medium text-[#2FD8E8] tracking-wide uppercase mb-6"
            >
              Автомойка и детейлинг в Самаре
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#0B0E1A] text-balance"
            >
              Твоя машина.
              <br />
              <span className="text-[#2FD8E8]">Как новая.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg sm:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Комплексная мойка, химчистка, полировка и детейлинг.
              Рейтинг 5.0 — 48 оценок на Яндекс Картах.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://t.me/chinchilla763"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#2FD8E8] text-[#0B0E1A] font-semibold text-base hover:bg-[#2FD8E8]/90 transition-colors duration-300 shadow-[0_0_30px_rgba(47,216,232,0.25)]"
              >
                Записаться
              </a>
              <a
                href="#gallery"
                className="text-base text-gray-400 hover:text-[#0B0E1A] transition-colors duration-300"
              >
                Посмотреть галерею &rarr;
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-14 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D4A843]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#0B0E1A] font-semibold">5.0</span> рейтинг
              </span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5F6F8] text-[#0B0E1A] font-medium text-xs">
                  Хорошее место 2026
                </span>
              </span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span>48 оценок</span>
            </motion.div>
          </div>

          {/* Mascot */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <ChinchillaMascot size={300} className="mx-auto lg:mx-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
