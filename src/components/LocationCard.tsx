import { LOCATION } from '../data/links';
import { BerimbauIcon, MapRouteIcon } from './Icons';

export function LocationCard() {
  return (
    <a
      href={LOCATION.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${LOCATION.title} — ${LOCATION.cta}`}
      className="group block overflow-hidden rounded-[24px] border border-[#111654]/12 bg-white shadow-[0_8px_26px_rgba(17,22,84,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#111654]/24 hover:shadow-[0_12px_30px_rgba(17,22,84,0.12)] active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111654]"
    >
      {/* Stylized static street map illustration in deep royal navy (132px height) */}
      <div className="relative h-[132px] w-full overflow-hidden bg-[#10164A]">
        <svg
          className="h-full w-full"
          viewBox="0 0 480 140"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Base map fill harmonized with logo navy */}
          <rect width="480" height="140" fill="#10164A" />

          {/* Discreet navy city blocks (quadras) */}
          <g fill="#182061">
            <rect x="14" y="10" width="66" height="34" rx="3" />
            <rect x="92" y="10" width="76" height="34" rx="3" />
            <rect x="182" y="10" width="64" height="34" rx="3" />
            <rect x="260" y="10" width="74" height="34" rx="3" />
            <rect x="348" y="10" width="58" height="34" rx="3" />
            <rect x="418" y="10" width="48" height="34" rx="3" />

            <rect x="14" y="56" width="66" height="32" rx="3" />
            <rect x="92" y="56" width="76" height="32" rx="3" />
            <rect x="182" y="56" width="116" height="32" rx="3" fill="#1C256E" />
            <rect x="312" y="56" width="68" height="32" rx="3" />
            <rect x="394" y="56" width="72" height="32" rx="3" />

            <rect x="14" y="100" width="84" height="30" rx="3" />
            <rect x="112" y="100" width="60" height="30" rx="3" />
            <rect x="186" y="100" width="82" height="30" rx="3" />
            <rect x="282" y="100" width="72" height="30" rx="3" />
            <rect x="368" y="100" width="98" height="30" rx="3" />
          </g>

          {/* Subtle green plaza accents echoing brand green */}
          <rect x="314" y="58" width="26" height="28" rx="2.5" fill="#143D4B" />
          <rect x="94" y="12" width="24" height="30" rx="2.5" fill="#143D4B" />

          {/* Secondary thin streets (vias finas) */}
          <g stroke="#24307F" strokeWidth="1.6">
            <path d="M0 50H480" />
            <path d="M0 94H480" />
            <path d="M86 0V140" />
            <path d="M175 0V140" />
            <path d="M253 0V50" />
            <path d="M305 50V140" />
            <path d="M341 0V50" />
            <path d="M387 50V100" />
            <path d="M412 0V50" />
            <path d="M105 94V140" />
            <path d="M275 94V140" />
            <path d="M361 94V140" />
          </g>

          {/* Primary arterial avenues */}
          <g stroke="#32419E" strokeWidth="2.8" strokeLinecap="round">
            <path d="M-10 112L175 50L341 50L490 22" />
            <path d="M175 -6V146" />
          </g>

          {/* Subtle central intersection plaza */}
          <circle
            cx="240"
            cy="82"
            r="14"
            fill="#141C59"
            stroke="#32419E"
            strokeWidth="1.8"
          />
          <path d="M240 50V104" stroke="#32419E" strokeWidth="1.8" />
          <path d="M175 82H305" stroke="#32419E" strokeWidth="1.8" />
        </svg>

        {/* Centered location pinpoint with expanding ring + jumping/pulsing yellow berimbau pin */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative mt-5 flex items-center justify-center">
            {/* Translucent expanding yellow pulse ring anchored at the map location point */}
            <span className="animate-location-ring absolute h-10 w-10 rounded-full bg-[#FBC707]/55" />

            {/* Soft ground contact shadow that scales rhythmically with the jump */}
            <span className="animate-berimbau-shadow absolute h-2.5 w-8 rounded-full bg-[#060926]" />

            {/* Exact pinpoint dot on the street intersection */}
            <span className="relative h-2 w-2 rounded-full bg-[#FBC707] ring-2 ring-[#10164A]" />

            {/* Jumping & pulsing yellow berimbau marker perched directly above the location */}
            <div className="animate-berimbau-hop absolute bottom-2 flex flex-col items-center">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#FBC707] text-[#111654] shadow-[0_6px_16px_rgba(6,9,38,0.55)] ring-[2.5px] ring-[#10164A]">
                <BerimbauIcon className="animate-berimbau-symbol h-7 w-7" />
              </span>
              {/* Subtle pin tip pointing cleanly down to the location */}
              <span className="-mt-1.5 h-3 w-3 rotate-45 rounded-[2px] bg-[#FBC707] ring-2 ring-[#10164A] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Crisp white card footer with navy title, green CTA, and creative route badge */}
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5">
        <div className="min-w-0">
          <h2 className="text-[0.96875rem] font-bold leading-snug text-[#111654]">
            {LOCATION.title}
          </h2>
          <p className="mt-0.5 text-[0.84375rem] font-semibold text-[#13852B] transition-colors group-hover:text-[#0F7224]">
            {LOCATION.cta}
          </p>
        </div>

        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#111654]/[0.06] text-[#111654] transition-all duration-200 group-hover:rotate-6 group-hover:scale-105 group-hover:bg-[#111654] group-hover:text-white"
          aria-hidden="true"
        >
          <MapRouteIcon className="h-5 w-5" />
        </span>
      </div>
    </a>
  );
}
