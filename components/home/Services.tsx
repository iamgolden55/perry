import Image from "next/image";

export default function Services() {
  return (
    <section className="services noise-bg" id="services">
      <div className="section__container">
        <div className="section__header-row">
          <div className="section__header">
            <p className="kicker">services</p>
            <h2 className="section__title">
              SELECT <span className="font-curvy">SERVICES</span>
            </h2>
          </div>
          <div className="section__actions hidden-mobile">
            <a href="#quote" className="link">
              start a project
            </a>
          </div>
        </div>

        <div className="services__grid">
          <article className="services__card">
            <div className="card__index">01</div>
            <h3 className="card__title">PHOTOGRAPHY</h3>
            <p className="card__body">
              Editorial, portrait, and campaign photography shaped to create
              images that feel intentional, striking, and culturally relevant.
            </p>
            <div className="card__tags">
              <span className="tag">Editorial</span>
              <span className="tag">Portraits</span>
              <span className="tag">Campaigns</span>
            </div>
          </article>

          <article className="services__card">
            <div className="card__index">02</div>
            <h3 className="card__title">CREATIVE DIRECTION</h3>
            <p className="card__body">
              From concept development to execution, every visual decision is
              shaped to align with the tone, identity, and purpose of the project.
            </p>
            <div className="card__image-preview">
              <Image
                src="/images/staircase.jpg"
                alt="Industrial staircase — creative direction preview"
                width={400}
                height={120}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>
          </article>

          <article className="services__card">
            <div className="card__index">03</div>
            <h3 className="card__title">MUSIC VIDEOS &amp; CAMPAIGNS</h3>
            <p className="card__body">
              Concept-led visual projects for artists and brands, built to turn
              ideas into memorable moving-image and campaign experiences.
            </p>
            <div className="card__tags">
              <span className="tag">Music Videos</span>
              <span className="tag">Commercials</span>
              <span className="tag">Brand Storytelling</span>
            </div>
          </article>
        </div>

        <div className="section__actions mobile-only mt-32 text-center">
          <a href="#quote" className="link">
            start a project
          </a>
        </div>
      </div>
    </section>
  );
}
