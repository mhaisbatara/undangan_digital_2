"use client";

import React from "react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function SalamPembuka() {
  return (
    <section className="relative py-16 px-5 text-center overflow-hidden bg-gradient-to-b from-[#567a92] via-[#8faec1] to-[#edf4f8]">
      {/* Ambient background soft light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        {/* Bismillah Arabic Typography */}
        <div className="text-center">
          <p className="font-arabic text-2xl md:text-3xl text-white font-normal leading-relaxed drop-shadow-sm">
            {weddingConfig.greeting.bismillah}
          </p>
          <div className="mt-3 flex justify-center">
            <FloralDivider className="w-40 text-white/70" />
          </div>
        </div>

        {/* Salam */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white tracking-wide">
            {weddingConfig.greeting.salam}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
            {weddingConfig.greeting.intro}
          </p>
        </div>

        {/* Ayat Al-Quran Card */}
        <div className="p-6 rounded-2xl bg-white/85 backdrop-blur-md shadow-lg border border-white/90 space-y-4 text-dusty-800">
          <p className="font-arabic text-lg sm:text-xl text-dusty-900 leading-loose text-center font-normal">
            {weddingConfig.greeting.quoteArabic}
          </p>
          <p className="text-xs sm:text-sm italic text-dusty-700 leading-relaxed font-light">
            {weddingConfig.greeting.quoteTranslation}
          </p>
          <div className="pt-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-lavender-100 text-lavender-800 border border-lavender-200">
              {weddingConfig.greeting.quoteSource}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
