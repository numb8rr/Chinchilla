'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/wet-box-1.png', label: 'Мокрый бокс', span: 'md:col-span-2' },
  { src: '/dry-box.png', label: 'Сухой бокс', span: '' },
  { src: '/wet-box-2.png', label: 'Мокрый бокс', span: '' },
  { src: '/waiting-area.jpeg', label: 'Зона ожидания', span: 'md:col-span-1' },
  { src: '/certificate.png', label: 'Сертификат Detail Seminar', span: 'md:col-span-2' },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-medium text-gray-400 tracking-wide uppercase mb-4"
        >
          Галерея
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B0E1A] mb-20"
        >
          Наше пространство.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative rounded-3xl overflow-hidden bg-[#F5F6F8] ${photo.span}`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                <span className="text-white/90 text-sm font-medium">{photo.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
