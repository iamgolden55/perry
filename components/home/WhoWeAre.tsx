import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function WhoWeAre() {
  return (
    <section className="who-we-are" aria-labelledby="about-preview-title">
      <div className="section__container who-we-are__container">
        <ScrollReveal className="who-we-are__media">
          <div className="who-we-are__media-frame">
            <Image
              src="/images/portrait-study.jpg"
              alt="Perry Jiggy portrait study"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 80vw, 42vw"
              className="who-we-are__image"
              priority={false}
            />
          </div>
        </ScrollReveal>

        <div className="who-we-are__content">
          <p className="kicker">About Perry</p>
          <h2 className="who-we-are__title" id="about-preview-title">
            Visual direction with a sharper <span className="font-curvy">point</span>{" "}
            of view.
          </h2>
          <p className="who-we-are__intro">
            Perry Jiggy is a Creative Director, Photographer, and Visual Director
            building bold image worlds across fashion, music, and commercial
            storytelling.
          </p>
          <div className="who-we-are__actions">
            <Link href="/about" className="button button--primary">
              ABOUT PERRY
            </Link>
          </div>
        </div>

        <ScrollReveal className="who-we-are__detail" delay=".12s">
          <div className="who-we-are__detail-card">
            <p className="who-we-are__detail-label">Focus</p>
            <ul className="who-we-are__detail-list">
              <li>Creative Direction</li>
              <li>Photography</li>
              <li>Visual Direction</li>
            </ul>
            <p className="who-we-are__detail-copy">
              A concise introduction on the homepage. The full story now lives on
              the dedicated about page.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
