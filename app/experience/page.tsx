import portfolioData from "@/data/portfolio";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  const { experience, meta } = portfolioData;

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 md:py-16 space-y-10">
      {/* Header */}
      <div className="fade-up space-y-2">
        <p className="section-heading">Experience</p>
        <h1
          className="text-3xl md:text-4xl font-light text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where I&apos;ve{" "}
          <span className="text-accent italic">worked</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Roles I&apos;ve held, things I&apos;ve shipped, and what I learned along the way.
        </p>
      </div>

      {/* Resume CTA */}
      {meta.resumeUrl && (
        <div className="fade-up fade-up-1 p-4 rounded-xl border border-border bg-surface flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">Full resume</p>
            <p className="text-xs text-muted-foreground font-mono">PDF · Updated 2024</p>
          </div>
          <a
            href={meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-xs font-mono font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Download ↓
          </a>
        </div>
      )}

      {/* Experience list */}
      <div className="fade-up fade-up-2 space-y-4">
        {experience.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-16 font-mono">
            No experience entries yet.
          </p>
        ) : (
          experience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))
        )}
      </div>

      {/* Skills section */}
      <section className="fade-up fade-up-3 space-y-4">
        <div className="flex items-center gap-4">
          <span className="section-heading">Stack</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from(
            new Set(experience.flatMap((e) => e.techStack))
          ).map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
