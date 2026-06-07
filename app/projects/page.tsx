"use client";

import { useState } from "react";
import portfolioData from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectType } from "@/data/portfolio";

const filters: { label: string; value: ProjectType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Company", value: "company" },
  { label: "Open Source", value: "opensource" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectType | "all">("all");
  const { projects } = portfolioData;

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 md:py-16 space-y-8">
      {/* Header */}
      <div className="fade-up space-y-2">
        <p className="section-heading">Projects</p>
        <h1
          className="text-3xl md:text-4xl font-light text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Things I&apos;ve{" "}
          <span className="text-accent italic">built</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Personal experiments, company work, and open-source contributions — each tagged so you know the context.
        </p>
      </div>

      {/* Filters */}
      <div className="fade-up fade-up-1 flex flex-wrap gap-2">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-150 border ${
              active === value
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-surface border-border text-muted-foreground hover:text-foreground hover:border-accent"
            }`}
          >
            {label}
            <span className="ml-1.5 opacity-60">
              ({value === "all" ? projects.length : projects.filter((p) => p.type === value).length})
            </span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="fade-up fade-up-2 space-y-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-12 font-mono">
            No projects in this category yet.
          </p>
        ) : (
          filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
}
