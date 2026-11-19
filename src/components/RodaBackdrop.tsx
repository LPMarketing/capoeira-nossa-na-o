/**
 * Light off-white canvas enriched with discreet green, yellow, and navy curves
 * inspired by the circular movement of the capoeira roda and the official logo's brushstrokes.
 */
export function RodaBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle top tri-color accent hairline echoing the logo's green, yellow & navy */}
      <div className="flex h-[3.5px] w-full">
        <span className="h-full w-[38%] bg-[#13852B]" />
        <span className="h-full w-[24%] bg-[#FBC707]" />
        <span className="h-full w-[38%] bg-[#111654]" />
      </div>

      <svg
        className="h-full w-full"
        viewBox="0 0 1440 1024"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Soft ambient tints in green, yellow, and navy keeping the center airy and bright */}
          <radialGradient id="wash-green" cx="14%" cy="14%" r="42%">
            <stop offset="0%" stopColor="#13852B" stopOpacity="0.085" />
            <stop offset="100%" stopColor="#13852B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wash-yellow" cx="88%" cy="22%" r="38%">
            <stop offset="0%" stopColor="#FBC707" stopOpacity="0.11" />
            <stop offset="100%" stopColor="#FBC707" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wash-navy" cx="82%" cy="88%" r="44%">
            <stop offset="0%" stopColor="#111654" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#111654" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1440" height="1024" fill="url(#wash-green)" />
        <rect width="1440" height="1024" fill="url(#wash-yellow)" />
        <rect width="1440" height="1024" fill="url(#wash-navy)" />

        {/* Sweeping brushstroke-inspired roda curve — Green (upper-left to bottom-left) */}
        <path
          d="M540 -95C260 35 120 275 170 545C212 775 375 940 615 1045"
          stroke="#13852B"
          strokeWidth="34"
          strokeLinecap="round"
          strokeOpacity="0.075"
        />
        <path
          d="M490 -75C235 60 112 290 162 545"
          stroke="#13852B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.22"
        />

        {/* Sweeping brushstroke-inspired roda curve — Golden Yellow (upper-right arc) */}
        <path
          d="M915 -115C1195 25 1335 275 1272 550C1215 795 1015 965 765 1060"
          stroke="#FBC707"
          strokeWidth="38"
          strokeLinecap="round"
          strokeOpacity="0.11"
        />
        <path
          d="M965 -90C1220 55 1345 295 1280 555"
          stroke="#FBC707"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeOpacity="0.34"
        />

        {/* Sweeping brushstroke-inspired roda curve — Royal Navy (outer right & lower counter-arc) */}
        <path
          d="M1010 -65C1265 95 1375 345 1295 615C1225 845 1030 995 795 1075"
          stroke="#111654"
          strokeWidth="16"
          strokeLinecap="round"
          strokeOpacity="0.06"
        />
        <path
          d="M450 1110C215 985 95 760 142 505"
          stroke="#111654"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.16"
        />

        {/* Fine inner circular roda rhythm framing the centered column */}
        <circle
          cx="720"
          cy="450"
          r="355"
          stroke="#111654"
          strokeWidth="1.25"
          strokeOpacity="0.08"
          strokeDasharray="220 46 110 34"
        />
        <circle
          cx="720"
          cy="450"
          r="465"
          stroke="#13852B"
          strokeWidth="1.1"
          strokeOpacity="0.1"
          strokeDasharray="175 65 95 45"
        />
      </svg>
    </div>
  );
}
