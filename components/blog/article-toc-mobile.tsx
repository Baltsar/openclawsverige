"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string; level: 2 | 3 };

export function ArticleTocMobile() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const article = document.querySelector("[data-blog-article]");
    if (!article) return;
    const headings = article.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]");
    const list: TocItem[] = [];
    headings.forEach((el) => {
      const id = el.id;
      const text = el.textContent?.replace(/#$/, "").trim() ?? "";
      if (id && text) list.push({ id, text, level: el.tagName === "H2" ? 2 : 3 });
    });
    setItems(list);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="mb-6 rounded-lg border border-border/60 bg-muted/20 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
        aria-expanded={open}
      >
        Innehåll
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="border-t border-border/60 px-4 py-3 space-y-1">
          {items.map(({ id, text, level }) => (
            <li key={id} className={level === 3 ? "pl-3" : undefined}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm text-muted-foreground hover:text-[var(--gold)]"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
