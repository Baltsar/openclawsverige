import Link from "next/link";

const DISCORD_URL = "https://discord.gg/CSphbTk8En";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="site-nav-logo">open<span>sverige</span></Link>
        <div className="site-nav-right">
          <Link className="site-nav-link" href="/blogg">Blogg</Link>
          <Link className="site-nav-link" href="/manifest">Manifestet</Link>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "var(--sp-2) var(--sp-5)", fontSize: "13px" }}>Discord →</a>
        </div>
      </nav>
      {children}
      <div className="site-footer-bar">
        © {new Date().getFullYear()} opensverige. Öppet för alla. Ägt av ingen. Byggt av oss.
      </div>
    </>
  );
}
