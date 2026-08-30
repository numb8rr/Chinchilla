'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  { value: 98, label: 'позитивных отзывов о сервисе', count: 43 },
  { value: 97, label: 'довольны качеством мойки', count: 37 },
  { value: 100, label: 'отмечают вежливость персонала', count: 27 },
  { value: 100, label: 'оценивают время ожидания', count: 20 },
];

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  return (
    <span>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {target}%
        </motion.span>
      ) : (
        '0%'
      )}
    </span>
  );
}

export default function TrustMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-28 lg:py-36 bg-[#F5F6F8]" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Почему нам доверяют
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Цифры, которые говорят сами.
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B0E1A] leading-none">
                <AnimatedNumber target={m.value} inView={inView} />
              </div>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-[200px] mx-auto">
                {m.label}
              </p>
              <p className="mt-1.5 text-xs text-gray-300">{m.count} отзывов</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
