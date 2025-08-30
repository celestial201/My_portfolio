type Props = {
  className?: string
  title?: string
}

export function MascotRabbit({ className, title = "Animated rabbit mascot" }: Props) {
  // Palette (4 colors total): white, slate, sky blue, peach
  // white: #ffffff, slate: #334155, sky: #60A5FA, peach: #F8B4A5
  const titleId = "rabbit-mascot-title"
  return (
    <svg
      role="img"
      aria-labelledby={titleId}
      viewBox="0 0 220 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{title}</title>

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -6; 0 0; 0 4; 0 0"
          dur="8s"
          repeatCount="indefinite"
        />

        {/* Ears */}
        <g>
          {/* Left ear */}
          <g transform="translate(85,20)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 40; 3 0 40; 0 0 40; -2 0 40; 0 0 40"
                dur="6s"
                repeatCount="indefinite"
              />
              <path
                d="M0,0 C-10,30 -10,70 2,90 C14,110 36,110 44,90 C52,70 44,30 26,0"
                fill="#ffffff"
                stroke="#334155"
                strokeWidth="3"
              />
              <path d="M16,18 C10,38 10,64 19,79 C25,90 35,90 38,79 C41,68 36,38 26,18" fill="#F8B4A5" opacity="0.7" />
            </g>
          </g>
          {/* Right ear */}
          <g transform="translate(125,22)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 20 40; -4 20 40; 0 20 40; 2 20 40; 0 20 40"
                dur="6.5s"
                repeatCount="indefinite"
              />
              <path
                d="M0,0 C10,30 12,70 0,90 C-12,110 -34,110 -42,90 C-50,70 -40,30 -22,0"
                fill="#ffffff"
                stroke="#334155"
                strokeWidth="3"
              />
              <path
                d="M-14,18 C-8,38 -8,64 -17,79 C-23,90 -33,90 -36,79 C-39,68 -34,38 -24,18"
                fill="#F8B4A5"
                opacity="0.7"
              />
            </g>
          </g>
        </g>

        {/* Head */}
        <g transform="translate(60,74)">
          <ellipse cx="50" cy="52" rx="48" ry="42" fill="#ffffff" stroke="#334155" strokeWidth="3" />
          {/* Eyes */}
          <g>
            <circle cx="36" cy="52" r="4" fill="#334155" />
            <circle cx="64" cy="52" r="4" fill="#334155" />
            {/* Blink */}
            <g opacity="0">
              <animate
                attributeName="opacity"
                values="0;0;1;0;0"
                keyTimes="0;0.7;0.74;0.76;1"
                dur="6s"
                repeatCount="indefinite"
              />
              <rect x="30" y="48" width="12" height="8" fill="#ffffff" />
              <rect x="58" y="48" width="12" height="8" fill="#ffffff" />
            </g>
          </g>
          {/* Nose/mouth */}
          <path d="M50,58 q-3,3 0,6 q3,-3 0,-6" fill="#F8B4A5" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M50,64 v6 M50,70 q-8,6 -16,0 M50,70 q8,6 16,0"
            stroke="#334155"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Cheeks */}
          <circle cx="28" cy="60" r="6" fill="#F8B4A5" opacity="0.6" />
          <circle cx="72" cy="60" r="6" fill="#F8B4A5" opacity="0.6" />
        </g>

        {/* Scarf */}
        <g transform="translate(52,120)">
          <path
            d="M10,0 h76 a10,10 0 0 1 10,10 v8 a10,10 0 0 1 -10,10 H10 a10,10 0 0 1 -10,-10 v-8 a10,10 0 0 1 10,-10 z"
            fill="#F8B4A5"
            stroke="#334155"
            strokeWidth="3"
          />
          <path d="M80,10 l18,8 q6,3 0,8 l-18,10" fill="#F8B4A5" stroke="#334155" strokeWidth="3" />
        </g>

        {/* Body */}
        <g transform="translate(38,140)">
          <ellipse cx="72" cy="34" rx="58" ry="34" fill="#ffffff" stroke="#334155" strokeWidth="3" />
          <path d="M22,30 q18,8 44,8 t44,-8" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" />
        </g>

        {/* Shadow */}
        <ellipse cx="110" cy="200" rx="46" ry="8" fill="#334155" opacity="0.1">
          <animate attributeName="opacity" values="0.08;0.14;0.08" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Reduced motion safety */}
      <style>
        {`
        @media (prefers-reduced-motion: reduce) {
          svg animate, svg animateTransform { display: none !important; }
        }
        `}
      </style>
    </svg>
  )
}

export default MascotRabbit
