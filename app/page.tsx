import Link from "next/link";
import { Code2, X, Link2, Mail, ArrowRight, MapPin, Zap } from "lucide-react";
import portfolioData from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Github: Code2,
  Twitter: X,
  Linkedin: Link2,
  Mail,
  Code2,
  X,
  Link2,
};

export default function HomePage() {
  const { meta, about, social, projects, blogs } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentBlogs = blogs.slice(0, 2);

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 md:py-16 space-y-16">

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="fade-up">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
          {meta.availability}
          <span className="text-border mx-1">·</span>
          <MapPin size={10} className="text-accent" />
          {meta.location}
        </div>

        <h1
          className="text-4xl md:text-5xl font-light leading-tight mb-4 text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hey, I&apos;m{" "}
          <span className="text-accent font-semibold italic">{meta.name}</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
          {meta.tagline}
        </p>

        {/* Social links */}
        <div className="flex flex-wrap gap-2">
          {social.map(({ label, url, icon }) => {
            const Icon = iconMap[icon] || Mail;
            return (
              <Link
                key={label}
                href={url}
                target={url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface hover:border-accent hover:text-accent text-sm text-muted-foreground font-mono transition-all duration-150"
              >
                <Icon size={13} />
                {label}
              </Link>
            );
          })}
          {meta.resumeUrl && (
            <Link
              href={meta.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent bg-accent text-accent-foreground text-sm font-mono font-medium transition-all duration-150 hover:opacity-90"
            >
              <Zap size={13} />
              Resume
            </Link>
          )}
        </div>
      </section>

      {/* ── About ─────────────────────────────────────── */}
      <section className="fade-up fade-up-1 space-y-5">
        <h2 className="section-heading">About</h2>
        <div className="space-y-3">
          {about.bio.map((para, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {about.highlights.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 p-3 rounded-lg bg-surface border border-border"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
              <span className="text-sm text-foreground font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ──────────────────────────── */}
      {featuredProjects.length > 0 && (
        <section className="fade-up fade-up-2 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="section-heading">Featured Projects</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
            >
              All projects <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* ── Recent Blogs ──────────────────────────────── */}
      {recentBlogs.length > 0 && (
        <section className="fade-up fade-up-3 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="section-heading">Recent Writing</h2>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline"
            >
              All posts <ArrowRight size={12} />
            </Link>
          </div>
          <div className="space-y-4">
            {recentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
