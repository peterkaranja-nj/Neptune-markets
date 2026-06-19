import { cn } from "@/lib/utils";
import SectionTag from "./SectionTag";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ tag, title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", { "text-center": centered }, className)}>
      {tag && (
        <div className={cn({ "flex justify-center": centered })}>
          <SectionTag>{tag}</SectionTag>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-extrabold text-text leading-[1.1] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-text-muted font-light leading-relaxed", { "max-w-xl mx-auto": centered, "max-w-xl": !centered })}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
