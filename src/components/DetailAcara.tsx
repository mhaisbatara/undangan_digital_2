"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Check } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";
import { generateGoogleCalendarUrl, downloadIcsFile } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function DetailAcara() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [savedEvent, setSavedEvent] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(weddingConfig.couple.weddingDateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveCalendar = (eventDetails: {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    key: string;
  }) => {
    const googleUrl = generateGoogleCalendarUrl({
      title: eventDetails.title,
      details: eventDetails.description,
      location: eventDetails.location,
      startDate: eventDetails.startDate,
      endDate: eventDetails.endDate,
    });
    window.open(googleUrl, "_blank");
    downloadIcsFile(eventDetails);

    setSavedEvent(eventDetails.key);
    setTimeout(() => setSavedEvent(null), 3000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#e2ebf1] to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Save The Date
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-dusty-800">
            Rangkaian Acara
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider className="w-40" />
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-soft border border-white text-center space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-dusty-600">
            Menghitung Hari Menuju Hari Bahagia
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Hari", value: timeLeft.days },
              { label: "Jam", value: timeLeft.hours },
              { label: "Menit", value: timeLeft.minutes },
              { label: "Detik", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-dusty-50 to-dusty-100 border border-dusty-200/80 shadow-sm"
              >
                <span className="text-2xl sm:text-3xl font-bold text-dusty-800 tabular-nums">
                  {isClient ? String(item.value).padStart(2, "0") : "00"}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-dusty-600 font-medium mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Events Grid: 1 col on mobile, 2 col on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Akad Nikah */}
          <div className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-soft border border-white space-y-5 text-center flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-lavender-100 text-lavender-800 border border-lavender-200 tracking-wide">
                {weddingConfig.events.akad.title}
              </div>

              <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-dusty-800">
                {weddingConfig.events.akad.day}, {weddingConfig.events.akad.date}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-dusty-700">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-dusty-500" />
                  <span>{weddingConfig.events.akad.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-dusty-500 shrink-0" />
                  <span className="font-semibold">{weddingConfig.events.akad.venue}</span>
                </div>
                <p className="text-xs text-dusty-500 max-w-xs mx-auto leading-relaxed">
                  {weddingConfig.events.akad.address}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() =>
                  handleSaveCalendar({
                    title: `Akad Nikah: ${weddingConfig.couple.scriptTitle}`,
                    description: `Akad Nikah ${weddingConfig.couple.scriptTitle} bertempat di ${weddingConfig.events.akad.venue}.`,
                    location: weddingConfig.events.akad.address,
                    startDate: weddingConfig.events.akad.startDateISO,
                    endDate: weddingConfig.events.akad.endDateISO,
                    key: "akad",
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-dusty-600 hover:bg-dusty-700 text-white shadow-md transition-all duration-200 active:scale-95"
              >
                {savedEvent === "akad" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Tersimpan di Kalender</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Simpan Tanggal Akad</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Resepsi Pernikahan */}
          <div className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-soft border border-white space-y-5 text-center flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-lavender-100 text-lavender-800 border border-lavender-200 tracking-wide">
                {weddingConfig.events.resepsi.title}
              </div>

              <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-dusty-800">
                {weddingConfig.events.resepsi.day}, {weddingConfig.events.resepsi.date}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-dusty-700">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-dusty-500" />
                  <span>{weddingConfig.events.resepsi.time}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-dusty-500 shrink-0" />
                  <span className="font-semibold">{weddingConfig.events.resepsi.venue}</span>
                </div>
                <p className="text-xs text-dusty-500 max-w-xs mx-auto leading-relaxed">
                  {weddingConfig.events.resepsi.address}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() =>
                  handleSaveCalendar({
                    title: `Resepsi: ${weddingConfig.couple.scriptTitle}`,
                    description: `Resepsi Pernikahan ${weddingConfig.couple.scriptTitle} bertempat di ${weddingConfig.events.resepsi.venue}.`,
                    location: weddingConfig.events.resepsi.address,
                    startDate: weddingConfig.events.resepsi.startDateISO,
                    endDate: weddingConfig.events.resepsi.endDateISO,
                    key: "resepsi",
                  })
                }
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-dusty-600 hover:bg-dusty-700 text-white shadow-md transition-all duration-200 active:scale-95"
              >
                {savedEvent === "resepsi" ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-200" />
                    <span>Tersimpan di Kalender</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Simpan Tanggal Resepsi</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
