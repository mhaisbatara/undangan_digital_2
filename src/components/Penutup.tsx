"use client";

import React from "react";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider, LavenderSprigLeft, LavenderSprigRight } from "./LavenderDeco";

export function Penutup() {
  return (
    <footer className="relative py-20 px-4 text-center overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#a8c1d2] to-[#567a92] text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-8">
        {/* Lavender Florets */}
        <div className="flex justify-center items-center gap-4 opacity-90">
          <LavenderSprigLeft className="w-16 h-28 pointer-events-none" />
          <Heart className="w-6 h-6 text-lavender-300 fill-lavender-300" />
          <LavenderSprigRight className="w-16 h-28 pointer-events-none" />
        </div>

        {/* Closing Thank You Text */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-light px-4">
            {weddingConfig.closing.message}
          </p>
          <div className="flex justify-center pt-2">
            <FloralDivider className="w-36 text-white/70" />
          </div>
        </div>

        {/* Couple Signatures */}
        <div className="space-y-2 pt-2">
          <p className="text-xs uppercase tracking-widest text-white/80 font-medium">
            Kami yang berbahagia
          </p>
          <h2 className="font-script text-5xl sm:text-6xl text-white font-normal drop-shadow-md py-2">
            {weddingConfig.closing.groomAndBride}
          </h2>
        </div>

        {/* Family Greeting */}
        <div className="pt-2">
          <p className="text-xs text-white/85 leading-relaxed whitespace-pre-line font-light">
            {weddingConfig.closing.familyGreeting}
          </p>
        </div>

        {/* Small Footer Notice */}
        <div className="pt-10 border-t border-white/20 text-white/60 text-[11px] space-y-1">
          <p>© {new Date().getFullYear()} Undangan Digital Pernikahan.</p>
          <p className="italic">Created with Love &amp; Elegance</p>
        </div>
      </div>
    </footer>
  );
}
