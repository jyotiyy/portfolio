import type { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ActivityCard({
  icon: Icon,
  title,
  description,
}: ActivityCardProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent-dim)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-panel-2)] text-[var(--color-accent)]">
        <Icon size={20} strokeWidth={2} />
      </span>
      <div>
        <h3 className="mb-1.5 text-base font-semibold text-[var(--color-text)]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      </div>
    </div>
  );
}
