import { motion } from 'motion/react';
import { BRAND } from '../data/links';

interface IntroSplashProps {
  onSkip: () => void;
}

/**
 * Creative "Abertura da Roda" pre-entry intro:
 * Sweeping green, yellow, and navy brushstroke arcs gather around the official logo
 * before the logo glides smoothly via shared layoutId into the main page header.
 */
export function IntroSplash({ onSkip }: IntroSplashProps) {
  return (
    <motion.div
      key="intro-curtain"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSkip}
      role="presentation"
      className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[#F5F7FA] px-6 select-none"
    >
      {/* Top tri-color hairline */}
      <div className="fixed inset-x-0 top-0 flex h-[3.5px] w-full" aria-hidden="true">
        <span className="h-full w-[38%] bg-[#13852B]" />
        <span className="h-full w-[24%] bg-[#FBC707]" />
        <span className="h-full w-[38%] bg-[#111654]" />
      </div>

      {/* Animated Capoeira Roda Brushstroke Rings framing the logo */}
      <div className="relative flex items-center justify-center">
        <motion.svg
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none h-[270px] w-[270px] sm:h-[310px] sm:w-[310px]"
          initial={{ rotate: -26, scale: 0.86, opacity: 0 }}
          animate={{ rotate: 12, scale: 1, opacity: 1 }}
          exit={{ scale: 1.14, opacity: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Green upper-left roda sweep */}
          <motion.path
            d="M44 148C48 80 104 30 172 34C208 36 240 53 262 79"
            stroke="#13852B"
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Golden-yellow sweeping middle arc */}
          <motion.path
            d="M276 122C290 184 256 250 194 274C162 286 126 285 96 271"
            stroke="#FBC707"
            strokeWidth="7.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.95 }}
            transition={{ duration: 0.76, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Deep royal navy grounding arc */}
          <motion.path
            d="M72 254C36 220 26 168 42 118"
            stroke="#111654"
            strokeWidth="5.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: 0.78 }}
            transition={{ duration: 0.68, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Delicate inner compass ring */}
          <circle
            cx="160"
            cy="160"
            r="116"
            stroke="#111654"
            strokeWidth="1.2"
            strokeOpacity="0.14"
            strokeDasharray="48 16 18 16"
          />
        </motion.svg>

        {/* Official Logo centered — shares layoutId with main header logo for smooth flight */}
        <motion.img
          layoutId="cnn-official-logo"
          src={BRAND.logoSrc}
          alt={BRAND.logoAlt}
          decoding="async"
          fetchPriority="high"
          referrerPolicy="no-referrer"
          initial={{ scale: 0.78, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            opacity: { duration: 0.4, ease: 'easeOut' },
            scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            layout: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
          }}
          className="absolute h-[178px] w-auto max-w-[230px] object-contain sm:h-[208px] sm:max-w-[260px]"
        />
      </div>

      {/* Gentle welcoming phrase beneath the ring */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 font-display text-[0.95rem] font-semibold tracking-[0.01em] text-[#111654]/80"
      >
        {BRAND.subtitle}
      </motion.p>
    </motion.div>
  );
}
