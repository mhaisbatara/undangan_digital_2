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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#e4edf3] to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Our Moments
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-dusty-800">
            Galeri Bahagia
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider className="w-40" />
          </div>
          <p className="text-xs sm:text-sm text-dusty-600 italic">
            Klik foto untuk memperbesar
          </p>
        </div>

        {/* Gallery Grid: 2 cols on mobile, 3-4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md bg-slate-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] aspect-[4/5]"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-medium">
                  <Eye className="w-4 h-4" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Tutup"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={showPrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-4 sm:left-8 z-50 p-3 sm:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={showNext}
            aria-label="Foto Selanjutnya"
            className="absolute right-4 sm:right-8 z-50 p-3 sm:p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Photo Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full h-[75vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
              <Image
                src={photos[selectedPhotoIndex].url}
                alt={photos[selectedPhotoIndex].caption}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 800px"
                className="object-contain"
              />
            </div>
            {/* Caption & Counter */}
            <div className="mt-4 text-center text-white/90 space-y-1">
              <p className="text-sm sm:text-base font-medium">
                {photos[selectedPhotoIndex].caption}
              </p>
              <p className="text-xs text-white/60">
                {selectedPhotoIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
