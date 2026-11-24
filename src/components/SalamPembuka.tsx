"use client";

import React from "react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function SalamPembuka() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-gradient-to-b from-[#567a92] via-[#8faec1] to-[#edf4f8]">
      {/* Ambient background soft light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        {/* Bismillah Arabic Typography */}
        <div className="text-center">
          <p className="font-arabic text-3xl sm:text-4xl text-white font-normal leading-relaxed drop-shadow-sm">
            {weddingConfig.greeting.bismillah}
          </p>
          <div className="mt-4 flex justify-center">
            <FloralDivider className="w-44 text-white/70" />
          </div>
        </div>

        {/* Salam */}
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            {weddingConfig.greeting.salam}
          </h3>
          <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light max-w-2xl mx-auto">
            {weddingConfig.greeting.intro}
          </p>
        </div>

        {/* Ayat Al-Quran Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl border border-white/90 space-y-5 text-dusty-800 max-w-2xl mx-auto">
          <p className="font-arabic text-xl sm:text-2xl text-dusty-900 leading-loose text-center font-normal">
            {weddingConfig.greeting.quoteArabic}
          </p>
          <p className="text-xs sm:text-sm italic text-dusty-700 leading-relaxed font-light">
            {weddingConfig.greeting.quoteTranslation}
          </p>
          <div className="pt-2">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-lavender-100 text-lavender-800 border border-lavender-200">
              {weddingConfig.greeting.quoteSource}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
