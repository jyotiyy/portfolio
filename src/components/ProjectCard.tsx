import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { withBase } from "../lib/assets";

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Open ${project.title}`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent-dim)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-panel-2)]">
        <img
          src={withBase(project.image)}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-[var(--color-text)]">
            {project.title}
          </h3>
          {project.link && (
            <ExternalLink
              size={15}
              className="mt-0.5 shrink-0 text-[var(--color-muted-2)] transition-colors duration-200 group-hover:text-[var(--color-accent)]"
            />
          )}
        </div>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
        {project.organization && (
          <p className="text-xs text-[var(--color-muted-2)]">
            {project.organization}
          </p>
        )}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
