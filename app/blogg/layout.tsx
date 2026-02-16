import { SiteChrome } from "@/components/landing/site-chrome";

export default function BloggLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page">
      <SiteChrome>{children}</SiteChrome>
    </div>
  );
}
