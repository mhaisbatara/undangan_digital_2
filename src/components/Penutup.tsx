"use client";

import React from "react";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider, LavenderSprigLeft, LavenderSprigRight } from "./LavenderDeco";

export function Penutup() {
  return (
    <footer className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#a8c1d2] to-[#567a92] text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-10">
        {/* Lavender Florets */}
        <div className="flex justify-center items-center gap-6 opacity-90">
          <LavenderSprigLeft className="w-20 h-36 pointer-events-none" />
          <Heart className="w-8 h-8 text-lavender-300 fill-lavender-300 animate-pulse" />
          <LavenderSprigRight className="w-20 h-36 pointer-events-none" />
        </div>

        {/* Closing Thank You Text */}
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light px-4">
            {weddingConfig.closing.message}
          </p>
          <div className="flex justify-center pt-2">
            <FloralDivider className="w-44 text-white/70" />
          </div>
        </div>

        {/* Couple Signatures */}
        <div className="space-y-2 pt-2">
          <p className="text-xs uppercase tracking-widest text-white/80 font-medium">
            Kami yang berbahagia
          </p>
          <h2 className="font-script text-6xl sm:text-7xl md:text-8xl text-white font-normal drop-shadow-md py-2">
            {weddingConfig.closing.groomAndBride}
          </h2>
        </div>

        {/* Family Greeting */}
        <div className="pt-2">
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed whitespace-pre-line font-light">
            {weddingConfig.closing.familyGreeting}
          </p>
        </div>

        {/* Small Footer Notice */}
        <div className="pt-12 border-t border-white/20 text-white/70 text-xs space-y-1 max-w-md mx-auto">
          <p>© {new Date().getFullYear()} Undangan Pernikahan Digital.</p>
          <p className="italic">Created with Love &amp; Elegance</p>
        </div>
      </div>
    </footer>
  );
}
