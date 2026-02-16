import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string;
  summary: string;
  author: string;
  tags: string[];
  /** Optional hero image path (e.g. /blog/hero.jpg) */
  image?: string;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  /** Estimated reading time in minutes */
  readingTimeMinutes?: number;
};

/** Rough reading time from word count (Swedish ~200 wpm). */
export function getReadingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export function getPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f));
  const posts: BlogPost[] = files.map((filename) => {
    const slug = getSlugFromFilename(filename);
    const fullPath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    const frontmatter = data as BlogFrontmatter;
    const readingTimeMinutes = getReadingTimeMinutes(content);
    return { ...frontmatter, slug, readingTimeMinutes };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string): { frontmatter: BlogFrontmatter; content: string } | null {
  const possible = [path.join(CONTENT_DIR, `${slug}.mdx`), path.join(CONTENT_DIR, `${slug}.md`)];
  for (const fullPath of possible) {
    if (fs.existsSync(fullPath)) {
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      return { frontmatter: data as BlogFrontmatter, content };
    }
  }
  return null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => getSlugFromFilename(f));
}

export function getPrevNext(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const posts = getPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i < posts.length - 1 ? posts[i + 1]! : null,
    next: i > 0 ? posts[i - 1]! : null,
  };
}
