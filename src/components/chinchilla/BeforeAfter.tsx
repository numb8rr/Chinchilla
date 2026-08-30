'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function BeforeAfter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!dragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section className="py-28 lg:py-36 bg-[#F5F6F8]" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Результат
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-6"
        >
          Видно разницу.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-gray-500 mb-16"
        >
          Чистка салона — перетащите ползунок
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-3xl rounded-3xl overflow-hidden shadow-[0_8px_60px_rgba(0,0,0,0.08)] select-none"
          ref={containerRef}
          onMouseDown={(e) => { dragging.current = true; handleMove(e.clientX); }}
          onMouseUp={() => { dragging.current = false; }}
          onMouseLeave={() => { dragging.current = false; }}
          onMouseMove={(e) => { handleMove(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; handleMove(e.touches[0].clientX); }}
          onTouchEnd={() => { dragging.current = false; }}
          onTouchMove={(e) => { handleMove(e.touches[0].clientX); }}
        >
          {/* After (bottom layer) */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/after-salon.jpeg"
              alt="Салон после чистки"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Before (top layer, clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/before-salon.jpeg"
                alt="Салон до чистки"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>

          {/* Labels */}
          <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm z-10">
            До
          </span>
          <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#2FD8E8]/90 text-[#0B0E1A] text-xs font-medium backdrop-blur-sm z-10">
            После
          </span>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none"
            style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          />

          {/* Slider handle */}
          <div
            className="absolute top-1/2 w-10 h-10 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center z-20 pointer-events-none cursor-ew-resize"
            style={{ left: `${sliderPos}%`, transform: 'translate(-50%, -50%)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0E1A" strokeWidth="2" strokeLinecap="round">
              <path d="M8 4l-6 8 6 8" />
              <path d="M16 4l6 8-6 8" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
