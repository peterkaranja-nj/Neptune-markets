"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";
import {
  TrendingUp, Diamond, BarChart2, Briefcase, Cpu, Layers,
  Monitor, Smartphone, Zap, Globe, CreditCard, Star, Building2, Users,
  BookOpen, Activity, Calendar, Hash, Info, Shield, Lock, MessageCircle,
  X, Menu, ChevronRight, ArrowRight, ChevronDown,
} from "lucide-react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "trending-up": TrendingUp, "diamond": Diamond, "bar-chart-2": BarChart2,
  "briefcase": Briefcase, "cpu": Cpu, "layers": Layers,
  "monitor": Monitor, "smartphone": Smartphone, "zap": Zap, "globe": Globe,
  "credit-card": CreditCard, "star": Star, "building-2": Building2, "users": Users,
  "book-open": BookOpen, "activity": Activity, "calendar": Calendar, "hash": Hash,
  "info": Info, "shield": Shield, "lock": Lock, "message-circle": MessageCircle,
};

function NavIcon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const Icon = ICON_MAP[name];
  return Icon ? <Icon {...props} /> : null;
}

function NeptuneLogo() {
  return (
    <Link href="/" scroll={true} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 md:gap-2.5 group flex-shrink-0">
      <div className="w-8 h-8 md:w-9 md:h-9 bg-purple-gradient rounded-[10px] flex items-center justify-center shadow-purple-sm group-hover:shadow-purple transition-all">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.18L18 8v8l-6 3.82L6 16V8l6-3.82z" fill="white"/>
          <path d="M9 9l6 3-6 3V9z" fill="white"/>
        </svg>
      </div>
      <span className="font-display text-base md:text-lg font-bold text-text tracking-tight">
        Neptune<span className="text-purple-600">Markets</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleMenuEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  }
  function handleMenuLeave() {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }

  return (
    <>
      {/* ── Navbar bar ── */}
      <div className="fixed top-[37px] left-0 right-0 z-[90] px-3 md:px-8 transition-all duration-300">
        <nav ref={navRef} className={cn(
          "max-w-8xl mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-7 rounded-xl",
          "liquid-glass transition-all duration-300",
          scrolled
            ? "shadow-[0_8px_40px_rgba(108,59,228,0.14)] bg-white/90"
            : "shadow-[0_4px_24px_rgba(108,59,228,0.08)]"
        )}>

          {/* Logo */}
          <NeptuneLogo />

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMenuEnter(link.label)}
                onMouseLeave={handleMenuLeave}
              >
                <button className={cn(
                  "flex items-center gap-1 text-sm font-semibold px-3.5 py-2 rounded-xl transition-all",
                  "text-text hover:text-purple-600 hover:bg-purple-50",
                  activeMenu === link.label && "text-purple-600 bg-purple-50"
                )}>
                  {link.label}
                  <ChevronRight size={12} className={cn("transition-transform duration-200", activeMenu === link.label ? "rotate-90" : "rotate-0")} />
                </button>

                {/* Mega dropdown */}
                <div className={cn(
                  "absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 min-w-[520px]",
                  "bg-white border border-border rounded-2xl shadow-[0_16px_56px_rgba(0,0,0,0.10)]",
                  "transition-all duration-200 origin-top p-2",
                  activeMenu === link.label
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-[0.97] -translate-y-2"
                )}>
                  <div className={cn("grid gap-1", link.items.length > 4 ? "grid-cols-2" : "grid-cols-1")}>
                    {link.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 group transition-all"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 group-hover:border-purple-200 transition-all">
                          <NavIcon name={item.icon} size={17} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-text mb-0.5 group-hover:text-purple-700 transition-colors">{item.label}</div>
                          <div className="text-xs text-text-faint leading-snug">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
            <li>
              <Link href="/partners" className="text-sm font-semibold px-3.5 py-2 rounded-xl text-text hover:text-purple-600 hover:bg-purple-50 transition-all block">
                Partners
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <LanguageSwitcher />
            {/* Login — visible from sm on desktop only */}
            <button className="hidden lg:block text-sm font-semibold text-text-muted px-4 py-2.5 rounded-xl border-[1.5px] border-border-strong hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition-all">
              Login
            </button>
            {/* Open Account — hidden on mobile (in slide-out menu) */}
            <button className="hidden sm:block text-sm font-semibold text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-purple-gradient shadow-[0_2px_12px_rgba(108,59,228,0.3)] hover:shadow-[0_4px_20px_rgba(108,59,228,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all ripple-wrap whitespace-nowrap">
              <span className="hidden md:inline">Open Account</span>
              <span className="md:hidden">Get Started</span>
            </button>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex items-center justify-center w-9 h-9 border-[1.5px] border-border-strong rounded-xl text-text-muted hover:text-text hover:bg-purple-50 transition-all"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[190] lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile slide-out panel ── */}
      <div className={cn(
        "fixed inset-y-0 right-0 w-full max-w-[340px] bg-white z-[200] shadow-[0_0_60px_rgba(0,0,0,0.18)]",
        "flex flex-col transition-transform duration-300 ease-out lg:hidden",
        mobileOpen ? "translate-x-0" : "translate-x-full"
      )}>

        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <NeptuneLogo />
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-text-muted hover:text-text hover:bg-surface-bg transition-all"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable nav sections */}
        <div className="flex-1 overflow-y-auto py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              {/* Section toggle */}
              <button
                onClick={() => setOpenSection(openSection === link.label ? null : link.label)}
                className="w-full flex items-center justify-between px-5 py-3 text-xs font-bold text-text-faint uppercase tracking-widest hover:bg-surface-bg transition-all"
              >
                {link.label}
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200 text-text-faint/60", openSection === link.label ? "rotate-180" : "")}
                />
              </button>

              {/* Section items */}
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                openSection === link.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="px-3 pb-2">
                  {link.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-purple-50 group transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-all">
                        <NavIcon name={item.icon} size={15} className="text-purple-600" />
                      </div>
                      <span className="text-sm font-semibold text-text group-hover:text-purple-700 transition-colors">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Partners */}
          <Link
            href="/partners"
            className="flex items-center gap-3 mx-3 py-2.5 px-3 rounded-xl hover:bg-purple-50 group transition-all"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
              <Users size={15} className="text-purple-600" />
            </div>
            <span className="text-sm font-semibold text-text group-hover:text-purple-700 transition-colors">Partners</span>
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="px-5 py-5 border-t border-border space-y-3">
          <button className="w-full py-3 text-sm font-semibold text-text border-[1.5px] border-border-strong rounded-xl hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 transition-all">
            Login
          </button>
          <button className="w-full py-3 text-sm font-semibold text-white bg-purple-gradient rounded-xl shadow-[0_4px_16px_rgba(108,59,228,0.35)] hover:shadow-[0_6px_24px_rgba(108,59,228,0.45)] transition-all">
            Open Account
          </button>
        </div>
      </div>
    </>
  );
}
