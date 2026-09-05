import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects, type ProjectCategory } from "../data/projects";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Projects", "Research", "Hackathons"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="fade-in">
      <SectionTitle title="Projects & Research" />

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[#1a1a1a]"
                  : "border-[var(--color-border)] bg-transparent text-[var(--color-muted)] hover:border-[var(--color-accent-dim)] hover:text-[var(--color-text)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-[var(--color-muted)]">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
