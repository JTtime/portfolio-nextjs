import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/portfolio";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const Wrapper = post.url ? Link : "div";
  const wrapperProps = post.url
    ? { href: post.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    // @ts-expect-error dynamic wrapper
    <Wrapper
      {...wrapperProps}
      className="group card-base flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-muted-foreground">
              {formatDate(post.date)}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                <Clock size={10} />
                {post.readingTime}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-base text-foreground leading-snug group-hover:text-accent transition-colors pr-4">
            {post.title}
          </h3>
        </div>
        {post.url && (
          <ArrowUpRight
            size={16}
            className="text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1"
          />
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {post.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {post.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
