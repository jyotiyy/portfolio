import { ArrowRight, FileText } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { withBase } from "../lib/assets";

export default function Resume() {
  return (
    <div className="fade-in">
      <SectionTitle title="Resume" />
      <div className="flex max-w-xl flex-col items-start gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-panel-2)] text-[var(--color-accent)]">
          <FileText size={22} />
        </span>
        <div>
          <h3 className="text-base font-semibold text-[var(--color-text)]">
            View My Resume
          </h3>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Take a look at resume .
          </p>
        </div>
        <a
          href={withBase("resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors duration-200 hover:bg-[var(--color-accent-dim)]"
        >
          Open Resume
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
