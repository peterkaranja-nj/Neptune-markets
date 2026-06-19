import { cn } from "@/lib/utils";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className }: SectionTagProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 mb-4", className)}>
      <span className="text-2xs font-bold text-purple-600 uppercase tracking-[0.1em]">
        {children}
      </span>
    </div>
  );
}
