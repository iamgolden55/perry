import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTA from "@/components/shared/CTA";
import styles from "./page.module.css";

const storyMoments = [
  {
    label: "01 / CULTURE",
    title: "The work begins with a point of view.",
    body:
      "My practice sits where culture, fashion, music, and identity meet. I build visuals that feel bold, exacting, and current without losing depth.",
    image: "/images/flora-editorial.jpg",
    alt: "Editorial portrait with pearls and flowers",
  },
  {
    label: "02 / DIRECTION",
    title: "Strong visuals should carry more than surface.",
    body:
      "Whether I am directing a music video, producing a campaign, or shaping an editorial, the image has to communicate something real. Mood, tension, emotion, and memory all matter.",
    image: "/images/urban-editorial.jpg",
    alt: "Urban editorial portrait on a chair",
  },
  {
    label: "03 / EXECUTION",
    title: "Clarity, style, and purpose stay fixed from start to finish.",
    body:
      "I collaborate closely with artists, brands, and creative teams to translate concepts into visual experiences with presence. From the first reference to the final frame, intention leads the process.",
    image: "/images/full-body-fashion.jpg",
    alt: "Full body fashion portrait in black and white",
  },
];

const galleryFrames = [
  {
    src: "/images/spotlight.jpg",
    alt: "Portrait under spotlight with dramatic shadows",
  },
  {
    src: "/images/bold-blue.jpg",
    alt: "Portrait against a bold blue backdrop",
  },
  {
    src: "/images/study-xiii.jpg",
    alt: "Portrait study with sculptural lighting",
  },
];

export const metadata: Metadata = {
  title: "About | Perry Jiggy",
  description:
    "Discover the point of view behind Perry Jiggy's creative direction, photography, and visual storytelling.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContainer}>
          <div className={styles.heroCopy}>
            <p className="kicker">About Perry Jiggy</p>
            <h1 className={styles.heroTitle}>
              Creative direction with a photographic instinct.
            </h1>
            <p className={styles.heroLead}>
              I&apos;m Perry Jiggy, a Creative Director, Photographer, and Visual
              Director working across photography, music videos, and commercial
              projects.
            </p>
            <p className={styles.heroBody}>
              My work is rooted in making images that feel intentional, striking,
              and culturally relevant. The goal is never to decorate. It is to
              create visuals with presence.
            </p>
            <div className={styles.heroActions}>
              <Link href="/showcase" className="button button--primary">
                VIEW WORK
              </Link>
              <Link href="/#quote" className="button button--secondary">
                START A PROJECT
              </Link>
            </div>
          </div>

          <div className={styles.heroVisuals}>
            <ScrollReveal className={styles.heroPrimaryFrame}>
              <div className={styles.visualFrame}>
                <Image
                  src="/images/spotlight.jpg"
                  alt="Portrait lit by a spotlight"
                  fill
                  sizes="(max-width: 1023px) 100vw, 34vw"
                  className={styles.visualImage}
                  priority
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className={styles.heroSecondaryFrame} delay=".12s">
              <div className={styles.visualFrame}>
                <Image
                  src="/images/crimson-profile.jpg"
                  alt="Crimson profile portrait"
                  fill
                  sizes="(max-width: 1023px) 72vw, 18vw"
                  className={styles.visualImage}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={`noise-bg ${styles.statement}`}>
        <div className={styles.statementContainer}>
          <div className={styles.statementHeader}>
            <p className="kicker">Point of View</p>
            <h2 className={styles.statementTitle}>
              I believe visuals should do more than look good.
            </h2>
          </div>
          <div className={styles.statementColumns}>
            <p>
              They should communicate an idea, evoke emotion, and leave a lasting
              impression. That belief shapes how I approach every frame.
            </p>
            <p>
              Working across fashion, music, and brand storytelling, I build
              visual systems that feel precise, immersive, and unmistakably
              intentional.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.storyContainer}>
          {storyMoments.map((moment, index) => (
            <ScrollReveal
              key={moment.label}
              delay={`${index * 0.08}s`}
              className={styles.storyReveal}
            >
              <article
                className={`${styles.storyRow} ${index % 2 === 1 ? styles.storyRowReverse : ""}`}
              >
                <div className={styles.storyImageWrap}>
                  <div className={styles.storyImageFrame}>
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 44vw"
                      className={styles.storyImage}
                    />
                  </div>
                </div>
                <div className={styles.storyCopy}>
                  <p className={styles.storyLabel}>{moment.label}</p>
                  <h3 className={styles.storyTitle}>{moment.title}</h3>
                  <p className={styles.storyBody}>{moment.body}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={`noise-bg ${styles.gallery}`}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeader}>
            <p className="kicker">Selected Frames</p>
            <p className={styles.galleryLead}>
              A restrained selection of images, curated for mood, form, and
              presence.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {galleryFrames.map((frame, index) => (
              <ScrollReveal
                key={frame.src}
                delay={`${index * 0.1}s`}
                className={styles.galleryItem}
              >
                <div className={styles.galleryFrame}>
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 30vw"
                    className={styles.galleryImage}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
