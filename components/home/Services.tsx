import Image from "next/image";

export default function Services() {
  return (
    <section className="services noise-bg" id="services">
      <div className="section__container">
        <div className="section__header-row">
          <div className="section__header">
            <p className="kicker">services</p>
            <h2 className="section__title">
              <span className="font-curvy">STUFF</span> WE&rsquo;RE GREAT AT
            </h2>
          </div>
          <div className="section__actions hidden-mobile">
            <a href="#all-services" className="link">
              see all services
            </a>
          </div>
        </div>

        <div className="services__grid">
          <article className="services__card">
            <div className="card__index">01</div>
            <h3 className="card__title">PRODUCT PHOTOGRAPHY</h3>
            <p className="card__body">
              Clean, intentional visuals that highlight form, texture, and
              material &mdash; built to elevate your product across eCommerce,
              packaging, and editorial platforms.
            </p>
            <div className="card__tags">
              <span className="tag">Reflective Surfaces</span>
            </div>
          </article>

          <article className="services__card">
            <div className="card__index">02</div>
            <h3 className="card__title">CREATIVE DIRECTION</h3>
            <p className="card__body">
              From concept to execution, we guide the visual identity of your
              shoot to ensure every detail aligns with your brand&rsquo;s tone
              and message.
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
            <h3 className="card__title">STUDIO EDITORIALS</h3>
            <p className="card__body">
              Concept-driven in-studio campaigns with tailored lighting,
              composition, and styling &mdash; made for lookbooks, launches, and
              seasonal brand stories.
            </p>
            <div className="card__tags">
              <span className="tag">Reflective Surfaces</span>
              <span className="tag">Macro Detail</span>
              <span className="tag">Flat Lay Composition</span>
              <span className="tag">Studio Lighting</span>
            </div>
          </article>
        </div>

        <div className="section__actions mobile-only mt-32 text-center">
          <a href="#all-services" className="link">
            see all services
          </a>
        </div>
      </div>
    </section>
  );
}
