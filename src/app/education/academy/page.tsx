import PageLayout from "@/components/layout/PageLayout";
import Animate from "@/components/ui/Animate";
import { BookOpen, Play, Award, ArrowRight } from "lucide-react";

export const metadata = { title: "Neptune Academy | Neptune Markets — Structured Trading Courses" };

const COURSES = [
  { level: "Beginner",     title: "Forex Fundamentals",          lessons: 12, duration: "4 hrs",  desc: "Start here. How currency markets work, how to read a chart, and how to place your first trade." },
  { level: "Beginner",     title: "CFD Trading Basics",           lessons: 10, duration: "3 hrs",  desc: "What CFDs are, how leverage works, understanding margin, and common beginner mistakes to avoid." },
  { level: "Intermediate", title: "Technical Analysis 101",       lessons: 18, duration: "6 hrs",  desc: "Support and resistance, trend lines, moving averages, RSI, MACD and Fibonacci retracements." },
  { level: "Intermediate", title: "Risk Management Mastery",      lessons: 14, duration: "5 hrs",  desc: "Position sizing, stop-loss strategies, risk-reward ratios, and portfolio-level risk control." },
  { level: "Intermediate", title: "Trading Psychology",           lessons: 10, duration: "3 hrs",  desc: "Emotional discipline, cognitive biases, building a trading journal, and maintaining consistency." },
  { level: "Advanced",     title: "Advanced Chart Patterns",      lessons: 20, duration: "7 hrs",  desc: "Head & shoulders, double tops, wedges, flags, cups — with real examples and trade setups." },
  { level: "Advanced",     title: "Algorithmic Trading with MT5", lessons: 16, duration: "8 hrs",  desc: "Write and backtest Expert Advisors using MQL5. Automate your strategy step by step." },
  { level: "Advanced",     title: "Macroeconomics for Traders",   lessons: 12, duration: "5 hrs",  desc: "Central bank policy, inflation, interest rates, and how to trade major economic events." },
];

const LEVEL_STYLE: Record<string, { cls: string; bg: string }> = {
  "Beginner":     { cls: "text-green-400 border-green-400/30",   bg: "rgba(74,222,128,0.12)"   },
  "Intermediate": { cls: "text-blue-400 border-blue-400/30",     bg: "rgba(96,165,250,0.12)"   },
  "Advanced":     { cls: "text-purple-300 border-purple-300/30", bg: "rgba(196,181,253,0.12)"  },
};

const HOW_IT_WORKS = [
  { icon: BookOpen, color: "#6c3be4", title: "Learn at Your Own Pace",  desc: "All courses are available on-demand. Progress through lessons whenever suits you, on any device." },
  { icon: Play,     color: "#0891b2", title: "Video-First Learning",    desc: "Every lesson is built around high-quality video content with supporting text, charts, and quizzes." },
  { icon: Award,    color: "#059669", title: "Completion Certificates", desc: "Earn a Neptune Academy certificate on completing each course — shareable on your professional profile." },
];

const LEVELS = [
  { label: "Beginner",     color: "#4ade80", bg: "rgba(74,222,128,0.12)",  courses: 2  },
  { label: "Intermediate", color: "#60a5fa", bg: "rgba(96,165,250,0.12)",  courses: 3  },
  { label: "Advanced",     color: "#c4b5fd", bg: "rgba(196,181,253,0.12)", courses: 3  },
];

