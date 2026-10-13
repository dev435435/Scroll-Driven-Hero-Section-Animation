export default function Car({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 360 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      style={style}
      role="img"
      aria-label="Car viewed from above, facing right"
    >
      <defs>
        <linearGradient id="bodyPaint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9a36" />
          <stop offset="48%" stopColor="#f57b19" />
          <stop offset="100%" stopColor="#c9520a" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#172a36" />
          <stop offset="50%" stopColor="#64717b" />
          <stop offset="100%" stopColor="#172a36" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="180" cy="105" rx="163" ry="82" fill="#000" opacity=".25" />

      {/* Wheels visible from above */}
      <g fill="#171717" stroke="#555" strokeWidth="3">
        <rect x="52" y="15" width="62" height="26" rx="10" />
        <rect x="52" y="159" width="62" height="26" rx="10" />
        <rect x="247" y="12" width="54" height="27" rx="10" />
        <rect x="247" y="161" width="54" height="27" rx="10" />
      </g>

      {/* Main car body: long axis runs left to right */}
      <path
        d="M18 100
           Q23 68 48 51
           L83 31
           Q106 17 139 16
           L271 22
           Q310 26 333 52
           Q352 74 356 94
           L356 106
           Q352 126 333 148
           Q310 174 271 178
           L139 184
           Q106 183 83 169
           L48 149
           Q23 132 18 100Z"
        fill="url(#bodyPaint)"
        stroke="#8f3e0a"
        strokeWidth="3"
      />

      {/* Front hood */}
      <path
        d="M269 35 Q315 40 336 69 L344 91 L344 109 L336 131 Q315 160 269 165 L285 100Z"
        fill="#fa8b28"
        stroke="#d45d0e"
        strokeWidth="2"
      />

      {/* Roof and windshield from above */}
      <path
        d="M92 40
           Q115 28 151 28
           L245 32
           Q276 35 291 56
           L307 82
           L307 118
           L291 144
           Q276 165 245 168
           L151 172
           Q115 172 92 160
           L76 139
           L76 61Z"
        fill="#252a30"
        stroke="#d4d8db"
        strokeWidth="3"
      />

      {/* Glass panels */}
      <path
        d="M96 49 Q119 36 150 37 L177 39 L177 161 L150 163 Q119 164 96 151 L85 133 L85 67Z"
        fill="url(#glass)"
        stroke="#111820"
        strokeWidth="3"
      />
      <path
        d="M185 39 L242 41 Q266 44 279 62 L294 84 L294 116 L279 138 Q266 156 242 159 L185 161Z"
        fill="url(#glass)"
        stroke="#111820"
        strokeWidth="3"
      />

      {/* Center roof divider */}
      <path d="M181 39 L181 161" stroke="#171b20" strokeWidth="6" />
      <path d="M190 44 L190 156" stroke="#89949d" strokeWidth="2" />

      {/* Rear window and front hood details */}
      <path d="M38 81 Q48 65 64 61 L72 65 L65 91Z" fill="#22272d" />
      <path d="M38 119 Q48 135 64 139 L72 135 L65 109Z" fill="#22272d" />
      <path d="M315 66 L334 83 L339 94 L326 91Z" fill="#ffe7a4" />
      <path d="M315 134 L334 117 L339 106 L326 109Z" fill="#ffe7a4" />

      {/* Mirrors */}
      <path d="M137 25 L151 8 L171 12 L164 29Z" fill="#252a30" stroke="#b7b7b7" strokeWidth="2" />
      <path d="M137 175 L151 192 L171 188 L164 171Z" fill="#252a30" stroke="#b7b7b7" strokeWidth="2" />
    </svg>
  );
}