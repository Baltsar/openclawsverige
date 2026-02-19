import { SiteNav } from "@/components/landing/site-nav";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      {children}
      <div className="site-footer-bar">
        © {new Date().getFullYear()} opensverige. Öppet för alla. Ägt av ingen. Byggt av oss.
      </div>
    </>
  );
}