export default function AcademyPage() {
  return (
    <PageLayout>
      {/* ── HERO: Center + floating course level badges ── */}
      <section className="relative pt-[180px] pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-surface-bg">
        <div className="absolute inset-0 bg-hero-mesh z-0 pointer-events-none" />
        {/* Floating decorative badges */}
        <div className="absolute top-[140px] left-[8%] hidden xl:block pointer-events-none z-0 hero-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="badge-stagger rounded-full px-4 py-2 text-xs font-bold border" style={{ color: "#4ade80", borderColor: "rgba(74,222,128,0.3)", background: "rgba(74,222,128,0.1)" }}>Beginner</div>
        </div>
        <div className="absolute top-[200px] right-[9%] hidden xl:block pointer-events-none z-0 hero-fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="badge-stagger rounded-full px-4 py-2 text-xs font-bold border" style={{ color: "#60a5fa", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.1)" }}>Intermediate</div>
        </div>
        <div className="absolute top-[320px] left-[6%] hidden xl:block pointer-events-none z-0 hero-fade-up" style={{ animationDelay: "1s" }}>
          <div className="badge-stagger rounded-full px-4 py-2 text-xs font-bold border" style={{ color: "#c4b5fd", borderColor: "rgba(196,181,253,0.3)", background: "rgba(196,181,253,0.1)" }}>Advanced</div>
        </div>
        <div className="max-w-8xl mx-auto relative z-10 text-center">
          <span className="hero-fade-up inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-full mb-6">
            Neptune Academy
          </span>
          <h1 className="hero-fade-up-d1 font-display text-[clamp(34px,4vw,60px)] font-extrabold text-text leading-[1.07] tracking-[-0.03em] mb-5 max-w-3xl mx-auto">
            Learn to Trade —<br />At Your Own Pace,<br /><span className="gradient-text">At Zero Cost.</span>
          </h1>
          <p className="hero-fade-up-d2 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Structured video courses from beginner to advanced, built by professional traders and analysts. Free for every Neptune Markets account holder.
          </p>
          <div className="hero-fade-up-d3 flex gap-4 justify-center flex-wrap mb-10">
            <a href="/accounts" className="inline-flex items-center gap-2 font-semibold text-base text-white px-8 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.38)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.5)] hover:-translate-y-0.5 transition-all btn-sheen">
              Start Learning Free
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 font-semibold text-base text-text px-8 py-4 rounded-xl bg-white border-[1.5px] border-border-strong hover:border-purple-400 hover:text-purple-700 hover:-translate-y-0.5 transition-all shadow-purple-sm">
              View All Courses
            </a>
          </div>
          {/* Course level overview pills */}
          <div className="hero-fade-up-d4 flex flex-wrap gap-4 justify-center">
            {LEVELS.map(({ label, color, bg, courses }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl px-5 py-3 border" style={{ background: bg, borderColor: `${color}30`, color }}>
                <span className="font-bold text-sm">{label}</span>
                <span className="text-xs opacity-60">{courses} courses</span>
              </div>
            ))}
            <div className="flex items-center gap-2 rounded-xl px-5 py-3 border border-border bg-white text-text-muted">
              <Award size={14} className="text-purple-600" />
              <span className="text-sm font-semibold text-text">Certificates included</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-8xl mx-auto relative z-10">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-3">All Courses</h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">Structured learning paths from beginner through to advanced professional.</p>
          </Animate>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {COURSES.map((course, i) => {
              const style = LEVEL_STYLE[course.level];
              return (
                <Animate key={course.title} delay={i * 55} from="up">
                  <div className="group relative rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    <div className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full border mb-4 ${style.cls}`}
                      style={{ background: style.bg }}>
                      {course.level}
                    </div>
                    <h3 className="font-display text-sm font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{course.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed mb-5">{course.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                      <span>{course.lessons} lessons</span>
                      <span>·</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <Animate className="text-center mb-10">
            <h2 className="font-display text-4xl font-extrabold text-text tracking-tight mb-3">How Neptune Academy Works</h2>
            <p className="text-text-muted text-base max-w-xl mx-auto">Self-paced, video-first learning with real certifications — free for all account holders.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((f, i) => {
              const Icon = f.icon;
              return (
                <Animate key={f.title} delay={i * 100} from="up">
                  <div className="group relative rounded-2xl p-8 border border-border bg-surface-bg hover:border-purple-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,59,228,0.10)] transition-all duration-300 overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                      style={{ background: `linear-gradient(90deg, ${f.color}, ${f.color}88)` }} />
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${f.color}18`, border: `1.5px solid ${f.color}30` }}>
                      <Icon size={22} style={{ color: f.color }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-text mb-3">{f.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UNIQUE CTA: Learning path preview ── */}
      <section className="py-14 md:py-20 px-4 md:px-8 lg:px-12 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate className="text-center mb-12" from="up">
            <h2 className="font-display text-4xl font-extrabold text-white mb-3">Your Complete Learning Path</h2>
            <p className="text-white/55 text-base max-w-xl mx-auto">Neptune Academy is structured so you can start from zero and progress to professional-grade strategies.</p>
          </Animate>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {LEVELS.map(({ label, color, bg, courses }, i) => (
              <Animate key={label} delay={i * 100} from="up">
                <div className="rounded-2xl p-7 text-center hover:-translate-y-1 transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: bg, border: `2px solid ${color}40` }}>
                    <BookOpen size={22} style={{ color }} />
                  </div>
                  <div className="font-display text-lg font-bold text-white mb-1">{label}</div>
                  <div className="text-sm mb-4" style={{ color: `${color}99` }}>{courses} courses · Free certificates</div>
                  <a href="/accounts" className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5" style={{ color }}>
                    Start <ArrowRight size={12} />
                  </a>
                </div>
              </Animate>
            ))}
          </div>
          <Animate delay={300} from="scale" className="text-center">
            <a href="/accounts" className="inline-flex items-center gap-3 font-semibold text-base text-white px-10 py-4 rounded-xl bg-purple-gradient shadow-[0_4px_24px_rgba(108,59,228,0.4)] hover:shadow-[0_8px_36px_rgba(108,59,228,0.55)] hover:-translate-y-0.5 transition-all btn-sheen">
              Open Free Account — Unlock All Courses <ArrowRight size={16} />
            </a>
          </Animate>
        </div>
      </section>
    </PageLayout>
  );
}
