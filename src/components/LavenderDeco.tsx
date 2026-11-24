import React from "react";

export function LavenderSprigLeft({ className = "w-28 h-44" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stem 1 */}
      <path
        d="M30 215 C45 170 65 110 75 30"
        stroke="#7A9382"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Florets on Stem 1 */}
      <ellipse cx="75" cy="30" rx="4" ry="7" fill="#8E65B5" transform="rotate(-10 75 30)" />
      <ellipse cx="73" cy="42" rx="5" ry="8" fill="#9F78C8" transform="rotate(-15 73 42)" />
      <ellipse cx="78" cy="40" rx="5" ry="8" fill="#B493DB" transform="rotate(15 78 40)" />
      <ellipse cx="71" cy="56" rx="5.5" ry="9" fill="#8E65B5" transform="rotate(-20 71 56)" />
      <ellipse cx="77" cy="54" rx="5.5" ry="9" fill="#A883D1" transform="rotate(20 77 54)" />
      <ellipse cx="68" cy="72" rx="6" ry="9" fill="#9F78C8" transform="rotate(-25 68 72)" />
      <ellipse cx="76" cy="70" rx="6" ry="9" fill="#B493DB" transform="rotate(25 76 70)" />
      <ellipse cx="65" cy="90" rx="6.5" ry="9.5" fill="#7E54A8" transform="rotate(-30 65 90)" />
      <ellipse cx="74" cy="88" rx="6" ry="9.5" fill="#A883D1" transform="rotate(30 74 88)" />
      <ellipse cx="61" cy="110" rx="6" ry="9" fill="#9F78C8" transform="rotate(-25 61 110)" />
      <ellipse cx="71" cy="108" rx="6" ry="9" fill="#B493DB" transform="rotate(25 71 108)" />

      {/* Stem 2 (Angled left) */}
      <path
        d="M25 215 C35 160 30 110 20 60"
        stroke="#6B8774"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="20" cy="60" rx="4" ry="6.5" fill="#9F78C8" transform="rotate(-20 20 60)" />
      <ellipse cx="18" cy="72" rx="5" ry="7.5" fill="#B493DB" transform="rotate(-30 18 72)" />
      <ellipse cx="24" cy="70" rx="4.5" ry="7.5" fill="#8E65B5" transform="rotate(15 24 70)" />
      <ellipse cx="16" cy="86" rx="5.5" ry="8.5" fill="#7E54A8" transform="rotate(-35 16 86)" />
      <ellipse cx="23" cy="85" rx="5" ry="8.5" fill="#A883D1" transform="rotate(20 23 85)" />
      <ellipse cx="15" cy="102" rx="5" ry="8" fill="#9F78C8" transform="rotate(-30 15 102)" />
      <ellipse cx="23" cy="101" rx="5" ry="8" fill="#B493DB" transform="rotate(20 23 101)" />

      {/* Stem 3 (Inner branch) */}
      <path
        d="M35 215 C60 170 85 130 105 75"
        stroke="#8BA192"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="105" cy="75" rx="3.5" ry="6.5" fill="#B493DB" transform="rotate(25 105 75)" />
      <ellipse cx="100" cy="86" rx="4.5" ry="7.5" fill="#8E65B5" transform="rotate(-15 100 86)" />
      <ellipse cx="108" cy="85" rx="4.5" ry="7.5" fill="#A883D1" transform="rotate(30 108 85)" />
      <ellipse cx="96" cy="100" rx="5" ry="8" fill="#9F78C8" transform="rotate(-20 96 100)" />
      <ellipse cx="105" cy="99" rx="5" ry="8" fill="#B493DB" transform="rotate(30 105 99)" />

      {/* Sage/Olive Leaves */}
      <path d="M42 165 C30 155 25 140 28 135 C35 142 42 152 42 165Z" fill="#7A9382" opacity="0.9" />
      <path d="M48 150 C62 142 70 130 68 125 C62 133 52 142 48 150Z" fill="#8BA192" opacity="0.9" />
      <path d="M38 185 C22 178 15 165 18 160 C25 166 34 175 38 185Z" fill="#6B8774" opacity="0.9" />
    </svg>
  );
}

export function LavenderSprigRight({ className = "w-28 h-44" }: { className?: string }) {
  return (
    <div className={`transform -scale-x-100 ${className}`}>
      <LavenderSprigLeft className="w-full h-full" />
    </div>
  );
}

export function FloralDivider({ className = "w-36 h-8 text-dusty-400" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-dusty-400 to-lavender-400" />
      <svg
        className="w-5 h-5 text-lavender-500 fill-current opacity-85"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C12 2 10.5 6 8 8C5.5 10 2 12 2 12C2 12 5.5 14 8 16C10.5 18 12 22 12 22C12 22 13.5 18 16 16C18.5 14 22 12 22 12C22 12 18.5 10 16 8C13.5 6 12 2 12 2Z" />
      </svg>
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-dusty-400 to-lavender-400" />
    </div>
  );
}

export function LavenderCorner({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 90 Q15 45 45 25 Q70 12 90 10"
        stroke="#7A9382"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="90" cy="10" r="3" fill="#A883D1" />
      <circle cx="82" cy="14" r="3" fill="#8E65B5" />
      <circle cx="72" cy="18" r="3.5" fill="#B493DB" />
      <circle cx="60" cy="24" r="3.5" fill="#9F78C8" />
      <circle cx="50" cy="30" r="3" fill="#A883D1" />
      <circle cx="40" cy="40" r="3" fill="#8E65B5" />
      <circle cx="30" cy="52" r="3" fill="#B493DB" />
    </svg>
  );
}
