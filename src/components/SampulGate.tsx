"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailOpen, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { weddingConfig } from "@/data/weddingConfig";
import { LavenderSprigLeft, LavenderSprigRight, FloralDivider, LavenderCorner } from "./LavenderDeco";

interface SampulGateProps {
  guestName: string;
  onOpen: () => void;
}

export function SampulGate({ guestName, onOpen }: SampulGateProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClickOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Efek konfeti kelopak lavender & kilau emas yang romantis
    try {
      confetti({
        particleCount: 60,
        spread: 85,
        origin: { y: 0.8 },
        colors: ["#b079d1", "#dfc5ee", "#ffffff", "#8baec0", "#fdf6e2"],
        ticks: 220,
        gravity: 0.55,
        scalar: 0.95,
      });
    } catch {}

    onOpen();
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: [1, 1, 0.9, 0],
        scale: [1, 1.01, 1.03],
      }}
      transition={{
        duration: 1.15,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-50 w-full h-full min-h-screen bg-gradient-to-b from-[#edf4f8] via-[#a8c1d2] to-[#567a92] text-white flex flex-col justify-between items-center text-center px-4 sm:px-8 py-10 select-none overflow-hidden shadow-2xl"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lavender-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Corner Flourishes (Desktop & Mobile) */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-60">
        <LavenderCorner className="w-20 h-20 sm:w-32 sm:h-32 transform -scale-y-100" />
      </div>
      <div className="absolute top-4 right-4 pointer-events-none opacity-60">
        <LavenderCorner className="w-20 h-20 sm:w-32 sm:h-32 transform -scale-100" />
      </div>
      <div className="absolute bottom-4 left-4 sm:left-12 pointer-events-none opacity-75">
        <LavenderSprigLeft className="w-24 h-40 sm:w-36 sm:h-56" />
      </div>
      <div className="absolute bottom-4 right-4 sm:right-12 pointer-events-none opacity-75" style={{ animationDelay: "1.5s" }}>
        <LavenderSprigRight className="w-24 h-40 sm:w-36 sm:h-56" />
      </div>

      {/* Top Header: Undangan Pernikahan */}
      <motion.div
        animate={{
          y: isOpening ? -40 : 0,
          opacity: isOpening ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 pt-4 space-y-2 max-w-lg mx-auto"
      >
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-dusty-900 font-semibold drop-shadow-sm">
          Undangan Pernikahan
        </p>
        <div className="flex justify-center">
          <FloralDivider className="w-36 text-dusty-700/60" />
        </div>
      </motion.div>

      {/* Centerpiece: Nama Mempelai & Tanggal Elegan */}
      <motion.div
        animate={{
          scale: isOpening ? 1.06 : 1,
          opacity: isOpening ? 0 : 1,
          filter: isOpening ? "blur(4px)" : "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-10 my-auto flex flex-col items-center space-y-6 max-w-2xl px-4"
      >
        <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-white font-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] py-2 leading-none">
          {weddingConfig.couple.scriptTitle}
        </h1>

        {/* Tanggal dengan garis vertikal (seperti referensi gambar) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-white/95 drop-shadow-md">
          <span className="text-xs sm:text-sm tracking-widest uppercase font-medium">
            {weddingConfig.events.akad.day}
          </span>
          <span className="h-4 sm:h-5 w-[1.5px] bg-white/60" />
          <span className="text-2xl sm:text-3xl font-bold font-serif-wedding tracking-wider">
            23
          </span>
          <span className="h-4 sm:h-5 w-[1.5px] bg-white/60" />
          <span className="text-xs sm:text-sm tracking-widest uppercase font-medium">
            Desember 2024
          </span>
        </div>
      </motion.div>

      {/* Bottom Area: Kepada Yth & Tombol Buka Undangan */}
      <motion.div
        animate={{
          y: isOpening ? 30 : 0,
          opacity: isOpening ? 0 : 1,
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm sm:max-w-md space-y-5 pb-6"
      >
        {/* Kartu Nama Tamu */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/35 shadow-lg space-y-1">
          <p className="text-xs text-white/90 font-medium tracking-wide">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide capitalize drop-shadow-sm">
            {guestName}
          </h2>
        </div>

        {/* Tombol Buka Undangan */}
        <div>
          <button
            onClick={handleClickOpen}
            disabled={isOpening}
            className={`group inline-flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 px-8 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl border focus:outline-none ${
              isOpening
                ? "bg-lavender-50 text-dusty-900 border-white scale-95 opacity-90"
                : "bg-white text-dusty-800 border-white/90 hover:scale-105 active:scale-95 hover:bg-lavender-50 hover:text-dusty-950 hover:shadow-2xl"
            }`}
          >
            {isOpening ? (
              <>
                <Sparkles className="w-5 h-5 text-lavender-600 animate-spin" />
                <span>Membuka Undangan...</span>
              </>
            ) : (
              <>
                <MailOpen className="w-5 h-5 text-dusty-600 group-hover:text-lavender-600 transition-colors" />
                <span>Buka Undangan</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
