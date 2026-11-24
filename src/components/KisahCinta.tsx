"use client";

import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { weddingConfig } from "@/data/weddingConfig";
import { FloralDivider } from "./LavenderDeco";

export function KisahCinta() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#edf4f8] via-white to-[#edf4f8] text-dusty-900">
      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-dusty-500 font-semibold">
            Our Love Story
          </span>
          <h2 className="font-script text-5xl sm:text-6xl text-dusty-800">
            Kisah Cinta Kami
          </h2>
          <div className="flex justify-center pt-1">
            <FloralDivider className="w-40" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12 space-y-8 before:absolute before:left-3.5 sm:before:left-5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-dusty-300 before:via-lavender-300 before:to-dusty-400">
          {weddingConfig.stories.map((story, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing milestone node */}
              <div className="absolute -left-[23px] sm:-left-[35px] top-1.5 w-7 h-7 rounded-full bg-white border-2 border-lavender-400 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                <Heart className="w-3.5 h-3.5 text-lavender-500 fill-lavender-400" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-sm shadow-soft border border-white space-y-2.5 transition-all duration-300 hover:shadow-md hover:bg-white">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-lavender-100 text-lavender-800 border border-lavender-200">
                  {story.year}
                </span>
                <h3 className="text-lg font-bold text-dusty-900 flex items-center gap-2">
                  <span>{story.title}</span>
                  <Sparkles className="w-4 h-4 text-lavender-400" />
                </h3>
                <p className="text-xs sm:text-sm text-dusty-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
