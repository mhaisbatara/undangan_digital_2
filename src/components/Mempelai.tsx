"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider, LavenderSprigLeft, LavenderSprigRight } from "./LavenderDeco";

export function Mempelai() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-white to-[#edf4f8] text-dusty-900">
      {/* Background soft circles */}
      <div className="absolute top-1/3 -left-20 w-56 h-56 bg-lavender-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-56 h-56 bg-dusty-200 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Mempelai Bahagia
          </span>
          <h2 className="font-script text-4xl sm:text-5xl text-dusty-800">
            Kedua Mempelai
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider />
          </div>
        </div>

        {/* Groom Profile Card */}
        <div className="relative p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft border border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
          {/* Lavender sprig accent on corner */}
          <div className="absolute -top-6 -right-4 w-16 h-28 pointer-events-none opacity-85">
            <LavenderSprigRight className="w-full h-full" />
          </div>

          {/* Photo Frame */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-dusty-400 via-lavender-300 to-white shadow-md mb-4">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
              <Image
                src={weddingConfig.groom.photo}
                alt={weddingConfig.groom.fullName}
                fill
                sizes="160px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Groom Details */}
          <div className="space-y-2">
            <span className="font-script text-3xl text-dusty-700 block">
              {weddingConfig.groom.nickname}
            </span>
            <h3 className="text-lg font-bold text-dusty-900 tracking-wide">
              {weddingConfig.groom.fullName}
            </h3>
            <p className="text-xs text-dusty-600 font-medium pt-1">
              {weddingConfig.groom.sonOf}
            </p>
            <p className="text-xs sm:text-sm text-dusty-800 font-semibold leading-relaxed">
              {weddingConfig.groom.fatherName}
              <br />
              <span className="font-normal text-dusty-600">&amp;</span> {weddingConfig.groom.motherName}
            </p>
          </div>

          {/* Instagram Button */}
          <div className="mt-5">
            <a
              href={weddingConfig.groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-dusty-50 hover:bg-dusty-100 text-dusty-700 border border-dusty-200 transition-colors shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-dusty-600" />
              <span>@{weddingConfig.groom.nickname.toLowerCase()}</span>
            </a>
          </div>
        </div>

        {/* Ampersand Divider */}
        <div className="flex items-center justify-center -my-4 relative z-20">
          <div className="w-12 h-12 rounded-full bg-white shadow-md border border-lavender-200 flex items-center justify-center">
            <Heart className="w-5 h-5 text-lavender-500 fill-lavender-400" />
          </div>
        </div>

        {/* Bride Profile Card */}
        <div className="relative p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft border border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
          {/* Lavender sprig accent on corner */}
          <div className="absolute -top-6 -left-4 w-16 h-28 pointer-events-none opacity-85">
            <LavenderSprigLeft className="w-full h-full" />
          </div>

          {/* Photo Frame */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-lavender-400 via-dusty-300 to-white shadow-md mb-4">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
              <Image
                src={weddingConfig.bride.photo}
                alt={weddingConfig.bride.fullName}
                fill
                sizes="160px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bride Details */}
          <div className="space-y-2">
            <span className="font-script text-3xl text-dusty-700 block">
              {weddingConfig.bride.nickname}
            </span>
            <h3 className="text-lg font-bold text-dusty-900 tracking-wide">
              {weddingConfig.bride.fullName}
            </h3>
            <p className="text-xs text-dusty-600 font-medium pt-1">
              {weddingConfig.bride.daughterOf}
            </p>
            <p className="text-xs sm:text-sm text-dusty-800 font-semibold leading-relaxed">
              {weddingConfig.bride.fatherName}
              <br />
              <span className="font-normal text-dusty-600">&amp;</span> {weddingConfig.bride.motherName}
            </p>
          </div>

          {/* Instagram Button */}
          <div className="mt-5">
            <a
              href={weddingConfig.bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-dusty-50 hover:bg-dusty-100 text-dusty-700 border border-dusty-200 transition-colors shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 text-dusty-600" />
              <span>@{weddingConfig.bride.nickname.toLowerCase()}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
