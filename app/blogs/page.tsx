import portfolioData from "@/data/portfolio";
import BlogCard from "@/components/BlogCard";

export default function BlogsPage() {
  const { blogs } = portfolioData;

  // Group by year
  const byYear = blogs.reduce<Record<number, typeof blogs>>((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-2xl mx-auto px-5 py-10 md:py-16 space-y-10">
      {/* Header */}
      <div className="fade-up space-y-2">
        <p className="section-heading">Blog</p>
        <h1
          className="text-3xl md:text-4xl font-light text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Writing &{" "}
          <span className="text-accent italic">thinking out loud</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Technical deep dives, opinions on developer tooling, and notes from building in public.
        </p>
      </div>

      {/* Posts grouped by year */}
      {years.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-16 font-mono">
          No posts yet. Check back soon.
        </p>
      ) : (
        years.map((year, yi) => (
          <section key={year} className={`fade-up fade-up-${Math.min(yi + 1, 5)} space-y-4`}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-accent font-semibold tracking-widest uppercase">
                {year}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-4">
              {byYear[year].map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
