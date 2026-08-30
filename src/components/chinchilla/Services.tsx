'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Droplets, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Комплексная мойка',
    price: '1 700 ₽',
    description:
      'Кузов + шампунь 1 фаза + протирка + пылесос + влажная уборка салона + мойка стёкол изнутри + натирка пластика. Полный цикл заботы о вашем авто.',
  },
  {
    icon: Droplets,
    title: 'Наружная мойка',
    price: '500 ₽',
    description:
      'Удаление грязи, битумов, насекомых с кузова. Быстро, качественно, без повреждения ЛКП. Идеально для регулярной поддержки чистоты.',
  },
  {
    icon: Paintbrush,
    title: 'Удаление сложных пятен',
    price: '500 ₽',
    description:
      'Краска, кровь, кофе, молочные продукты и другие стойкие загрязнения. Профессиональная химия и опыт мастеров.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Услуги
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Всё, что нужно вашей машине.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-[#2FD8E8]/30 hover:shadow-[0_8px_40px_rgba(47,216,232,0.08)] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-[#2FD8E8] transition-all duration-500 rounded-full" />

              <div className="w-12 h-12 rounded-2xl bg-[#F5F6F8] flex items-center justify-center mb-6">
                <s.icon className="w-5 h-5 text-[#2FD8E8]" strokeWidth={1.8} />
              </div>

              <h3 className="text-xl font-semibold text-[#0B0E1A] mb-2">{s.title}</h3>
              <p className="text-2xl font-bold text-[#0B0E1A] mb-4">{s.price}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          Также: полировка кузова, устранение царапин и сколов, предпродажная подготовка, чистка потолка салона
        </motion.p>
      </div>
    </section>
  );
}
