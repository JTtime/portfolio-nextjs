import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import type { Experience } from "@/data/portfolio";

const typeLabels: Record<Experience["type"], string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
  freelance: "Freelance",
};

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="group card-base flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        {exp.companyLogo ? (
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface border border-border shrink-0">
            <Image
              src={`/assets/${exp.companyLogo}`}
              alt={exp.company}
              fill
              className="object-contain p-1.5"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-lg bg-surface border border-border shrink-0 flex items-center justify-center">
            <span className="text-accent font-mono font-bold text-sm">
              {exp.company[0]}
            </span>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-base text-foreground leading-tight">
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                {exp.companyUrl ? (
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline font-medium flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink size={11} />
                  </Link>
                ) : (
                  <span className="text-sm text-accent font-medium">
                    {exp.company}
                  </span>
                )}
                <span className="text-muted-foreground text-xs">·</span>
                <span className="text-xs text-muted-foreground font-mono">
                  {typeLabels[exp.type]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
        <span className="timeline-badge">
          {exp.startDate} → {exp.endDate}
        </span>
        {exp.location && (
          <span className="flex items-center gap-1">
            <MapPin size={10} />
            {exp.location}
          </span>
        )}
        {exp.remote && (
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Remote
          </span>
        )}
      </div>

      {/* Bullets */}
      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <span className="text-accent mt-1.5 shrink-0 font-mono text-xs">▸</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
        {exp.techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
