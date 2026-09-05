import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
interface SocialLinkProps {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function SocialLink({
  icon: Icon,
  label,
  value,
  href,
  external = true,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${label}: ${value}`}
      className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-white/5"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-panel-2)] text-[var(--color-accent)] transition-colors duration-200 group-hover:bg-[var(--color-accent)] group-hover:text-[#1a1a1a]">
        <Icon size={16} strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted-2)]">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-[var(--color-text)]">
          {value}
        </span>
      </span>
    </a>
  );
}
