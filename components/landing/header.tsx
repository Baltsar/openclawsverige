"use client";

import Link from "next/link";

const DISCORD_URL = "https://discord.gg/CSphbTk8En";

export function Header() {
  return (
    <>
      <section className="section" style={{ marginBottom: 0 }}>
        <div className="grid-2" style={{ marginTop: 0, alignItems: "center" }}>
          <header className="brand-header" style={{ marginBottom: 0, textAlign: "left" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h1>open<em>sverige</em></h1>
            </Link>
          </header>
          <div className="button-row" style={{ marginTop: 0, justifyContent: "flex-end" }}>
            <Link href="/blogg" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Blogg</Link>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Discord →
            </a>
          </div>
        </div>
      </section>
      <div className="divider" />
    </>
  );
}
