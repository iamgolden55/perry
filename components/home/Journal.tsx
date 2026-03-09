import Image from "next/image";

export default function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="section__container">
        <div className="section__header-row">
          <div className="section__header">
            <p className="section__subtitle mb-8">
              Insights, stories, and what&rsquo;s happening behind the lens.
            </p>
            <h2 className="section__title">
              THE STUDIO <span className="font-curvy">JOURNAL</span>
            </h2>
          </div>
          <div className="section__actions hidden-mobile">
            <a href="#all-journal" className="link">
              see all
            </a>
          </div>
        </div>

        <div className="journal__grid">
          <article className="journal-card">
            <a href="#" className="card__link">
              <figure className="card__media">
                <Image
                  src="/images/red-sneakers.jpg"
                  alt="Basketball court with red sneakers"
                  fill
                  sizes="(max-width:767px) 100vw, 50vw"
                  className="card__image"
                  loading="lazy"
                />
              </figure>
              <h3 className="card__title">
                STUDIO LIGHTING SETUPS WE USE (AND WHEN TO BREAK THE RULES)
              </h3>
              <div className="card__meta">
                <span>Apr 25, 2025</span>{" "}
                <span className="meta-dot">&bull;</span>{" "}
                <span className="meta-cat">Lighting &amp; Setup</span>
              </div>
            </a>
          </article>

          <article className="journal-card">
            <a href="#" className="card__link">
              <figure className="card__media">
                <Image
                  src="/images/spotlight.jpg"
                  alt="Spotlight circle — atmospheric portrait"
                  fill
                  sizes="(max-width:767px) 100vw, 50vw"
                  className="card__image"
                  loading="lazy"
                />
              </figure>
              <h3 className="card__title">
                THE ANATOMY OF A PRODUCT SHOOT: FROM PREP TO POST
              </h3>
              <div className="card__meta">
                <span>Apr 25, 2025</span>{" "}
                <span className="meta-dot">&bull;</span>{" "}
                <span className="meta-cat">Behind the Scenes</span>
              </div>
            </a>
          </article>
        </div>

        <div className="section__actions mobile-only mt-32 text-center">
          <a href="#all-journal" className="link">
            see all
          </a>
        </div>
      </div>
    </section>
  );
}
