import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
};

/** Image that serves modern WebP with fallback and shows a skeleton until decoded */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  ratio,
  priority = false,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.complete && el.naturalWidth > 0) {
      setLoaded(true);
      return;
    }
    const done = () => setLoaded(true);
    el.addEventListener("load", done);
    el.addEventListener("error", done);
    return () => {
      el.removeEventListener("load", done);
      el.removeEventListener("error", done);
    };
  }, [src]);

  return (
    <span
      className={`dws-img-wrap${className ? ` ${className}` : ""}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {!loaded && <span className="dws-skeleton dws-img-skeleton" aria-hidden="true" />}
      <picture>
        {webpSrc !== src && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className={`dws-img${loaded ? " is-loaded" : ""}${imgClassName ? ` ${imgClassName}` : ""}`}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </picture>
    </span>
  );
}
