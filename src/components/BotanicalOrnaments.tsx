import React from "react";

export function BotanicalCornerTopLeft({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMin meet"
    >
      {/* Organic fluid background blobs */}
      <path
        d="M-20 -20 C 140 -20, 240 60, 210 180 C 180 280, 80 290, -20 280 Z"
        fill="#e6ddcf"
        opacity="0.9"
      />
      <path
        d="M-20 -20 C 100 -20, 190 30, 160 140 C 130 230, 40 240, -20 220 Z"
        fill="#ece4d8"
        opacity="0.8"
      />

      {/* Floating subtle stippling dots */}
      <circle cx="190" cy="50" r="3" fill="#a89a8c" opacity="0.6" />
      <circle cx="230" cy="95" r="2.5" fill="#a89a8c" opacity="0.6" />
      <circle cx="215" cy="140" r="2" fill="#a89a8c" opacity="0.5" />
      <circle cx="170" cy="210" r="3" fill="#a89a8c" opacity="0.5" />
      <circle cx="120" cy="250" r="2.5" fill="#a89a8c" opacity="0.5" />
      <circle cx="80" cy="280" r="3.5" fill="#a89a8c" opacity="0.6" />

      {/* Botanical main stem */}
      <path
        d="M-10 10 Q 70 80, 130 190"
        stroke="#4a4034"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Botanical leaves */}
      {/* Leaf 1 */}
      <path
        d="M20 35 C 10 15, 30 -5, 55 5 C 65 20, 50 40, 20 35 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M22 33 Q 38 18, 52 7" stroke="#4a4034" strokeWidth="1" />

      {/* Leaf 2 */}
      <path
        d="M45 60 C 55 40, 85 45, 95 65 C 90 85, 65 85, 45 60 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M47 62 Q 70 60, 92 66" stroke="#4a4034" strokeWidth="1" />

      {/* Leaf 3 */}
      <path
        d="M60 105 C 40 100, 45 70, 75 75 C 90 90, 80 115, 60 105 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M62 103 Q 63 88, 73 77" stroke="#4a4034" strokeWidth="1" />

      {/* Leaf 4 */}
      <path
        d="M85 125 C 105 110, 135 125, 135 145 C 120 165, 95 155, 85 125 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M87 127 Q 110 133, 132 143" stroke="#4a4034" strokeWidth="1" />

      {/* Leaf 5 */}
      <path
        d="M95 165 C 80 160, 80 135, 110 140 C 120 155, 115 175, 95 165 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M97 163 Q 98 150, 108 142" stroke="#4a4034" strokeWidth="1" />

      {/* Leaf 6 - Tip */}
      <path
        d="M125 185 C 145 175, 165 195, 160 215 C 140 225, 125 205, 125 185 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.5"
      />
      <path d="M127 187 Q 143 195, 157 212" stroke="#4a4034" strokeWidth="1" />
    </svg>
  );
}

export function BotanicalCornerTopRight({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMaxYMin meet"
    >
      {/* Organic fluid background blobs */}
      <path
        d="M340 -20 C 180 -20, 80 50, 100 170 C 120 280, 240 280, 340 270 Z"
        fill="#e6ddcf"
        opacity="0.9"
      />
      <path
        d="M340 -20 C 220 -20, 130 30, 150 140 C 170 230, 270 230, 340 210 Z"
        fill="#ece4d8"
        opacity="0.8"
      />

      {/* Subtle stipples */}
      <circle cx="110" cy="50" r="3" fill="#a89a8c" opacity="0.6" />
      <circle cx="70" cy="110" r="2.5" fill="#a89a8c" opacity="0.6" />
      <circle cx="95" cy="190" r="2" fill="#a89a8c" opacity="0.5" />
      <circle cx="140" cy="240" r="3" fill="#a89a8c" opacity="0.5" />
      <circle cx="210" cy="270" r="3.5" fill="#a89a8c" opacity="0.6" />

      {/* Central radiating branch */}
      <path
        d="M330 10 Q 240 60, 160 160"
        stroke="#4a4034"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Radiating slender leaves (fan-like bamboo style) */}
      {/* Leaf 1 */}
      <path
        d="M245 65 C 210 35, 175 40, 145 60 C 175 75, 210 75, 245 65 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      {/* Leaf 2 */}
      <path
        d="M230 85 C 190 70, 150 85, 115 115 C 150 120, 190 110, 230 85 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      {/* Leaf 3 */}
      <path
        d="M210 110 C 165 115, 135 145, 110 185 C 145 175, 180 155, 210 110 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      {/* Leaf 4 */}
      <path
        d="M185 140 C 150 160, 130 200, 125 245 C 150 220, 170 185, 185 140 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      {/* Leaf 5 - Center frond */}
      <path
        d="M165 155 C 145 190, 140 235, 155 275 C 170 240, 175 195, 165 155 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />

      {/* Delicate berry stems */}
      <path d="M255 75 Q 235 110, 215 130" stroke="#4a4034" strokeWidth="1.2" />
      <circle cx="215" cy="130" r="4.5" fill="#f7f3ed" stroke="#4a4034" strokeWidth="1.4" />
      <path d="M230 115 Q 245 130, 250 145" stroke="#4a4034" strokeWidth="1.2" />
      <circle cx="250" cy="145" r="4" fill="#ded2c1" stroke="#4a4034" strokeWidth="1.4" />
      <path d="M215 125 Q 200 145, 195 160" stroke="#4a4034" strokeWidth="1.2" />
      <circle cx="195" cy="160" r="4" fill="#f7f3ed" stroke="#4a4034" strokeWidth="1.4" />
    </svg>
  );
}

