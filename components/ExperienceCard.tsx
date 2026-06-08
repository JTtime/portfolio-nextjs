"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink, ChevronDown } from "lucide-react";
import type { Experience } from "@/data/portfolio";

const typeLabels: Record<Experience["type"], string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
  freelance: "Freelance",
};

// How many bullet points to show collapsed
const COLLAPSED_BULLETS = 1;

export default function ExperienceCard({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.description.length > COLLAPSED_BULLETS;
  const visibleBullets = expanded ? exp.description : exp.description.slice(0, COLLAPSED_BULLETS);

  return (
    <div className="card-base flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-start gap-3">
        {/* Logo */}
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
          // Clearbit logo fallback — fetches logo by domain if companyUrl is set
          exp.companyUrl ? (
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-surface border border-border shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://logo.clearbit.com/${new URL(exp.companyUrl).hostname}`}
                alt={exp.company}
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // If Clearbit fails, swap in the initials fallback
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:14px;font-weight:700;color:var(--accent)">${exp.company[0]}</span>`;
                  }
                }}
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-surface border border-border shrink-0 flex items-center justify-center">
              <span className="font-mono font-bold text-sm text-accent">
                {exp.company[0]}
              </span>
            </div>
          )
        )}

        {/* Role + company */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-foreground leading-tight">
            {exp.role}
          </h3>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
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
              <span className="text-sm text-accent font-medium">{exp.company}</span>
            )}
            <span className="text-muted-foreground text-xs">·</span>
            <span className="text-xs text-muted-foreground font-mono">
              {typeLabels[exp.type]}
            </span>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 flex-wrap text-xs font-mono text-muted-foreground">
        <span className="timeline-badge">{exp.startDate} → {exp.endDate}</span>
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

      {/* Bullets — collapsible */}
      <ul className="space-y-2">
        {visibleBullets.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <span className="text-accent mt-1.5 shrink-0 font-mono text-xs">▸</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Expand / collapse */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-accent transition-colors w-fit -mt-1"
        >
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded
            ? "Show less"
            : `${exp.description.length - COLLAPSED_BULLETS} more bullet${exp.description.length - COLLAPSED_BULLETS > 1 ? "s" : ""}`}
        </button>
      )}

      {/* Tech stack — only visible when expanded or if ≤3 items */}
      {(expanded || exp.techStack.length <= 3) && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
          {exp.techStack.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      {!expanded && exp.techStack.length > 3 && (
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
          {exp.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          <span className="tech-tag opacity-50">+{exp.techStack.length - 3} more</span>
        </div>
      )}
    </div>
  );
}