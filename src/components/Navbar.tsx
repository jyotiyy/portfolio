export type Section = "About" | "Resume" | "Projects" | "Contact";

const items: Section[] = ["About", "Resume", "Projects", "Contact"];

interface NavbarProps {
  active: Section;
  onChange: (section: Section) => void;
}

export default function Navbar({ active, onChange }: NavbarProps) {
  return (
    <nav
      aria-label="Section navigation"
      className="flex items-center gap-1 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-1.5 sm:gap-2 sm:justify-end sm:bg-transparent sm:border-0 sm:p-0"
    >
      {items.map((item) => {
        const isActive = item === active;
        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
            }`}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}
