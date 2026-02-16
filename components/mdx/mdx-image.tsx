import Image from "next/image";
import { cn } from "@/lib/utils";

type MdxImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function MdxImage({
  src,
  alt,
  caption,
  className,
  width = 800,
  height = 450,
  priority = false,
}: MdxImageProps) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-lg border border-border/60">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("object-cover", className)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
