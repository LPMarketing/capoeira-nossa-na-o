import { AnimatePresence, LayoutGroup, MotionConfig, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ClicaeCard } from './components/ClicaeCard';
import {
  ArrowUpRightIcon,
  BerimbauIcon,
  InstagramMiniBadge,
  StudentRegistrationCreativeIcon,
  WebsiteGlobeCreativeIcon,
  WhatsAppCreativeIcon,
} from './components/Icons';
import { IntroSplash } from './components/IntroSplash';
import { LocationCard } from './components/LocationCard';
import { RodaBackdrop } from './components/RodaBackdrop';
import {
  BRAND,
  CLICAE_PROMO,
  INSTAGRAM_LINK,
  MASTERS_SECTION,
  STUDENT_REGISTRATION_LINK,
  TOP_LINKS,
} from './data/links';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function App() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [showIntro, setShowIntro] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!showIntro) return;
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  const whatsappLink = TOP_LINKS.find((l) => l.id === 'whatsapp')!;
  const websiteLink = TOP_LINKS.find((l) => l.id === 'website')!;

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <div className="relative min-h-dvh w-full overflow-x-clip bg-[#F4F6FA] text-[#111654]">
          <RodaBackdrop />

          {/* Pre-entry animated logo opening — preserved intact */}
          <AnimatePresence>
            {showIntro && <IntroSplash onSkip={() => setShowIntro(false)} />}
          </AnimatePresence>

          <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[480px] flex-col justify-between px-4 py-4 sm:px-6 sm:py-8">
            <div>
              {/* 1. Boutique Academy Hero Stage — unifies brand identity & WhatsApp CTA */}
              <section
                aria-label="Apresentação da academia"
                className="relative overflow-hidden rounded-[28px] border border-[#111654]/10 bg-white shadow-[0_14px_38px_rgba(17,22,84,0.08)]"
              >
                {/* Discreet organic capoeira curve accent tucked inside top-right & top-left corners */}
                <svg
                  viewBox="0 0 480 180"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[155px] w-full select-none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-24 96C56 18 140 -8 228 16"
                    stroke="#13852B"
                    strokeWidth="26"
                    strokeLinecap="round"
                    strokeOpacity="0.065"
                  />
                  <path
                    d="M292 -12C374 8 442 46 504 114"
                    stroke="#FBC707"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeOpacity="0.14"
                  />
                  <path
                    d="M340 4C406 24 456 62 496 116"
                    stroke="#111654"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.12"
                  />
                </svg>

                <header className="relative flex flex-col items-center px-5 pt-5 pb-4 text-center sm:px-6 sm:pt-6">
                  {/* Shared-element logo landing spot */}
                  <div className="flex h-[120px] items-center justify-center sm:h-[138px]">
                    {!showIntro &&
                      (!logoFailed ? (
                        <motion.img
                          layoutId="cnn-official-logo"
                          src={BRAND.logoSrc}
                          alt={BRAND.logoAlt}
                          decoding="async"
                          fetchPriority="high"
                          referrerPolicy="no-referrer"
                          onError={() => setLogoFailed(true)}
                          transition={{
                            layout: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
                          }}
                          className="h-[120px] w-auto max-w-[186px] object-contain sm:h-[138px] sm:max-w-[214px]"
                        />
                      ) : (
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#111654] text-[#FBC707]">
                          <BerimbauIcon className="h-14 w-14" />
                        </div>
                      ))}
                  </div>

                  <div className={showIntro ? 'opacity-0' : 'animate-bio-enter'}>
                    <h1 className="mt-2.5 text-[1.475rem] font-bold leading-tight tracking-[-0.02em] text-[#111654] [text-wrap:balance] sm:text-[1.7rem]">
                      {BRAND.name}
                    </h1>
                    <p className="mt-1 text-[0.90625rem] leading-snug text-[#4E5980]">
                      {BRAND.subtitle}
                    </p>
                  </div>
                </header>

                {/* Signature Docked WhatsApp CTA — visible above the fold on mobile */}
                <div
                  className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-1'} px-3 pb-3 sm:px-3.5 sm:pb-3.5`}
                >
                  <a
                    href={whatsappLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex min-h-[68px] w-full items-center justify-between gap-3 overflow-hidden rounded-[20px] bg-[#13852B] px-3.5 py-3 text-white shadow-[0_10px_22px_rgba(19,133,43,0.28)] transition-all duration-200 hover:bg-[#0F7224] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654] sm:px-4"
                  >
                    {/* Subtle sweeping brushstroke curve etched inside the green CTA */}
                    <svg
                      viewBox="0 0 360 80"
                      fill="none"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M210 -16C260 12 308 42 356 96"
                        stroke="#FFFFFF"
                        strokeWidth="36"
                        strokeOpacity="0.06"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span className="relative flex min-w-0 items-center gap-3">
                      <WhatsAppCreativeIcon className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105" />
                      <span className="min-w-0 text-left">
                        <span className="block font-display text-[0.9375rem] font-bold leading-tight tracking-[0.005em] min-[375px]:text-[1rem]">
                          {whatsappLink.label}
                        </span>
                        <span className="mt-0.5 block text-[0.78125rem] font-medium text-white/85">
                          Aulas, horários e informações
                        </span>
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBC707] text-[#111654] shadow-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <ArrowUpRightIcon className="h-4.5 w-4.5" />
                    </span>
                  </a>
                </div>
              </section>

              {/* 2. Asymmetric 2-Column Editorial Bento: Cadastro de aluno + Acesse nosso site */}
              <div
                className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-2'} mt-3.5 grid grid-cols-2 gap-3`}
              >
                {/* Cadastro de aluno (para quem já treina) — crisp white card with golden accent */}
                <a
                  href={STUDENT_REGISTRATION_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[126px] w-full flex-col justify-between rounded-[22px] border border-[#111654]/10 bg-white p-3.5 text-left shadow-[0_6px_20px_rgba(17,22,84,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FBC707]/80 hover:shadow-[0_10px_26px_rgba(17,22,84,0.1)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654] sm:p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <StudentRegistrationCreativeIcon className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-105" />
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#111654]/[0.06] text-[#111654] transition-all duration-150 group-hover:bg-[#111654] group-hover:text-white"
                    >
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="mt-3 min-w-0">
                    <span className="block font-display text-[0.90625rem] font-bold leading-tight text-[#111654] sm:text-[0.96875rem]">
                      {STUDENT_REGISTRATION_LINK.label}
                    </span>
                    <span className="mt-1 block text-[0.75rem] font-medium leading-snug text-[#525D82]">
                      {STUDENT_REGISTRATION_LINK.subtitle}
                    </span>
                  </div>
                </a>

                {/* Acesse nosso site — contrasting deep royal navy editorial tile */}
                <a
                  href={websiteLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[126px] w-full flex-col justify-between overflow-hidden rounded-[22px] border border-[#111654] bg-[#111654] p-3.5 text-left text-white shadow-[0_8px_22px_rgba(17,22,84,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#161D69] hover:shadow-[0_12px_28px_rgba(17,22,84,0.24)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBC707] sm:p-4"
                >
                  {/* Subtle roda curve accent inside the navy tile */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-7 -bottom-7 h-24 w-24 rounded-full border-[6px] border-[#FBC707]/15"
                  />

                  <div className="relative flex items-start justify-between gap-2">
                    <WebsiteGlobeCreativeIcon className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-105" />
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/12 text-[#FBC707] transition-all duration-150 group-hover:bg-[#FBC707] group-hover:text-[#111654]"
                    >
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="relative mt-3 min-w-0">
                    <span className="block font-display text-[0.90625rem] font-bold leading-tight text-white sm:text-[0.96875rem]">
                      {websiteLink.label}
                    </span>
                    <span className="mt-1 block truncate text-[0.75rem] font-medium leading-snug text-white/75">
                      Site oficial
                    </span>
                  </div>
                </a>
              </div>

              {/* 3. Animated Location Map Widget */}
              <section
                aria-label="Localização"
                className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-3'} mt-3.5`}
              >
                <LocationCard />
              </section>

              {/* 4. Discreet "Siga nosso Instagram" strip below Location */}
              <div
                className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-4'} mt-3`}
              >
                <a
                  href={INSTAGRAM_LINK.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[46px] w-full items-center justify-between gap-2.5 rounded-2xl border border-[#111654]/10 bg-white/65 px-3.5 py-2 text-[#111654] backdrop-blur-xs transition-all duration-150 hover:border-[#111654]/20 hover:bg-white active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654]"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <InstagramMiniBadge className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-105" />
                    <span className="truncate text-[0.875rem] font-medium text-[#111654]/90 group-hover:text-[#111654]">
                      {INSTAGRAM_LINK.label}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[0.75rem] font-medium text-[#525D82] transition-colors group-hover:text-[#111654]">
                    <span className="hidden min-[390px]:inline">Instagram</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </div>

              {/* 5. Masters' Profiles — Boutique 2-column compact bento instead of plain list */}
              <section
                aria-label={MASTERS_SECTION.title}
                className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-5'} mt-6 pt-3`}
              >
                {/* Discreet tri-color touched divider */}
                <div className="mb-3.5 flex items-center justify-center gap-1.5" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#111654]/10" />
                  <span className="h-1 w-4 rounded-full bg-[#13852B]/60" />
                  <span className="h-1 w-3 rounded-full bg-[#FBC707]" />
                  <span className="h-1 w-4 rounded-full bg-[#111654]/60" />
                  <span className="h-px flex-1 bg-[#111654]/10" />
                </div>

                <h2 className="text-center text-[0.8125rem] font-medium text-[#525D82]">
                  {MASTERS_SECTION.title}
                </h2>

                <ul className="mt-2.5 grid grid-cols-2 gap-2.5">
                  {MASTERS_SECTION.profiles.map((master) => (
                    <li key={master.id}>
                      <a
                        href={master.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-[76px] w-full flex-col justify-between rounded-2xl border border-[#111654]/9 bg-white/75 p-3 text-left transition-all duration-150 hover:border-[#111654]/20 hover:bg-white active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <InstagramMiniBadge className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[#111654]/35 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#111654]" />
                        </div>
                        <div className="mt-2 min-w-0">
                          <span className="block truncate font-display text-[0.84375rem] font-semibold leading-tight text-[#111654]">
                            {master.name}
                          </span>
                          <span className="mt-0.5 block truncate text-[0.71875rem] text-[#525D82] group-hover:text-[#111654]">
                            {master.handle}
                          </span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6. Discreet Clicaê promotional card — 24px below masters' profiles */}
              <section
                aria-label="Criado por Clicaê"
                className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-5'} mt-6`}
              >
                <ClicaeCard />
              </section>
            </div>

            {/* 7. Discreet footer credit */}
            <footer
              className={`${showIntro ? 'opacity-0' : 'animate-bio-enter enter-delay-5'} mt-5 flex justify-center pt-1 pb-1`}
            >
              <a
                href={CLICAE_PROMO.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center rounded-lg px-2.5 py-1 text-[0.75rem] font-medium text-[#646E8F] transition-colors duration-150 hover:text-[#111654] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654]"
              >
                {CLICAE_PROMO.credit}
              </a>
            </footer>
          </main>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}
