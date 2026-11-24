"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function Lokasi() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-white to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-md mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Lokasi Acara
          </span>
          <h2 className="font-script text-4xl sm:text-5xl text-dusty-800">
            Peta Lokasi
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider />
          </div>
        </div>

        {/* Map & Venue Card */}
        <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-soft border border-white space-y-5 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-full bg-dusty-100 text-dusty-600 mx-auto flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-dusty-900">
              {weddingConfig.location.venueName}
            </h3>
            <p className="text-xs sm:text-sm text-dusty-600 leading-relaxed max-w-xs mx-auto">
              {weddingConfig.location.fullAddress}
            </p>
          </div>

          {/* Embedded Google Maps */}
          <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-dusty-200 shadow-inner bg-slate-100">
            <iframe
              title="Peta Lokasi Pernikahan"
              src={weddingConfig.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Button Buka Lokasi */}
          <div className="pt-2">
            <a
              href={weddingConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full text-sm font-semibold bg-dusty-600 hover:bg-dusty-700 text-white shadow-md transition-all duration-200 active:scale-98"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
