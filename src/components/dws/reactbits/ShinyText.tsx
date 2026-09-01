type ShinyTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

/** React Bits style shimmering text sweep. */
export function ShinyText({ text, className = "", speed = 4 }: ShinyTextProps) {
  return (
    <span className={`dws-shiny ${className}`} style={{ animationDuration: `${speed}s` }}>
      {text}
    </span>
  );
}
