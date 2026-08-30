'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const reviews = [
  {
    text: 'Записываюсь через Max — очень удобно, не нужно звонить. Машина после комплексной мойки выглядит как из салона. Мастера вежливые, всё объясняют.',
    author: 'Алексей К.',
    detail: 'Комплексная мойка',
  },
  {
    text: 'Зона ожидания комфортная, кофе предложили. Результат превзошёл ожидания — салон очищен до идеала, даже потолок. Теперь только сюда.',
    author: 'Марина В.',
    detail: 'Химчистка салона',
  },
  {
    text: 'Приезжал со сложными пятнами на сиденьях — кофе и краска от детей. Убрали всё! Подробно рассказали, какую химию используют. Рекомендую.',
    author: 'Дмитрий С.',
    detail: 'Удаление пятен',
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="reviews" className="py-28 lg:py-36 bg-[#F5F6F8]" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Отзывы
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Слова клиентов.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <motion.article
              key={r.author}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-[#D4A843]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-[#0B0E1A] leading-relaxed mb-6">{r.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#0B0E1A]">{r.author}</span>
                <span className="text-xs text-gray-400">{r.detail}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://yandex.ru/maps/org/shinshilla/217077843620/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#2FD8E8] hover:text-[#0B0E1A] transition-colors duration-300"
          >
            Все 47 отзывов на Яндекс Картах &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
