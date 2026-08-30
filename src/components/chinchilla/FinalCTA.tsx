'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ChinchillaMascot from './ChinchillaMascot';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <ChinchillaMascot size={140} className="mx-auto mb-12" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B0E1A] mb-10"
        >
          Пусть машина
          <br />
          <span className="text-[#2FD8E8]">засияет.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
            href="tel:+79276957443"
            className="text-base text-gray-400 hover:text-[#0B0E1A] transition-colors duration-300"
          >
            +7 (927) 695-74-43
          </a>
        </motion.div>
      </div>
    </section>
  );
}
