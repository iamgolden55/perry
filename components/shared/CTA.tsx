import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta" id="quote">
      <div className="section__container cta__container">
        <h2 className="cta__title">
          &ldquo;LET&rsquo;S BRING YOUR{" "}
          <span className="font-curvy">VISION</span>
          <br />
          TO LIFE&rdquo;
        </h2>
        <p className="cta__body">
          Every brand has a story &mdash; we&rsquo;re here to frame yours.
          Reach out and let&rsquo;s shape something meaningful, together.
        </p>
        <div className="cta__actions">
          <Link href="/#quote" className="button button--primary">
            WORK WITH US
          </Link>
          <a href="mailto:hello@perryjiggy.com" className="button button--secondary">
            EMAIL
          </a>
          <a href="tel:+7510103777466" className="button button--ghost">
            +7510103777466
          </a>
          <a href="https://wa.me/7510103777466" className="button button--ghost">
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
