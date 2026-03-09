import Link from "next/link";

export default function ShowcaseHero() {
  return (
    <section className="showcase-hero">
      <Link href="/" className="showcase-back">
        Back to home
      </Link>
      <h1 className="showcase-hero__title">
        THE <span className="font-curvy">WORK</span>
      </h1>
      <p className="showcase-hero__sub">
        Portraits, editorial, fashion, and atmosphere &mdash; a curated
        selection of our recent work.
      </p>
      <div className="filter-pills">
        <span className="filter-pill is-active">All</span>
        <span className="filter-pill">Portraits</span>
        <span className="filter-pill">Editorial</span>
        <span className="filter-pill">Fashion</span>
        <span className="filter-pill">Atmosphere</span>
      </div>
    </section>
  );
}
