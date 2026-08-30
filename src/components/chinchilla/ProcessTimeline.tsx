'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'Запись', desc: 'Через Telegram, VK, Max или наш сайт. Удобно и быстро.' },
  { num: '02', title: 'Приём авто', desc: 'Оцениваем состояние, согласовываем объём работ.' },
  { num: '03', title: 'Мойка и химчистка', desc: 'Профессиональная химия, внимательность к деталям.' },
  { num: '04', title: 'Контроль качества', desc: 'Проверяем каждый элемент перед выдачей.' },
  { num: '05', title: 'Выдача', desc: 'Машина сияет — вы довольны. Как из салона.' },
];

export default function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="py-28 lg:py-36 bg-[#F5F6F8]" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Процесс
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Пять шагов к чистоте.
        </motion.h2>

        <div className="relative">
          {/* Desktop line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center lg:px-2"
              >
                {/* Number circle */}
                <div className="mx-auto w-[104px] h-[104px] rounded-full border-2 border-[#2FD8E8]/30 flex items-center justify-center bg-white mb-6 relative z-10">
                  <span className="text-2xl font-bold text-[#2FD8E8]">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0B0E1A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[180px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
