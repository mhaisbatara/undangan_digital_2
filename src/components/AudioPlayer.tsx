"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Disc, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  audioUrl: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function AudioPlayer({ audioUrl, isPlaying, onTogglePlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay was prevented by browser policy:", err);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />
      
      {/* Floating music button */}
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-dusty-700 shadow-lg border border-white/60 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group hover:bg-white hover:text-lavender-700 focus:outline-none"
      >
        <span
          className={`absolute -inset-1 rounded-full bg-lavender-400/20 animate-ping pointer-events-none ${
            isPlaying ? "opacity-75" : "opacity-0"
          }`}
        />
        <div className={`relative flex items-center justify-center ${isPlaying ? "animate-spin-slow" : ""}`}>
          <Disc className="w-6 h-6 text-dusty-600 group-hover:text-lavender-600 transition-colors" />
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-dusty-600 text-white flex items-center justify-center text-[10px] shadow">
          {isPlaying ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
        </div>
      </button>
    </>
  );
}
