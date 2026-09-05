import { Mail, X, Code2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { profile, links } from "../data/profile";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: links.email,
    external: false,
  },
  {
    icon: X,
    label: "X",
    value: `@${profile.x}`,
    href: links.x,
    external: true,
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: profile.leetcode,
    href: links.leetcode,
    external: true,
  },
  {
    icon: FaGithub,
    label: "Github",
    value: profile.github,
    href: links.github,
    external: true,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: profile.linkedin,
    href: links.linkedin,
    external: true,
  },

];

export default function Contact() {
  return (
    <div className="fade-in">
      <SectionTitle title="Contact" />
      <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
        Have a project, research idea, or opportunity you'd like to discuss?
        Feel free to reach out.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contactItems.map(({ icon: Icon, label, value, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={`${label}: ${value}`}
            className="group flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent-dim)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-panel-2)] text-[var(--color-accent)] transition-colors duration-200 group-hover:bg-[var(--color-accent)] group-hover:text-[#1a1a1a]">
              <Icon size={18} />
            </span>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--color-muted-2)]">
                {label}
              </span>
              <span className="block truncate text-sm font-medium text-[var(--color-text)]">
                {value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
