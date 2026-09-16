"use client";

import { ShieldCheck, Landmark, Globe2, Layers } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  {
    icon: Layers,
    value: "16+",
    label: "Divisional charts",
    sub: "Full Vimshottari Dasha, computed on our own Swiss Ephemeris engine",
  },
  {
    icon: Globe2,
    value: "7",
    label: "Languages",
    sub: "English, Hindi, Odia, Tamil, Telugu, Marathi & Kannada",
  },
  {
    icon: Landmark,
    value: "6",
    label: "Real temples",
    sub: "13 puja types with live daily capacity tracking",
  },
  {
    icon: ShieldCheck,
    value: "0",
    label: "Third-party astrology APIs",
    sub: "Every chart is computed in-house — nothing outsourced",
  },
];

export default function TrustStats() {
  return (
    <section
      data-nav-theme="dark"
      className="relative bg-[#08113A] py-20 sm:py-24 px-6 sm:px-9"
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal className="max-w-xl mx-auto text-center mb-14">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(26px,3.2vw,36px)] leading-[1.15] text-[#FFF7E6] font-medium mb-3">
            Built to be trusted, not just tried
          </h2>
          <p className="text-[14.5px] leading-[1.65] text-[rgba(255,247,230,.65)]">
            Every payment, wallet balance, and order is verified server-side —
            never trusted from the client.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08} y={20}>
                <div className="h-full flex flex-col items-center text-center gap-3 px-4 py-7 rounded-2xl border border-[rgba(244,210,138,.16)] bg-[rgba(255,247,230,.04)]">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[rgba(244,210,138,.1)] border border-[rgba(244,210,138,.25)] text-[#F4D28A]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className="font-[family-name:var(--font-display)] text-[28px] text-[#F4D28A] font-semibold leading-none">
                    {s.value}
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#FFF7E6]">
                    {s.label}
                  </div>
                  <div className="text-[11.5px] leading-[1.5] text-[rgba(255,247,230,.55)]">
                    {s.sub}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
