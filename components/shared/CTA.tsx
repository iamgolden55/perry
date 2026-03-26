import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta" id="quote">
      <div className="section__container cta__container">
        <h2 className="cta__title">
          &ldquo;LET&rsquo;S BRING THE{" "}
          <span className="font-curvy">VISION</span>
          <br />
          TO LIFE&rdquo;
        </h2>
        <p className="cta__body">
          If you need creative direction, photography, or a full visual concept,
          get in touch to start the conversation.
        </p>
        <div className="cta__actions">
          <Link href="/#quote" className="button button--primary">
            WORK WITH PERRY
          </Link>
          <a href="mailto:hello@perryjiggy.com" className="button button--secondary">
            EMAIL
          </a>
          <a href="tel:+447301078056" className="button button--ghost">
            07301 078056
          </a>
          <a href="https://wa.me/447301078056" className="button button--ghost">
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
