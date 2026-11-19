import { useId, type SVGProps } from 'react';

/**
 * Creative illustrated WhatsApp medallion:
 * Friendly rounded white speech bubble, rich green handset,
 * and warm golden-yellow acoustic waves echoing the academy colors.
 */
export function WhatsAppCreativeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="12"
        fill="#FFFFFF"
        fillOpacity="0.16"
        stroke="#FFFFFF"
        strokeOpacity="0.3"
        strokeWidth="1.2"
      />
      {/* Friendly speech bubble */}
      <path
        d="M20.2 8.5C13.8 8.5 8.6 13.5 8.6 19.7C8.6 21.8 9.2 23.8 10.3 25.5L8.9 30.8L14.4 29.4C16.1 30.3 18.1 30.8 20.2 30.8C26.6 30.8 31.8 25.8 31.8 19.7C31.8 13.5 26.6 8.5 20.2 8.5Z"
        fill="#FFFFFF"
      />
      {/* Handset silhouette in brand green */}
      <path
        d="M25.4 22.3C25.1 22.1 23.7 21.4 23.4 21.3C23.1 21.2 22.9 21.2 22.7 21.5C22.5 21.8 22 22.4 21.8 22.6C21.6 22.8 21.4 22.8 21.1 22.7C20.8 22.5 19.8 22.2 18.7 21.2C17.8 20.4 17.2 19.4 17 19.1C16.8 18.8 17 18.6 17.2 18.5C17.3 18.3 17.5 18.1 17.6 17.9C17.8 17.7 17.8 17.6 17.9 17.4C18 17.2 18 17 17.9 16.8C17.8 16.7 17.2 15.2 17 14.6C16.7 14.1 16.5 14.1 16.3 14.1H15.7C15.5 14.1 15.1 14.2 14.9 14.5C14.6 14.8 13.8 15.5 13.8 17C13.8 18.4 14.9 19.8 15 20C15.2 20.2 17.1 23.2 20.1 24.4C22.6 25.4 23.1 25.2 23.7 25.1C24.2 25.1 25.5 24.4 25.7 23.7C26 23 26 22.4 25.9 22.3C25.8 22.2 25.6 22.4 25.4 22.3Z"
        fill="#13852B"
      />
      {/* Warm golden-yellow chat spark accent */}
      <circle cx="30.5" cy="9.8" r="3" fill="#FBC707" />
      <circle cx="30.5" cy="9.8" r="1.15" fill="#111654" />
    </svg>
  );
}

/**
 * Creative artisan Instagram camera medallion:
 * Rich sunset gradient squircle, gleaming dual-highlight lens, and golden viewfinder glint.
 */
export function InstagramCreativeIcon(props: SVGProps<SVGSVGElement>) {
  const gradId = useId();
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={gradId}
          x1="4"
          y1="36"
          x2="36"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FBC707" />
          <stop offset="42%" stopColor="#F03D6A" />
          <stop offset="78%" stopColor="#A62AB8" />
          <stop offset="100%" stopColor="#3B42C4" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="37" height="37" rx="12" fill={`url(#${gradId})`} />
      {/* Subtle glossy top sheen */}
      <path
        d="M13.5 3.2H26.5C31.7 3.2 35.8 7 36.4 12C31.8 9.2 26.2 7.8 20 7.8C13.8 7.8 8.2 9.2 3.6 12C4.2 7 8.3 3.2 13.5 3.2Z"
        fill="#FFFFFF"
        fillOpacity="0.16"
      />
      {/* Camera outer rounded frame */}
      <rect
        x="9.5"
        y="9.5"
        width="21"
        height="21"
        rx="6.2"
        stroke="#FFFFFF"
        strokeWidth="2.3"
      />
      {/* Camera lens with charming reflection */}
      <circle cx="20" cy="20" r="5" fill="#FFFFFF" fillOpacity="0.18" stroke="#FFFFFF" strokeWidth="2.2" />
      <circle cx="18.3" cy="18.3" r="1.15" fill="#FFFFFF" />
      {/* Golden flash dot */}
      <circle cx="26.2" cy="13.8" r="1.65" fill="#FBC707" />
    </svg>
  );
}

/**
 * Compact charming Instagram icon for the discreet masters section.
 */
export function InstagramMiniBadge(props: SVGProps<SVGSVGElement>) {
  const gradId = useId();
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={gradId}
          x1="2"
          y1="22"
          x2="22"
          y2="2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FBC707" />
          <stop offset="48%" stopColor="#E93B6B" />
          <stop offset="100%" stopColor="#4F46C8" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="21" height="21" rx="6.5" fill={`url(#${gradId})`} />
      <rect x="6" y="6" width="12" height="12" rx="3.6" stroke="#FFFFFF" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.8" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="15.6" cy="8.4" r="0.95" fill="#FBC707" />
    </svg>
  );
}

/**
 * Creative Brazilian capoeira-themed Globe medallion:
 * Deep navy ocean sphere, organic green continents, and a golden-yellow roda orbital sweep.
 */