export function BotanicalCornerBottomLeft({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMinYMax meet"
    >
      {/* Organic fluid background blobs */}
      <path
        d="M-20 340 C 140 340, 230 260, 210 150 C 190 40, 90 40, -20 60 Z"
        fill="#e6ddcf"
        opacity="0.9"
      />
      <path
        d="M-20 340 C 100 340, 180 280, 160 180 C 140 90, 50 80, -20 100 Z"
        fill="#ece4d8"
        opacity="0.8"
      />

      {/* Subtle stippling dots */}
      <circle cx="70" cy="50" r="3" fill="#a89a8c" opacity="0.6" />
      <circle cx="150" cy="70" r="2.5" fill="#a89a8c" opacity="0.6" />
      <circle cx="215" cy="120" r="3" fill="#a89a8c" opacity="0.5" />
      <circle cx="230" cy="180" r="2" fill="#a89a8c" opacity="0.5" />
      <circle cx="190" cy="270" r="3.5" fill="#a89a8c" opacity="0.6" />

      {/* Upright botanical floral stem */}
      <path
        d="M-10 330 Q 50 250, 90 140 Q 110 80, 130 30"
        stroke="#4a4034"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Leaf pairs */}
      {/* Pair 1 */}
      <path
        d="M35 255 C 15 240, 10 205, 30 190 C 50 200, 50 235, 35 255 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M50 240 C 70 230, 90 240, 105 265 C 85 275, 60 265, 50 240 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />

      {/* Pair 2 */}
      <path
        d="M65 190 C 45 180, 45 150, 65 140 C 85 150, 85 175, 65 190 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M78 180 C 100 170, 125 185, 135 210 C 115 220, 90 205, 78 180 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />

      {/* Radiating Flower tip at top */}
      <path
        d="M130 30 C 120 10, 95 15, 95 35 C 105 50, 125 45, 130 30 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M130 30 C 145 10, 170 20, 165 40 C 150 55, 135 45, 130 30 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M130 30 C 130 5, 135 -10, 145 -10 C 155 -5, 145 15, 130 30 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />

      {/* String of beaded berries curving alongside stem */}
      <path
        d="M40 310 Q 110 280, 140 210"
        stroke="#4a4034"
        strokeWidth="1.2"
        strokeDasharray="1 1"
      />
      <circle cx="50" cy="300" r="5" fill="#f7f3ed" stroke="#4a4034" strokeWidth="1.4" />
      <circle cx="70" cy="285" r="5.5" fill="#ded2c1" stroke="#4a4034" strokeWidth="1.4" />
      <circle cx="92" cy="268" r="6" fill="#f7f3ed" stroke="#4a4034" strokeWidth="1.4" />
      <circle cx="112" cy="250" r="5.5" fill="#ded2c1" stroke="#4a4034" strokeWidth="1.4" />
      <circle cx="128" cy="230" r="5" fill="#f7f3ed" stroke="#4a4034" strokeWidth="1.4" />
      <circle cx="140" cy="210" r="4.5" fill="#ded2c1" stroke="#4a4034" strokeWidth="1.4" />
    </svg>
  );
}

export function BotanicalCornerBottomRight({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMaxYMax meet"
    >
      {/* Organic fluid background blobs */}
      <path
        d="M340 340 C 180 340, 90 260, 110 150 C 130 40, 230 40, 340 50 Z"
        fill="#e6ddcf"
        opacity="0.9"
      />
      <path
        d="M340 340 C 220 340, 140 280, 160 180 C 180 90, 260 80, 340 90 Z"
        fill="#ece4d8"
        opacity="0.8"
      />

      {/* Subtle stipples */}
      <circle cx="250" cy="60" r="3" fill="#a89a8c" opacity="0.6" />
      <circle cx="160" cy="90" r="2.5" fill="#a89a8c" opacity="0.6" />
      <circle cx="95" cy="160" r="3" fill="#a89a8c" opacity="0.5" />
      <circle cx="120" cy="250" r="2.5" fill="#a89a8c" opacity="0.5" />
      <circle cx="180" cy="300" r="3.5" fill="#a89a8c" opacity="0.6" />

      {/* Palm / bamboo frond angled up-left */}
      <path
        d="M330 330 Q 230 250, 130 160"
        stroke="#4a4034"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Fronds */}
      <path
        d="M260 280 C 220 270, 180 290, 150 320 C 190 325, 230 310, 260 280 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M230 250 C 185 240, 145 255, 110 285 C 150 290, 195 275, 230 250 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M200 220 C 150 205, 110 220, 75 250 C 115 250, 160 235, 200 220 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M170 190 C 125 170, 90 180, 55 205 C 90 205, 130 195, 170 190 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M140 165 C 105 135, 80 145, 50 170 C 80 170, 110 165, 140 165 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />

      {/* Accent leaf fronds on opposite side */}
      <path
        d="M220 225 C 240 185, 275 165, 310 155 C 295 190, 265 215, 220 225 Z"
        fill="#ded2c1"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
      <path
        d="M185 190 C 205 155, 235 140, 270 135 C 255 165, 225 185, 185 190 Z"
        fill="#f7f3ed"
        stroke="#4a4034"
        strokeWidth="1.4"
      />
    </svg>
  );
}
