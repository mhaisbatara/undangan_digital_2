"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { weddingConfig } from "@/data/weddingConfig";
import { SampulGate } from "@/components/SampulGate";
import { CoverOpening } from "@/components/CoverOpening";
import { SalamPembuka } from "@/components/SalamPembuka";
import { Mempelai } from "@/components/Mempelai";
import { DetailAcara } from "@/components/DetailAcara";
import { Lokasi } from "@/components/Lokasi";
import { GaleriFoto } from "@/components/GaleriFoto";
import { KisahCinta } from "@/components/KisahCinta";
import { RsvpUcapan } from "@/components/RsvpUcapan";
import { AmplopDigital } from "@/components/AmplopDigital";
import { Penutup } from "@/components/Penutup";
import { AudioPlayer } from "@/components/AudioPlayer";

function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  const guestQuery = searchParams.get("to") || searchParams.get("u") || searchParams.get("nama");
  const guestName = guestQuery ? decodeURIComponent(guestQuery) : "Tamu Undangan";

  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Kunci scroll halaman selama sampul belum dibuka
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <main className="min-h-screen w-full bg-dusty-50 relative overflow-x-hidden flex flex-col">
      
      {/* ================= 1. HALAMAN SAMPUL (GATE FULL-WIDTH RESPONSIVE) ================= */}
      <AnimatePresence>
        {!isOpen && (
          <SampulGate
            guestName={guestName}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* ================= 2. UNDANGAN UTAMA (FULL-WIDTH RESPONSIVE) ================= */}
      <motion.div
        initial={{ opacity: 0.85, scale: 0.99 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 0.99 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full min-h-screen bg-dusty-50 relative flex flex-col overflow-x-hidden"
      >
        {/* Cover Utama dengan Foto Latar HD Penuh & Teks Elegan */}
        <CoverOpening />

        {/* Salam Pembuka */}
        <SalamPembuka />

        {/* Profil Mempelai */}
        <Mempelai />

        {/* Detail Acara & Countdown Timer */}
        <DetailAcara />

        {/* Peta Lokasi */}
        <Lokasi />

        {/* Galeri Foto Pre-Wedding */}
        <GaleriFoto />

        {/* Kisah Cinta */}
        <KisahCinta />

        {/* Form RSVP dan Daftar Ucapan Doa */}
        <RsvpUcapan initialGuestName={guestName !== "Tamu Undangan" ? guestName : ""} />

        {/* Amplop Digital & Kirim Kado */}
        <AmplopDigital />

        {/* Penutup */}
        <Penutup />

        {/* Floating Audio Player */}
        <AudioPlayer
          audioUrl={weddingConfig.couple.audioUrl}
          isPlaying={isPlayingMusic}
          onTogglePlay={handleToggleMusic}
        />
      </motion.div>

    </main>
  );
}

export default function WeddingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-dusty-400 border-t-transparent rounded-full animate-spin" />
            <p className="font-script text-2xl text-lavender-300">Memuat Undangan...</p>
          </div>
        </div>
      }
    >
      <WeddingInvitationContent />
    </Suspense>
  );
}