export function WebsiteGlobeCreativeIcon(props: SVGProps<SVGSVGElement>) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="12"
        fill="#EEF2FA"
        stroke="#111654"
        strokeOpacity="0.12"
        strokeWidth="1.2"
      />
      {/* Back half of golden roda orbit */}
      <path
        d="M8.2 26.8C5.4 23.6 9.1 17.5 16.5 13.3C23.9 9.1 31.8 8.3 33.8 11.4"
        stroke="#FBC707"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />
      {/* Deep royal navy ocean globe */}
      <circle cx="20" cy="20" r="10.5" fill="#111654" />
      {/* Stylized Brazilian green continents clipped cleanly inside the globe */}
      <clipPath id={clipId}>
        <circle cx="20" cy="20" r="10.5" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M11.5 14.2C14.2 12.6 17.6 13.4 18.8 15.8C19.8 17.7 17.6 19.6 18.2 21.8C18.8 23.8 21.2 25.1 20.4 27.6C19.5 30.2 15.6 31.2 13 29.3C10.5 27.5 9.2 23.6 9.8 19.5C10.2 17.2 10.4 14.9 11.5 14.2Z"
          fill="#159430"
        />
        <path
          d="M23.8 11.8C26.4 11.2 29.8 12.6 30.5 15.4C31.2 18.2 28.4 20.6 26.2 20.2C24 19.8 22.8 17.8 22.4 15.8C22 14 22.2 12.2 23.8 11.8Z"
          fill="#159430"
        />
        <path
          d="M24.8 23.6C27.1 22.8 29.6 24.4 29.2 26.8C28.8 29.2 25.5 30.4 23.9 28.8C22.4 27.3 22.9 24.2 24.8 23.6Z"
          fill="#1AA638"
        />
        {/* Delicate latitude/longitude meridian highlight */}
        <path
          d="M10.5 19.8C14.8 21.5 25.2 21.5 29.5 19.8"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
          strokeWidth="1.1"
        />
        <ellipse
          cx="15.8"
          cy="14.5"
          rx="3.2"
          ry="1.7"
          transform="rotate(-28 15.8 14.5)"
          fill="#FFFFFF"
          fillOpacity="0.22"
        />
      </g>
      {/* Front golden roda orbital arc sweeping across the globe */}
      <path
        d="M33.8 11.4C35.8 14.5 31.7 20.9 24.1 25.2C16.5 29.5 9.9 29.6 8.2 26.8"
        stroke="#FBC707"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      {/* Sparkling orbital star dot */}
      <circle cx="31.3" cy="14.2" r="2.2" fill="#FBC707" stroke="#FFFFFF" strokeWidth="1.1" />
    </svg>
  );
}

/**
 * Creative Student Registration medallion ("Cadastro de aluno"):
 * Warm golden-yellow squircle with crisp navy student badge silhouette
 * and an emerald-green verified corda check accent.
 */
export function StudentRegistrationCreativeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" {...props}>
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="12"
        fill="#FFF7D6"
        stroke="#FBC707"
        strokeOpacity="0.65"
        strokeWidth="1.3"
      />
      {/* Mini ID / enrollment card */}
      <rect x="8.5" y="9.5" width="21" height="22" rx="5.5" fill="#111654" />
      {/* Student head */}
      <circle cx="19" cy="16.5" r="3.2" fill="#FBC707" />
      {/* Student shoulders */}
      <path
        d="M13.2 26.2C13.8 23.2 16 21.6 19 21.6C22 21.6 24.2 23.2 24.8 26.2"
        stroke="#FFFFFF"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      {/* Stylized Brazilian green capoeira corda knot / verified check badge */}
      <circle cx="29.2" cy="27.2" r="5.6" fill="#13852B" stroke="#FFF7D6" strokeWidth="1.6" />
      <path
        d="M26.8 27.2L28.4 28.8L31.7 25.5"
        stroke="#FFFFFF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Cute illustrated route/compass arrow badge for the Google Maps card footer.
 */
export function MapRouteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.5 18.5L18.5 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 5.5H18.5V14.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.2" cy="17.8" r="2.1" fill="#FBC707" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7" />
      <path d="M9 7H17V15" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.5 6.5L15 12l-5.5 5.5" />
    </svg>
  );
}

/**
 * Hand-crafted Berimbau SVG designed to stay legible at small sizes:
 * - Curved wooden bow (verga)
 * - Taut vertical wire (arame)
 * - Distinctive round gourd resonator (cabaça) tied at the lower third
 */
export function BerimbauIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {/* Taut string (arame) */}
      <line
        x1="21.4"
        y1="4.7"
        x2="18.9"
        y2="27.3"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      {/* Curved wooden bow (verga) */}
      <path
        d="M21.8 4.4C13.6 9.4 13.1 19.6 18.8 27.6"
        stroke="currentColor"
        strokeWidth="2.65"
        strokeLinecap="round"
      />
      {/* Tie cord (barbante) fastening gourd to bow and wire */}
      <line
        x1="13.8"
        y1="21.7"
        x2="19.6"
        y2="21.7"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      {/* Round gourd resonator (cabaça) */}
      <circle
        cx="11.3"
        cy="21.9"
        r="4.35"
        fill="currentColor"
      />
      {/* Subtle acoustic opening detail on the gourd */}
      <ellipse
        cx="9.55"
        cy="22.1"
        rx="1.15"
        ry="2.05"
        transform="rotate(-14 9.55 22.1)"
        fill="#FBC707"
      />
    </svg>
  );
}
