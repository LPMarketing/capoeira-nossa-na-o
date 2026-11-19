import { useState } from 'react';
import { CLICAE_PROMO } from '../data/links';

/**
 * Discreet promotional card for Clicaê Bio placed after the masters' Instagram links
 * and before the footer credit. Single clickable anchor, no nested links, no heavy animations.
 */
export function ClicaeCard() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <a
      href={CLICAE_PROMO.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-3.5 rounded-2xl border border-[#FBC707]/55 bg-white p-[18px] text-left shadow-[0_6px_20px_rgba(17,22,84,0.05)] transition-all duration-200 hover:border-[#E5B000] hover:shadow-[0_8px_24px_rgba(17,22,84,0.08)] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654]"
    >
      {/* Original Clicaê logo preserved in proportions and colors (~40px) */}
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-[#111654]/10">
        {!logoFailed ? (
          <img
            src={CLICAE_PROMO.logoSrc}
            alt={CLICAE_PROMO.logoAlt}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setLogoFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#111654] text-sm font-bold text-white">
            ê
          </div>
        )}
      </div>

      {/* Text stack with natural mobile wrapping, zero truncation, crisp contrast */}
      <div className="min-w-0 flex-1">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-[#646E8F]">
          {CLICAE_PROMO.kicker}
        </p>
        <p className="mt-0.5 font-display text-[0.9375rem] font-semibold leading-snug text-[#111654]">
          {CLICAE_PROMO.title}
        </p>
        <p className="mt-1.5 inline-flex items-center gap-1 text-[0.84375rem] font-semibold text-[#A87900] transition-colors duration-150 group-hover:text-[#8E6500]">
          <span>{CLICAE_PROMO.cta}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-150 group-hover:translate-x-1"
          >
            →
          </span>
        </p>
      </div>
    </a>
  );
}
