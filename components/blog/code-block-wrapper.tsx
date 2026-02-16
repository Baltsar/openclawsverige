"use client";

import { useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const COPIED_DURATION_MS = 2000;

export function CodeBlockWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pres = container.querySelectorAll<HTMLPreElement>("pre");
    pres.forEach((pre) => {
      if (pre.closest("[data-code-block-enhanced]")) return;
      const code = pre.querySelector("code");
      const langMatch = code?.className?.match(/language-(\w+)/);
      const langLabel = langMatch ? langMatch[1] : "code";

      const wrapper = document.createElement("div");
      wrapper.setAttribute("data-code-block-enhanced", "true");
      wrapper.className =
        "code-block-wrapper group relative my-6 overflow-hidden rounded-xl border border-border/60 bg-[hsl(0_0%_8%)]";

      const header = document.createElement("div");
      header.className =
        "flex items-center justify-between border-b border-border/60 bg-muted/20 px-3 py-2 text-xs";
      header.innerHTML = `
        <span class="font-medium uppercase tracking-wider text-muted-foreground">${escapeHtml(langLabel)}</span>
        <button
          type="button"
          class="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          aria-label="Kopiera kod"
        >
          <span class="copy-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></span>
          <span class="check-icon hidden"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
          <span class="copy-text">Kopiera</span>
        </button>
      `;

      const preWrap = document.createElement("div");
      preWrap.className = "overflow-x-auto py-4";
      preWrap.appendChild(pre.cloneNode(true));

      wrapper.appendChild(header);
      wrapper.appendChild(preWrap);

      const btn = header.querySelector("button");
      const copyIcon = header.querySelector(".copy-icon");
      const checkIcon = header.querySelector(".check-icon");
      const copyText = header.querySelector(".copy-text");

      if (btn && copyIcon && checkIcon && copyText) {
        btn.addEventListener("click", () => {
          const code = pre.querySelector("code");
          const text = code?.innerText ?? "";
          navigator.clipboard.writeText(text).then(() => {
            copyIcon.classList.add("hidden");
            checkIcon.classList.remove("hidden");
            if (copyText.textContent) copyText.textContent = "Kopierat!";
            setTimeout(() => {
              copyIcon.classList.remove("hidden");
              checkIcon.classList.add("hidden");
              if (copyText.textContent) copyText.textContent = "Kopiera";
            }, COPIED_DURATION_MS);
          });
        });
      }

      pre.parentElement?.insertBefore(wrapper, pre);
      pre.remove();
    });
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
}

function escapeHtml(s: string): string {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}
