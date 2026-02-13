import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/500x500-opensverige_transp.png"
                alt="opensverige"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                © {new Date().getFullYear()} opensverige
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Öppet för alla. Ägt av ingen. Byggt av oss.
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="https://discord.gg/ZE8CtUkaWD"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Discord
            </a>
            <a
              href="https://www.facebook.com/groups/2097332881024571"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
