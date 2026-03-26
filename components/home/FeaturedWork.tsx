import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    src: "/images/flora-editorial.jpg",
    alt: "Flora editorial — woman with flowers and pearls",
    title: "FLORA EDITORIAL",
    tag: "EDITORIAL",
  },
  {
    src: "/images/bold-blue.jpg",
    alt: "Bold blue series — portrait with cross necklace",
    title: "BOLD BLUE SERIES",
    tag: "PORTRAIT",
    delay: ".1s",
  },
  {
    src: "/images/crimson-profile.jpg",
    alt: "Crimson profile — all-black outfit against red background",
    title: "CRIMSON PROFILE",
    tag: "FASHION",
    delay: ".2s",
  },
  {
    src: "/images/urban-editorial.jpg",
    alt: "Urban editorial — seated fashion portrait",
    title: "URBAN EDITORIAL",
    tag: "FASHION",
    delay: ".3s",
    desktopOnly: true,
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="works">
      <div className="section__container">
        <div className="section__header-row">
          <div className="section__header">
            <p className="kicker">selected work</p>
            <h2 className="section__title">
              FEATURED <span className="font-curvy">WORK</span>
            </h2>
          </div>
          <div className="section__actions hidden-mobile">
            <Link href="/showcase" className="link">
              view all work
            </Link>
          </div>
        </div>

        <div className="featured-work__grid">
          {projects.map((p) => (
            <ScrollReveal
              key={p.title}
              delay={p.delay}
              className={`card project-card${p.desktopOnly ? " desktop-only" : ""}`}
            >
              <Link href="/showcase" className="card__link">
                <figure className="card__media">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width:767px) 100vw, (max-width:1023px) 50vw, 33vw"
                    className="card__image"
                    loading="lazy"
                  />
                </figure>
                <div className="card__meta">
                  <h3 className="card__title">{p.title}</h3>
                  <span className="card__tag">{p.tag}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="section__actions mobile-only">
          <Link href="#quote" className="button button--primary button--full">
            START A PROJECT
          </Link>
        </div>
      </div>
    </section>
  );
}
