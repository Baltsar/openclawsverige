import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";
import { Calendar, User, Clock } from "lucide-react";

type BlogCardProps = {
  post: BlogPost;
  className?: string;
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post, className }: BlogCardProps) {
  const readingTime = post.readingTimeMinutes ?? 1;

  return (
    <Link
      href={`/blogg/${post.slug}`}
      className="block transition-all duration-200 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--crayfish-red)]/50 focus:ring-offset-2 focus:ring-offset-[var(--bg-deep)] rounded-xl"
    >
      <Card
        className={cn(
          "h-full overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-200",
          "hover:scale-[1.02] hover:border-[var(--gold)]/40 hover:shadow-[0_0_24px_-4px_rgba(201,165,90,0.12)]",
          className
        )}
      >
        {post.image && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-[var(--border)]">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        )}
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <time className="flex items-center gap-1.5" dateTime={post.date}>
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              {formatDate(post.date)}
            </time>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {readingTime} min läsning
            </span>
          </div>
          <h2 className="text-xl font-semibold leading-tight tracking-tight">
            {post.title}
          </h2>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5" aria-hidden />
            {post.author}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground leading-relaxed">{post.summary}</p>
          {post.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--gold)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
