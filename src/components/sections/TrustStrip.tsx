import { Shield, Lock, Users } from "lucide-react";
import { flagUrl } from "@/lib/flags";

const REGULATORS = [
  { name: "FSA",   country: "Seychelles",   code: "sc" },
  { name: "FSC",   country: "Mauritius",    code: "mu" },
  { name: "CySEC", country: "Cyprus",       code: "cy" },
  { name: "FSCA",  country: "South Africa", code: "za" },
  { name: "CMA",   country: "Kenya",        code: "ke" },
];

const TRUST_BADGES = [
  { icon: Shield, label: "Regulated",     sub: "5 Jurisdictions"    },
  { icon: Lock,   label: "Funds Secured", sub: "Segregated Accounts" },
  { icon: Users,  label: "500K+ Clients", sub: "Worldwide"           },
];

export default function TrustStrip() {
  return (
    <div
      className="border-y border-border px-6 md:px-12"
      style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #f3f0ff 100%)" }}
    >
      {/* Regulators row */}
      <div className="max-w-8xl mx-auto py-8 flex flex-wrap items-center gap-x-4 gap-y-5">
        <span className="text-[10px] font-bold text-text-faint uppercase tracking-widest flex-shrink-0">
          Regulated By
        </span>
        <div className="w-px h-6 bg-border flex-shrink-0 hidden sm:block" />

        {REGULATORS.map((reg, i) => (
          <div key={reg.name} className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 group cursor-default">
              {/* Flag circle */}
              <div
                className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-border shadow-sm flex-shrink-0"
              >
                <img
                  src={flagUrl(reg.code, 40)}
                  alt={reg.country}
                  width={36}
                  height={36}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  loading="lazy"
                />
              </div>
              {/* Text */}
              <div>
                <div className="text-[13px] font-extrabold text-text leading-none group-hover:text-purple-700 transition-colors">
                  {reg.name}
                </div>
                <div className="text-[10px] text-text-faint mt-0.5">{reg.country}</div>
              </div>
            </div>

            {i < REGULATORS.length - 1 && (
              <div className="w-px h-7 bg-border ml-1 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Trust badges row */}
      <div className="max-w-8xl mx-auto pb-8 flex flex-wrap items-center gap-3">
        {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "rgba(108,59,228,0.06)",
              border: "1px solid rgba(108,59,228,0.12)",
            }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(145deg, #ede8ff 0%, #ddd0ff 100%)",
                border: "1px solid rgba(108,59,228,0.14)",
              }}
            >
              <Icon size={11} className="text-purple-600" />
            </div>
            <span className="text-xs font-bold text-text leading-none">{label}</span>
            <span className="w-px h-3 bg-border" />
            <span className="text-[10px] text-text-faint">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
