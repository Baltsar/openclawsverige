"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string; level: 2 | 3 };

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const article = document.querySelector("[data-blog-article]");
    if (!article) return;

    const headings = article.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]");
    const list: TocItem[] = [];
    headings.forEach((el) => {
      const id = el.id;
      const text = el.textContent?.replace(/#$/, "").trim() ?? "";
      if (id && text) {
        list.push({
          id,
          text,
          level: el.tagName === "H2" ? 2 : 3,
        });
      }
    });
    setItems(list);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0% -80% 0%", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto lg:block"
      aria-label="Innehåll"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        På denna sida
      </p>
      <ul className="space-y-2 border-l border-border/60 pl-4">
        {items.map(({ id, text, level }) => (
          <li
            key={id}
            className={cn(
              "text-sm",
              level === 3 && "pl-3"
            )}
          >
            <a
              href={`#${id}`}
              className={cn(
                "block py-0.5 transition-colors hover:text-[var(--gold)]",
                activeId === id
                  ? "border-l-2 border-[var(--gold)] -ml-[17px] pl-4 text-[var(--gold)]"
                  : "text-muted-foreground"
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
