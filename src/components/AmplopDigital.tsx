"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, CreditCard, Package } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function AmplopDigital() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-white to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-md mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Wedding Gift
          </span>
          <h2 className="font-script text-4xl sm:text-5xl text-dusty-800">
            Tanda Kasih
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider />
          </div>
          <p className="text-xs text-dusty-600 max-w-xs mx-auto leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat mengirimkannya melalui:
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="space-y-4">
          {weddingConfig.gifts.bankAccounts.map((account, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-gradient-to-br from-white via-dusty-50 to-white shadow-soft border border-white space-y-4 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-dusty-800 uppercase">
                  {account.bank}
                </span>
                <CreditCard className="w-5 h-5 text-dusty-400" />
              </div>

              <div className="space-y-1">
                <p className="text-xs text-dusty-500 font-medium">Nomor Rekening</p>
                <p className="text-lg sm:text-xl font-bold tracking-wider text-dusty-900 font-mono">
                  {account.accountNumber}
                </p>
                <p className="text-xs text-dusty-700 font-medium pt-1">
                  a.n. <span className="font-semibold">{account.accountHolder}</span>
                </p>
              </div>

              <div>
                <button
                  onClick={() => copyToClipboard(account.accountNumber, `bank-${idx}`)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-xs font-semibold bg-dusty-100 hover:bg-dusty-200 text-dusty-800 border border-dusty-200 transition-all active:scale-95 shadow-sm"
                >
                  {copiedKey === `bank-${idx}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Nomor Rekening Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Nomor Rekening</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Gift / Kirim Kado */}
        <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-soft border border-white space-y-4">
          <div className="flex items-center gap-2 text-dusty-800 font-bold text-sm">
            <Package className="w-5 h-5 text-lavender-500" />
            <span>Kirim Kado Fisik</span>
          </div>

          <div className="text-xs text-dusty-600 space-y-1.5 leading-relaxed bg-dusty-50/70 p-4 rounded-2xl border border-dusty-100">
            <p className="font-semibold text-dusty-800">
              Penerima: {weddingConfig.gifts.physicalGift.recipient}
            </p>
            <p className="text-dusty-700">
              No. HP: {weddingConfig.gifts.physicalGift.phone}
            </p>
            <p className="text-dusty-600 pt-1">
              {weddingConfig.gifts.physicalGift.address}
            </p>
          </div>

          <div>
            <button
              onClick={() =>
                copyToClipboard(weddingConfig.gifts.physicalGift.address, "physical-gift")
              }
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl text-xs font-semibold bg-dusty-100 hover:bg-dusty-200 text-dusty-800 border border-dusty-200 transition-all active:scale-95 shadow-sm"
            >
              {copiedKey === "physical-gift" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Alamat Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat Pengiriman</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
