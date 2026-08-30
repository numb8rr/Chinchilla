'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ChinchillaMascot from './ChinchillaMascot';

interface CarType {
  id: string;
  label: string;
 priceRange: [number, number];
}

const CAR_TYPES: CarType[] = [
  { id: 'sedan', label: 'Седан / Хэтчбек', priceRange: [250, 800] },
  { id: 'suv', label: 'Кроссовер / Внедорожник', priceRange: [500, 1200] },
  { id: 'van', label: 'Минивэн / Фургон', priceRange: [600, 1500] },
  { id: 'truck', label: 'Грузовик', priceRange: [800, 1800] },
  { id: 'moto', label: 'Мотоцикл', priceRange: [250, 500] },
];

const SERVICES = [
  { id: 'exterior', label: 'Наружная мойка', price: 500 },
  { id: 'complex', label: 'Комплексная мойка', price: 1700 },
  { id: 'stains', label: 'Удаление сложных пятен', price: 500 },
  { id: 'polish', label: 'Полировка кузова', price: 3500 },
  { id: 'scratches', label: 'Устранение сколов и царапин', price: 2500 },
  { id: 'preSale', label: 'Предпродажная подготовка', price: 4500 },
  { id: 'ceiling', label: 'Чистка потолка салона', price: 1200 },
];

const STEPS = ['Тип автомобиля', 'Дополнительные услуги', 'Результат'];

export default function Calculator() {
  const [step, setStep] = useState(0);
  const [carType, setCarType] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculatePrice = () => {
    const car = CAR_TYPES.find((c) => c.id === carType);
    let base = car ? (car.priceRange[0] + car.priceRange[1]) / 2 : 500;
    let extras = 0;
    selectedServices.forEach((sId) => {
      const s = SERVICES.find((sv) => sv.id === sId);
      if (s) extras += s.price;
    });
    const total = Math.round(base + extras);
    const low = Math.round(base * 0.8 + extras);
    const high = Math.round(base * 1.2 + extras);
    return { low, total, high };
  };

  const result = calculatePrice();

  const canNext = step === 0 ? !!carType : step === 1 ? true : false;

  return (
    <section id="calculator" className="py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Калькулятор
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-16"
        >
          Узнайте стоимость.
        </motion.h2>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs text-gray-400 mb-3">
            {STEPS.map((s, i) => (
              <span
                key={s}
                className={i === step ? 'text-[#0B0E1A] font-medium' : ''}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#2FD8E8] rounded-full"
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 0: Car type */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-center text-gray-500 mb-8">
                Выберите тип автомобиля
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAR_TYPES.map((car) => (
                  <button
                    key={car.id}
                    onClick={() => setCarType(car.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                      carType === car.id
                        ? 'border-[#2FD8E8] bg-[#2FD8E8]/5'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="block text-sm font-medium text-[#0B0E1A]">
                      {car.label}
                    </span>
                    <span className="block text-xs text-gray-400 mt-1">
                      от {car.priceRange[0]} до {car.priceRange[1]} ₽
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Extra services */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-center text-gray-500 mb-8">
                Добавьте дополнительные услуги
              </p>
              <div className="space-y-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300 ${
                      selectedServices.includes(s.id)
                        ? 'border-[#2FD8E8] bg-[#2FD8E8]/5'
                        : 'border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="text-sm font-medium text-[#0B0E1A]">
                      {s.label}
                    </span>
                    <span className="text-sm text-gray-400">{s.price.toLocaleString('ru-RU')} ₽</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Result */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <ChinchillaMascot size={160} className="mx-auto mb-8" />
              <p className="text-gray-500 mb-4">
                Предварительная стоимость
              </p>
              <div className="text-5xl sm:text-6xl font-bold text-[#0B0E1A] mb-2">
                {result.total.toLocaleString('ru-RU')} ₽
              </div>
              <p className="text-sm text-gray-400 mb-10">
                Примерный диапазон: {result.low.toLocaleString('ru-RU')} — {result.high.toLocaleString('ru-RU')} ₽
              </p>
              <a
                href="https://t.me/chinchilla763"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#2FD8E8] text-[#0B0E1A] font-semibold text-base hover:bg-[#2FD8E8]/90 transition-colors duration-300 shadow-[0_0_30px_rgba(47,216,232,0.25)]"
              >
                Записаться в Telegram
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < 2 && (
          <div className="flex justify-between mt-10">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              className={`text-sm text-gray-400 hover:text-[#0B0E1A] transition-colors ${
                step === 0 ? 'invisible' : ''
              }`}
            >
              &larr; Назад
            </button>
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canNext}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                canNext
                  ? 'bg-[#0B0E1A] text-white hover:bg-[#0B0E1A]/90'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              Далее
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="flex justify-start mt-10">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-gray-400 hover:text-[#0B0E1A] transition-colors"
            >
              &larr; Пересчитать
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
