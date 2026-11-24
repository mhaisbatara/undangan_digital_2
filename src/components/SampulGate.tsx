"use client";

import React from "react";
import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { LavenderSprigLeft, LavenderSprigRight, FloralDivider } from "./LavenderDeco";

interface SampulGateProps {
  guestName: string;
  onOpen: () => void;
}

export function SampulGate({ guestName, onOpen }: SampulGateProps) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#1b2b37] via-[#243746] to-[#1a2935] overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-dusty-400/20 blur-3xl" />
      </div>

      {/* Main card container (centered, max-w-[430px], full height on mobile/desktop) */}
      <div className="relative w-full max-w-[430px] h-full min-h-screen bg-gradient-to-b from-[#edf4f8] via-[#a8c1d2] to-[#567a92] text-white flex flex-col justify-between items-center text-center px-6 py-12 select-none shadow-2xl">
        
        {/* Soft decorative background glows inside card */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header: The Wedding Of */}
        <div className="relative z-10 pt-4 space-y-2">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-dusty-800 font-semibold">
            {weddingConfig.couple.heroSubtitle}
          </p>
          <div className="flex justify-center">
            <FloralDivider className="w-32 text-dusty-600/60" />
          </div>
        </div>

        {/* Center: Couple Names & Date with Lavender Accents */}
        <div className="relative z-10 my-auto flex flex-col items-center space-y-4">
          {/* Lavender sprigs flanking the center */}
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-12 bottom-0 pointer-events-none animate-sway opacity-90 drop-shadow-md">
              <LavenderSprigLeft className="w-20 h-36" />
            </div>
            <div className="absolute -right-12 bottom-0 pointer-events-none animate-sway opacity-90 drop-shadow-md" style={{ animationDelay: "1.5s" }}>
              <LavenderSprigRight className="w-20 h-36" />
            </div>

            <h1 className="font-script text-6xl sm:text-7xl text-white font-normal drop-shadow-lg px-6 py-2 leading-tight">
              {weddingConfig.couple.scriptTitle}
            </h1>
          </div>

          <div className="space-y-1">
            <p className="text-sm sm:text-base font-medium tracking-[0.2em] text-white/95 drop-shadow">
              {weddingConfig.couple.weddingDateDisplay}
            </p>
          </div>
        </div>

        {/* Bottom Area: Kepada Yth & Tombol Buka Undangan */}
        <div className="relative z-10 w-full max-w-xs space-y-6 pb-4">
          <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md space-y-1">
            <p className="text-xs text-white/90 font-medium">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </p>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-wide capitalize drop-shadow-sm">
              {guestName}
            </h2>
          </div>

          {/* Satu-satunya tombol Buka Undangan */}
          <div>
            <button
              onClick={onOpen}
              className="group inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full text-sm font-semibold bg-white text-dusty-700 shadow-xl border border-white/90 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-lavender-50 hover:text-dusty-900 focus:outline-none"
            >
              <MailOpen className="w-4 h-4 text-dusty-600 group-hover:text-lavender-600 transition-colors" />
              <span>Buka Undangan</span>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
