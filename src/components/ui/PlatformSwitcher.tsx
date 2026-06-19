import Link from "next/link";
import { Monitor, BarChart2, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { id: "mt5", name: "MetaTrader 5", badge: "Most Advanced", href: "/platforms/mt5", Icon: Monitor  },
  { id: "mt4", name: "MetaTrader 4", badge: "Most Popular",  href: "/platforms/mt4", Icon: BarChart2 },
  { id: "web", name: "WebTerminal",  badge: "No Install",    href: "/platforms/web", Icon: Globe    },
] as const;

type PlatformId = typeof OPTIONS[number]["id"];

export default function PlatformSwitcher({ active, light }: { active: PlatformId; light?: boolean }) {
  return (
    <div className="flex gap-2.5 mb-10 flex-wrap">
      {OPTIONS.map((p) => {
        const isActive = p.id === active;
        const { Icon } = p;
        return (
          <Link
            key={p.id}
            href={p.href}
            className={cn(
              "group relative flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl transition-all duration-200 select-none",
              isActive
                ? "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.13),0_2px_6px_rgba(0,0,0,0.07)]"
                : light
                  ? "border border-border hover:border-purple-200 hover:bg-purple-50/50"
                  : "border border-white/15 hover:border-white/30 hover:bg-white/[0.07]"
            )}
          >
            <div className={cn(
              "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
              isActive
                ? "bg-purple-gradient shadow-[0_3px_12px_rgba(108,59,228,0.40)]"
                : light
                  ? "bg-navy group-hover:opacity-80"
                  : "bg-white/10 group-hover:bg-white/[0.15]"
            )}>
              <Icon size={17} color="#fff" />
            </div>

            <div className="flex flex-col gap-px">
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest leading-none transition-colors",
                isActive ? "text-[#0d0a1e]/40" : light ? "text-text-faint" : "text-white/35 group-hover:text-white/50"
              )}>
                {p.badge}
              </span>
              <span className={cn(
                "text-sm font-bold leading-tight transition-colors whitespace-nowrap",
                isActive ? "text-[#0d0a1e]" : light ? "text-text-muted group-hover:text-text" : "text-white/70 group-hover:text-white/90"
              )}>
                {p.name}
              </span>
            </div>

            {isActive && (
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
