"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function GaleriFoto() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos = weddingConfig.gallery;

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
      if (e.key === "ArrowLeft") setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#e4edf3] to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-md mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Our Moments
          </span>
          <h2 className="font-script text-4xl sm:text-5xl text-dusty-800">
            Galeri Bahagia
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider />
          </div>
          <p className="text-xs text-dusty-600 italic">
            Klik foto untuk memperbesar
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3">
          {photos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md bg-slate-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                item.span || "col-span-1 aspect-square"
              }`}
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <div className="flex items-center gap-1.5 text-white text-xs font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="truncate">{item.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Tutup"
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={showPrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={showNext}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm sm:max-w-md w-full h-[70vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].caption}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-contain"
              />
            </div>
            {/* Caption & Counter */}
            <div className="mt-3 text-center text-white/90 space-y-1">
              <p className="text-xs sm:text-sm font-medium">
                {photos[selectedPhotoIndex].caption}
              </p>
              <p className="text-[11px] text-white/60">
                {selectedPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
