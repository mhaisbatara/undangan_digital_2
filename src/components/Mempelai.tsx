"use client";

import React from "react";
import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider, LavenderSprigLeft, LavenderSprigRight } from "./LavenderDeco";

export function Mempelai() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-white to-[#edf4f8] text-dusty-900">
      {/* Background soft circles */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-lavender-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-dusty-200 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Mempelai Bahagia
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-dusty-800">
            Kedua Mempelai
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider className="w-40" />
          </div>
        </div>

        {/* Profiles Grid: 1 col on mobile, 2 col on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
          
          {/* Groom Profile Card */}
          <div className="relative p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft border border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
            {/* Lavender sprig accent on corner */}
            <div className="absolute -top-6 -right-4 w-16 h-28 pointer-events-none opacity-85">
              <LavenderSprigRight className="w-full h-full" />
            </div>

            {/* Photo Frame */}
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-dusty-400 via-lavender-300 to-white shadow-md mb-4">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src={weddingConfig.groom.photo}
                  alt={weddingConfig.groom.fullName}
                  fill
                  sizes="180px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Groom Details */}
            <div className="space-y-2">
              <span className="font-script text-4xl text-dusty-700 block">
                {weddingConfig.groom.nickname}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-dusty-900 tracking-wide">
                {weddingConfig.groom.fullName}
              </h3>
              <p className="text-xs text-dusty-600 font-medium pt-1">
                {weddingConfig.groom.sonOf}
              </p>
              <p className="text-sm text-dusty-800 font-semibold leading-relaxed">
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
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium bg-dusty-50 hover:bg-dusty-100 text-dusty-700 border border-dusty-200 transition-colors shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-dusty-600" />
                <span>@{weddingConfig.groom.nickname.toLowerCase()}</span>
              </a>
            </div>
          </div>

          {/* Bride Profile Card */}
          <div className="relative p-8 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft border border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
            {/* Lavender sprig accent on corner */}
            <div className="absolute -top-6 -left-4 w-16 h-28 pointer-events-none opacity-85">
              <LavenderSprigLeft className="w-full h-full" />
            </div>

            {/* Photo Frame */}
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-lavender-400 via-dusty-300 to-white shadow-md mb-4">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                <Image
                  src={weddingConfig.bride.photo}
                  alt={weddingConfig.bride.fullName}
                  fill
                  sizes="180px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bride Details */}
            <div className="space-y-2">
              <span className="font-script text-4xl text-dusty-700 block">
                {weddingConfig.bride.nickname}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-dusty-900 tracking-wide">
                {weddingConfig.bride.fullName}
              </h3>
              <p className="text-xs text-dusty-600 font-medium pt-1">
                {weddingConfig.bride.daughterOf}
              </p>
              <p className="text-sm text-dusty-800 font-semibold leading-relaxed">
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
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-medium bg-dusty-50 hover:bg-dusty-100 text-dusty-700 border border-dusty-200 transition-colors shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-dusty-600" />
                <span>@{weddingConfig.bride.nickname.toLowerCase()}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
