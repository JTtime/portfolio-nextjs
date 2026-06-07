import Link from "next/link";
import Image from "next/image";
import { Code2, ExternalLink, Building2, User, GitMerge } from "lucide-react";
import type { Project, ProjectType } from "@/data/portfolio";

const typeConfig: Record<
  ProjectType,
  { label: string; className: string; icon: React.ComponentType<{ size?: number }> }
> = {
  personal: {
    label: "Personal",
    className: "tag-personal",
    icon: User,
  },
  company: {
    label: "Company",
    className: "tag-company",
    icon: Building2,
  },
  opensource: {
    label: "Open Source",
    className: "tag-opensource",
    icon: GitMerge,
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const typeInfo = typeConfig[project.type];
  const TypeIcon = typeInfo.icon;

  return (
    <div className="group card-base flex flex-col gap-4">
      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden bg-surface border border-border">
          <Image
            src={`/assets/${project.thumbnail}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`type-badge ${typeInfo.className}`}>
              <TypeIcon size={10} />
              {typeInfo.label}
            </span>
            {project.featured && (
              <span className="type-badge tag-featured">Featured</span>
            )}
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="font-mono font-semibold text-base text-foreground leading-snug truncate">
            {project.title}
          </h3>
          {project.companyName && (
            <p className="text-xs text-muted-foreground mt-0.5 font-mono">
              @ {project.companyName}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0 pt-1">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="View source"
            >
              <Code2 size={15} />
            </Link>
          )}
          {(project.liveUrl || project.companyUrl) && (
            <Link
              href={(project.liveUrl || project.companyUrl) as string}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="Visit"
            >
              <ExternalLink size={15} />
            </Link>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
