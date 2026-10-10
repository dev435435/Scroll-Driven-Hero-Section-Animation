export default function Car({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 262"
      className={className}
      role="img"
      aria-label="Car"
      style={{
        filter: "drop-shadow(0 10px 12px rgba(0,0,0,.35))",
      }}
    >
      {/* Wheels */}
      <g fill="#14181c">
        <rect x="4" y="44" width="14" height="36" rx="5" />
        <rect x="102" y="44" width="14" height="36" rx="5" />
        <rect x="4" y="180" width="14" height="40" rx="5" />
        <rect x="102" y="180" width="14" height="40" rx="5" />
      </g>

      {/* Car body */}
      <path
        fill="#0e6b78"
        d="M60 3C85 3 98 22 100 56L104 150C106 202 100 246 60 259C20 246 14 202 16 150L20 56C22 22 35 3 60 3Z"
      />

      {/* Yellow stripe */}
      <path
        fill="#f1c232"
        opacity=".9"
        d="M56.5 10h7v64h-7z"
      />

      {/* Mirrors */}
      <ellipse
        cx="13"
        cy="86"
        rx="6"
        ry="4"
        fill="#0b525c"
      />

      <ellipse
        cx="107"
        cy="86"
        rx="6"
        ry="4"
        fill="#0b525c"
      />

      {/* Front glass */}
      <path
        fill="#12171c"
        d="M29 80Q60 67 91 80L86 114Q60 107 34 114Z"
      />

      {/* Main glass */}
      <rect
        x="35"
        y="116"
        width="50"
        height="56"
        rx="14"
        fill="#13838f"
      />

      {/* Rear glass */}
      <path
        fill="#12171c"
        d="M34 175Q60 181 86 175L82 200Q60 206 38 200Z"
      />

      {/* Head lights */}
      <path
        fill="#fff7d6"
        d="M28 26L45 17L43 29Z"
      />

      <path
        fill="#fff7d6"
        d="M92 26L75 17L77 29Z"
      />

      {/* Tail lights */}
      <rect
        x="26"
        y="240"
        width="22"
        height="5"
        rx="2"
        fill="#ff4b3e"
      />

      <rect
        x="72"
        y="240"
        width="22"
        height="5"
        rx="2"
        fill="#ff4b3e"
      />
    </svg>
  );
}