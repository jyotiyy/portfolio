import { Mail, X, Code2 } from "lucide-react";
import { profile, links } from "../data/profile";
import { withBase } from "../lib/assets";
import SocialLink from "./SocialLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 rounded-3xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 lg:w-[300px]">
      <div className="flex flex-col items-center text-center">
        <div className="h-28 w-28 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-2)] sm:h-32 sm:w-32">
          <img
            src={withBase("profile.jpg")}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        </div>

        <h1 className="mt-4 text-lg font-bold text-[var(--color-text)]">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">
          {profile.title}
        </p>
      </div>

      <div className="my-6 h-px w-full bg-[var(--color-border)]" />

      <nav className="flex flex-col gap-1" aria-label="Contact links">
        <SocialLink
          icon={Mail}
          label="Email"
          value={profile.email}
          href={links.email}
          external={false}
        />
        <SocialLink icon={X} label="X" value={`@${profile.x}`} href={links.x} />
        <SocialLink
          icon={Code2}
          label="LeetCode"
          value={profile.leetcode}
          href={links.leetcode}
        />
        <SocialLink
          icon={FaGithub}
          label="Github"
          value={profile.github}
          href={links.github}
        />
        <SocialLink
          icon={FaLinkedin}
          label="LinkedIn"
          value={profile.linkedin}
          href={links.linkedin}
        />
        
      </nav>

      <div className="my-6 h-px w-full bg-[var(--color-border)]" />

      <div className="flex items-center justify-center gap-3">
        <a
          href={links.email}
          aria-label="Email"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Mail size={16} />
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X profile"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <X size={16} />
        </a>
        <a
          href={links.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode profile"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <Code2 size={16} />
        </a>
      </div>
    </aside>
  );
}
