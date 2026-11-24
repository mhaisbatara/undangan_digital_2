"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronDown, Check } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { LavenderSprigLeft, LavenderSprigRight } from "./LavenderDeco";
import { generateGoogleCalendarUrl, downloadIcsFile } from "@/lib/utils";
import coupleHeroImg from "../../public/images/couple-hd.jpg";

export function CoverOpening() {
  const [calendarSaved, setCalendarSaved] = useState(false);

  const handleSaveDate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const event = {
      title: `The Wedding of ${weddingConfig.couple.scriptTitle}`,
      description: `Pernikahan ${weddingConfig.couple.scriptTitle}. Mohon doa restunya.`,
      location: weddingConfig.location.venueName,
      startDate: weddingConfig.events.akad.startDateISO,
      endDate: weddingConfig.events.resepsi.endDateISO,
    };

    // Buka Google Calendar di tab baru dan unduh file .ics
    const googleUrl = generateGoogleCalendarUrl({
      title: event.title,
      details: event.description,
      location: event.location,
      startDate: event.startDate,
      endDate: event.endDate,
    });
    window.open(googleUrl, "_blank");
    downloadIcsFile(event);

    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 3000);
  };

  return (
    <section
      id="cover"
      className="relative h-[100svh] min-h-[100svh] w-full max-w-[430px] mx-auto flex flex-col justify-end items-center text-center overflow-hidden select-none"
    >
      {/* ================= 1. FOTO LATAR HD ASLI (FULL-SCREEN, TAJAM & JERNIH) ================= */}
      {/* Opacity penuh, tanpa filter blur, tanpa mix-blend-mode. Resolusi HD 1080x1920 (9:16). */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={coupleHeroImg}
          alt={weddingConfig.couple.scriptTitle}
          fill
          priority
          placeholder="blur"
          quality={90}
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover object-[center_top] pointer-events-none select-none transition-transform duration-[2500ms] ease-out hover:scale-[1.03]"
        />
      </div>

      {/* ================= 2. OVERLAY GRADASI (AREA WAJAH TRANSPARAN PENUH) ================= */}
      {/* 0% sampai 55%: Transparan penuh (area wajah pasangan tampak jernih dan tajam) */}
      {/* 55% ke bawah: Gradasi biru dusty mulai muncul, maksimal opacity 85% di paling bawah (area teks) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-55% via-[#567a92]/60 via-75% to-[#567a92]/85 to-100% pointer-events-none" />

      {/* ================= 3. DEKORASI BUNGA LAVENDER ================= */}
      {/* Terletak di kiri dan kanan bawah, di atas overlay, tidak menutupi wajah atau teks */}
      <div className="absolute -left-5 bottom-24 z-20 pointer-events-none animate-sway opacity-90 drop-shadow-md">
        <LavenderSprigLeft className="w-20 h-36 sm:w-24 sm:h-44" />
      </div>
      <div
        className="absolute -right-5 bottom-24 z-20 pointer-events-none animate-sway opacity-90 drop-shadow-md"
        style={{ animationDelay: "1.5s" }}
      >
        <LavenderSprigRight className="w-20 h-36 sm:w-24 sm:h-44" />
      </div>

      {/* ================= 4. SUSUNAN TEKS DI BAGIAN BAWAH ================= */}
      <div className="relative z-20 w-full max-w-sm px-6 pb-8 pt-12 flex flex-col items-center space-y-3">
        
        {/* "THE WEDDING OF" (Huruf kapital, letter-spacing lebar, putih) */}
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {weddingConfig.couple.heroSubtitle}
        </p>

        {/* Nama Mempelai "Nisa & Fuad" dengan font script besar, putih */}
        <h1 className="font-script text-5xl sm:text-6xl text-white font-normal leading-tight py-1 drop-shadow-[0_3px_14px_rgba(0,0,0,0.7)]">
          {weddingConfig.couple.scriptTitle}
        </h1>

        {/* Tanggal 23.12.2024 */}
        <p className="text-sm sm:text-base font-medium tracking-[0.2em] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {weddingConfig.couple.weddingDateDisplay}
        </p>

        {/* Tombol "Simpan Tanggal" bergaya Glass (transparan blur, border tipis putih) */}
        <div className="pt-2">
          <button
            onClick={handleSaveDate}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-white/20 hover:bg-white/35 text-white backdrop-blur-md border border-white/40 shadow-lg transition-all duration-300 active:scale-95 hover:shadow-xl drop-shadow-sm"
          >
            {calendarSaved ? (
              <>
                <Check className="w-4 h-4 text-emerald-200" />
                <span>Tersimpan di Kalender</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Simpan Tanggal</span>
              </>
            )}
          </button>
        </div>

        {/* Petunjuk "SCROLL KE BAWAH" dengan ikon panah beranimasi naik-turun di paling bawah */}
        <div className="pt-4 flex flex-col items-center text-white/90 animate-bounce-slow">
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-semibold drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
            Scroll Ke Bawah
          </span>
          <ChevronDown className="w-5 h-5 -mt-0.5 text-white drop-shadow" />
        </div>

      </div>
    </section>
  );
}
