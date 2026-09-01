import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
  ratio?: string;
};

/** Image that shows a shimmering skeleton until the bitmap has decoded. */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  imgClassName,
  ratio,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // React can miss load events fired between SSR paint and hydration,
  // so attach a native listener and re-check completeness on mount.
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
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`dws-img${loaded ? " is-loaded" : ""}${imgClassName ? ` ${imgClassName}` : ""}`}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </span>
  );
}
