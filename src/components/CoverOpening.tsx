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
      className="relative h-screen min-h-[100svh] w-full flex flex-col justify-end items-center text-center overflow-hidden select-none"
    >
      {/* ================= 1. FOTO LATAR HD ASLI (FULL-WIDTH & FULL-HEIGHT) ================= */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src={coupleHeroImg}
          alt={weddingConfig.couple.scriptTitle}
          fill
          priority
          placeholder="blur"
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_top] pointer-events-none select-none transition-transform duration-[3000ms] ease-out hover:scale-[1.02]"
        />
      </div>

      {/* ================= 2. OVERLAY GRADASI RESPONSIP ================= */}
      {/* 0% sampai 50%: Transparan penuh (wajah pasangan jernih di semua ukuran layar) */}
      {/* 50% ke bawah: Gradasi biru dusty lembut ke pekat di area teks */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-50% via-[#567a92]/60 via-75% to-[#567a92]/85 to-100% pointer-events-none" />

      {/* ================= 3. DEKORASI BUNGA LAVENDER ================= */}
      <div className="absolute left-2 sm:left-10 md:left-24 bottom-20 z-20 pointer-events-none animate-sway opacity-90 drop-shadow-md">
        <LavenderSprigLeft className="w-24 h-40 sm:w-32 sm:h-52 md:w-36 md:h-60" />
      </div>
      <div
        className="absolute right-2 sm:right-10 md:right-24 bottom-20 z-20 pointer-events-none animate-sway opacity-90 drop-shadow-md"
        style={{ animationDelay: "1.5s" }}
      >
        <LavenderSprigRight className="w-24 h-40 sm:w-32 sm:h-52 md:w-36 md:h-60" />
      </div>

      {/* ================= 4. SUSUNAN TEKS DI BAGIAN BAWAH ================= */}
      <div className="relative z-20 w-full max-w-2xl px-6 pb-8 pt-16 flex flex-col items-center space-y-3.5">
        
        {/* "THE WEDDING OF" */}
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {weddingConfig.couple.heroSubtitle}
        </p>

        {/* Nama Mempelai dengan font script besar */}
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-white font-normal leading-tight py-1 drop-shadow-[0_3px_16px_rgba(0,0,0,0.7)]">
          {weddingConfig.couple.scriptTitle}
        </h1>

        {/* Tanggal 23.12.2024 */}
        <p className="text-sm sm:text-base font-medium tracking-[0.25em] text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {weddingConfig.couple.weddingDateDisplay}
        </p>

        {/* Tombol "Simpan Tanggal" bergaya Glass */}
        <div className="pt-2">
          <button
            onClick={handleSaveDate}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-medium bg-white/20 hover:bg-white/35 text-white backdrop-blur-md border border-white/40 shadow-xl transition-all duration-300 active:scale-95 hover:shadow-2xl drop-shadow-sm"
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

        {/* Petunjuk "SCROLL KE BAWAH" */}
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
