'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Сколько времени занимает комплексная мойка?',
    a: 'В среднем 40–60 минут в зависимости от типа автомобиля и степени загрязнения. Химчистка салона может занять от 1 до 2 часов. Точное время сообщим при записи.',
  },
  {
    q: 'Как можно оплатить?',
    a: 'Мы принимаем наличные, банковские карты (в том числе оплату прямо из машины), СБП, QR-код, онлайн-оплату и безналичный расчёт. Удобно именно так, как вам.',
  },
  {
    q: 'Доступна ли парковка для людей с инвалидностью?',
    a: 'Да, у нас есть специальная парковка и полная доступность для маломобильных групп. Обязательно напишите об этом при записи — подберём наиболее удобное место.',
  },
  {
    q: 'Что входит в комплексную мойку за 1 700 ₽?',
    a: 'Кузов + шампунь 1 фаза + протирка + пылесос + влажная уборка салона + мойка стёкол изнутри + натирка пластика. Это полный набор для идеальной чистоты внутри и снаружи.',
  },
  {
    q: 'Есть ли бонусы за первое посещение?',
    a: 'Да! Новым клиентам мы предоставляем специальные условия. Подробности уточняйте при записи через мессенджеры или по телефону.',
  },
  {
    q: 'Работаете ли вы с грузовиками и мотоциклами?',
    a: 'Да, мы моем легковые автомобили, кроссоверы, минивэны, фургоны, грузовики и мотоциклы. Стоимость зависит от типа и размера транспорта.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-28 lg:py-36 bg-[#F5F6F8]" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Частые вопросы
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Ответы.
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-gray-200 first:border-t"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    isOpen ? 'text-[#0B0E1A]' : 'text-[#0B0E1A]/80 group-hover:text-[#0B0E1A]'
                  }`}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-gray-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
