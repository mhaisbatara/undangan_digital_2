"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, User, MessageCircleHeart, Users } from "lucide-react";
import { FloralDivider } from "./LavenderDeco";

interface Wish {
  id: string;
  name: string;
  status: "hadir" | "tidak_hadir";
  guestCount: number;
  message: string;
  timestamp: string;
}

const DEFAULT_WISHES: Wish[] = [
  {
    id: "1",
    name: "Dimas Pratama & Istri",
    status: "hadir",
    guestCount: 2,
    message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khoir. Selamat menempuh babak baru Fuad & Nisa, bahagia selalu dunia akhirat!",
    timestamp: "2 jam yang lalu",
  },
  {
    id: "2",
    name: "Sarah Amanda",
    status: "hadir",
    guestCount: 1,
    message: "Masya Allah terharu banget liat kalian akhirnya melangkah ke pelaminan. Lancar sampai hari H ya Nisa cantik!",
    timestamp: "4 jam yang lalu",
  },
  {
    id: "3",
    name: "Rian Hidayat",
    status: "tidak_hadir",
    guestCount: 0,
    message: "Selamat ya bro Fuad & Nisa! Mohon maaf belum bisa hadir langsung karena dinas luar kota, tapi doa terbaik selalu menyertai kalian berdua.",
    timestamp: "6 jam yang lalu",
  },
];

interface RsvpUcapanProps {
  initialGuestName?: string;
}

export function RsvpUcapan({ initialGuestName = "" }: RsvpUcapanProps) {
  const [wishes, setWishes] = useState<Wish[]>(DEFAULT_WISHES);
  const [name, setName] = useState(initialGuestName);
  const [status, setStatus] = useState<"hadir" | "tidak_hadir">("hadir");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Load stored wishes on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_wishes");
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
  }, []);

  // Update initialGuestName if it arrives
  useEffect(() => {
    if (initialGuestName && !name) {
      setName(initialGuestName);
    }
  }, [initialGuestName, name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      status,
      guestCount: status === "hadir" ? guestCount : 0,
      message: message.trim(),
      timestamp: "Baru saja",
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);

    try {
      localStorage.setItem("wedding_wishes", JSON.stringify(updatedWishes));
    } catch (e) {
      console.warn("Could not write to localStorage", e);
    }

    // Trigger joyful confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#8baec0", "#b079d1", "#ffffff", "#567a92"],
      });
    } catch {}

    setSubmitted(true);
    setMessage("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-[#e2ecf2] to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-md mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            RSVP &amp; Wishes
          </span>
          <h2 className="font-script text-4xl sm:text-5xl text-dusty-800">
            Konfirmasi &amp; Ucapan
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider />
          </div>
          <p className="text-xs text-dusty-600 max-w-xs mx-auto leading-relaxed">
            Berikan konfirmasi kehadiran dan tuliskan doa serta ucapan terbaik untuk kami.
          </p>
        </div>

        {/* RSVP Form Card */}
        <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md shadow-soft border border-white space-y-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Nama */}
            <div>
              <label className="block text-xs font-semibold text-dusty-700 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs sm:text-sm bg-dusty-50 border border-dusty-200 text-dusty-900 placeholder:text-dusty-400 focus:outline-none focus:ring-2 focus:ring-dusty-400 transition"
                />
                <User className="w-4 h-4 text-dusty-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Konfirmasi Kehadiran */}
            <div>
              <label className="block text-xs font-semibold text-dusty-700 mb-1">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setStatus("hadir")}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                    status === "hadir"
                      ? "bg-dusty-600 text-white border-dusty-600 shadow-sm"
                      : "bg-dusty-50 text-dusty-700 border-dusty-200 hover:bg-dusty-100"
                  }`}
                >
                  ✓ Hadir
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("tidak_hadir")}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                    status === "tidak_hadir"
                      ? "bg-dusty-600 text-white border-dusty-600 shadow-sm"
                      : "bg-dusty-50 text-dusty-700 border-dusty-200 hover:bg-dusty-100"
                  }`}
                >
                  ✕ Tidak Hadir
                </button>
              </div>
            </div>

            {/* Jumlah Tamu (Only if hadir) */}
            {status === "hadir" && (
              <div>
                <label className="block text-xs font-semibold text-dusty-700 mb-1">
                  Jumlah Tamu
                </label>
                <div className="relative">
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 pl-10 rounded-xl text-xs sm:text-sm bg-dusty-50 border border-dusty-200 text-dusty-900 focus:outline-none focus:ring-2 focus:ring-dusty-400 transition"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                  </select>
                  <Users className="w-4 h-4 text-dusty-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            {/* Kolom Pesan & Doa */}
            <div>
              <label className="block text-xs font-semibold text-dusty-700 mb-1">
                Doa &amp; Ucapan
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan doa dan ucapan selamat untuk kedua mempelai..."
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-dusty-50 border border-dusty-200 text-dusty-900 placeholder:text-dusty-400 focus:outline-none focus:ring-2 focus:ring-dusty-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-6 rounded-full text-xs sm:text-sm font-semibold bg-dusty-600 hover:bg-dusty-700 text-white shadow-md transition-all active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Konfirmasi &amp; Doa</span>
            </button>

            {/* Success alert */}
            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Terima kasih! Doa dan konfirmasi kehadiran Anda telah terkirim.</span>
              </div>
            )}
          </form>
        </div>

        {/* Wishes List Container */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-bold text-dusty-800 flex items-center gap-2">
              <MessageCircleHeart className="w-4 h-4 text-lavender-500" />
              <span>Ucapan &amp; Doa ({wishes.length})</span>
            </h3>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-sm border border-white space-y-1.5 transition-all hover:shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs sm:text-sm text-dusty-900">
                    {item.name}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      item.status === "hadir"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {item.status === "hadir" ? `Hadir (${item.guestCount})` : "Berhalangan"}
                  </span>
                </div>
                <p className="text-xs text-dusty-700 leading-relaxed">
                  {item.message}
                </p>
                <p className="text-[10px] text-dusty-400">
                  {item.timestamp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
