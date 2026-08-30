'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export default function ChinchillaMascot({ size = 280, className = '', animate = true }: MascotProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...(animate
        ? {
            animate: { scale: [1, 1.015, 1] },
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }
        : {})}
    >
      {/* Glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          background: 'radial-gradient(circle, rgba(47,216,232,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Real logo image */}
      <Image
        src="/logo.jpeg"
        alt="Маскот Шиншилла"
        width={size}
        height={size}
        className="relative z-10 object-contain"
        sizes={`${size}px`}
        priority
      />
    </motion.div>
  );
}
