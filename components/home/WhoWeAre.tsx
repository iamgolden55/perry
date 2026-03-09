import Image from "next/image";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function WhoWeAre() {
  return (
    <section className="who-we-are noise-bg" id="studio">
      <div className="section__container who-we-are__container">
        <div className="who-we-are__images hidden-mobile">
          <ScrollReveal className="img-left">
            <Image
              src="/images/knit-hood.jpg"
              alt="Black and white close-up portrait with knit hood"
              width={320}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal className="img-right" delay=".15s">
            <Image
              src="/images/full-body-fashion.jpg"
              alt="Black and white full-body fashion portrait"
              width={280}
              height={380}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              loading="lazy"
            />
          </ScrollReveal>
        </div>

        <div className="section__header text-center label-center">
          <p className="kicker">&#9632; WHO WE ARE</p>
          <h2 className="who-we-are__title">
            A COLLECTIVE OF EXPERTS
            <br />
            COMMITTED TO
            <br />
            DELIVERING <span className="font-curvy">WORK</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
