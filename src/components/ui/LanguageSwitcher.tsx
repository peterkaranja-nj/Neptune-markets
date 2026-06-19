"use client";
import { useState, useEffect, useRef } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LANGUAGES } from "@/lib/languages";
import { useLanguage } from "@/context/LanguageContext";
import { applyGoogleTranslate } from "@/components/layout/GoogleTranslate";

export default function LanguageSwitcher() {
  const { lang, changeLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 h-9 px-3 rounded-xl text-sm font-medium text-text-muted border border-transparent hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 transition-all"
        aria-label="Change language"
      >
        <Globe size={14} className="flex-shrink-0 opacity-70" />
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:block text-[11px] font-bold tracking-wide">{current.code.toUpperCase()}</span>
        <ChevronDown size={11} className={`transition-transform duration-200 opacity-60 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+6px)] w-56 bg-white border border-border rounded-2xl shadow-[0_16px_56px_rgba(0,0,0,0.12)] z-[300] overflow-hidden">
          <div className="px-4 pt-3 pb-2 border-b border-border">
            <span className="text-[10px] font-bold text-text-faint uppercase tracking-widest">Select Language</span>
          </div>
          <div className="overflow-y-auto max-h-72 py-1">
            {LANGUAGES.map((l) => {
              const active = lang === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => { changeLang(l.code); applyGoogleTranslate(l.code); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors text-left group ${active ? "bg-purple-50" : "hover:bg-purple-50/60"}`}
                >
                  <span className="text-lg leading-none w-7 text-center flex-shrink-0">{l.flag}</span>
                  <span className={`flex-1 text-sm font-semibold transition-colors ${active ? "text-purple-700" : "text-text group-hover:text-purple-700"}`}>
                    {l.native}
                  </span>
                  {active && <Check size={13} className="text-purple-600 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
