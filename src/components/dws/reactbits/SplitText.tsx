import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/** React Bits style split-word reveal: each word rises out of a mask. */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as = "h1",
}: SplitTextProps) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span className="dws-split-word" key={`${word}-${i}`}>
          <motion.span
            className="dws-split-inner"
            variants={{
              hidden: { y: "110%", opacity: 0, rotate: 4 },
              show: { y: "0%", opacity: 1, rotate: 0, transition: { duration: 0.8, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
