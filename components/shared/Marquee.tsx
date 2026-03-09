interface MarqueeProps {
  items?: string[];
  speed?: "slow" | "normal" | "fast";
  variant?: "dark" | "light";
  accent?: number[];
}

export default function Marquee({
  items = [
    "PERRY JIGGY",
    "Photography",
    "EDITORIAL",
    "Fashion",
    "PORTRAITS",
    "Atmosphere",
    "NEW YORK",
    "London",
    "TOKYO",
  ],
  speed = "normal",
  variant = "dark",
  accent = [1, 3, 5, 7],
}: MarqueeProps) {
  // Build a single run of items with mixed fonts
  const renderItems = (key: string) =>
    items.map((item, i) => (
      <span key={`${key}-${i}`}>
        {accent.includes(i) ? (
          <em className="marquee__accent">{item}</em>
        ) : (
          item
        )}
        <span className="marquee__sep">&nbsp;&bull;&nbsp;</span>
      </span>
    ));

  return (
    <div className={`marquee marquee--${variant}`} aria-hidden="true">
      <div className={`marquee__track marquee__track--${speed}`}>
        <span className="marquee__run">{renderItems("a")}</span>
        <span className="marquee__run">{renderItems("b")}</span>
        <span className="marquee__run">{renderItems("c")}</span>
        <span className="marquee__run">{renderItems("d")}</span>
      </div>
    </div>
  );
}
