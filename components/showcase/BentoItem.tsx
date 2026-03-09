import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface BentoItemProps {
  src: string;
  alt: string;
  title: string;
  tag: string;
  className?: string;
  delay?: string;
}

export default function BentoItem({
  src,
  alt,
  title,
  tag,
  className = "",
  delay,
}: BentoItemProps) {
  return (
    <ScrollReveal className={`bento__item ${className}`} delay={delay}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 60vw"
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      <div className="bento__caption">
        <p className="bento__caption-title">{title}</p>
        <p className="bento__caption-tag">{tag}</p>
      </div>
    </ScrollReveal>
  );
}
