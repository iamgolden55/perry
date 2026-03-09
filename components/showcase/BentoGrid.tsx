import BentoItem from "./BentoItem";

export default function BentoGrid() {
  return (
    <div className="bento">
      {/* Row 1: 60/40 split */}
      <div className="bento__row bento__row--split">
        <BentoItem
          src="/images/knit-hood.jpg"
          alt="Black and white close-up portrait with knit hood"
          title="Knit Hood"
          tag="Portrait"
          className="bento__item--portrait"
        />
        <BentoItem
          src="/images/bold-blue.jpg"
          alt="Portrait on blue background with cross necklace"
          title="Bold Blue"
          tag="Portrait"
          className="bento__item--portrait"
          delay=".1s"
        />
      </div>

      {/* Row 2: Full-bleed cinematic */}
      <div className="bento__row bento__row--full">
        <BentoItem
          src="/images/full-body-fashion.jpg"
          alt="Black and white full-body fashion portrait"
          title="Full Body"
          tag="Fashion"
          className="bento__item--cinematic"
        />
      </div>

      {/* Row 3: Trio — middle tall */}
      <div className="bento__row bento__row--trio">
        <BentoItem
          src="/images/portrait-study.jpg"
          alt="Portrait study"
          title="Study III"
          tag="Portrait"
          className="bento__item--square"
        />
        <BentoItem
          src="/images/flora-editorial.jpg"
          alt="Flora editorial — woman with flowers and pearls"
          title="Flora Editorial"
          tag="Editorial"
          className="bento__item--tall"
          delay=".1s"
        />
        <BentoItem
          src="/images/atmosphere-vi.jpg"
          alt="Atmospheric portrait"
          title="Atmosphere VI"
          tag="Atmosphere"
          className="bento__item--square"
          delay=".2s"
        />
      </div>

      {/* Row 4: Full-bleed cinematic */}
      <div className="bento__row bento__row--full">
        <BentoItem
          src="/images/hero-jumping.jpg"
          alt="Black and white portrait — man jumping mid-air"
          title="Mid-Air"
          tag="Atmosphere"
          className="bento__item--cinematic"
        />
      </div>

      {/* Row 5: Wide image + duo below */}
      <div className="bento__row bento__row--wide-duo">
        <BentoItem
          src="/images/red-sneakers.jpg"
          alt="Basketball court with red sneakers"
          title="Red Sneakers"
          tag="Atmosphere"
          className="bento__item--landscape bento__item--wide"
        />
        <BentoItem
          src="/images/staircase.jpg"
          alt="Industrial staircase"
          title="Staircase"
          tag="Atmosphere"
          className="bento__item--landscape"
          delay=".1s"
        />
        <BentoItem
          src="/images/urban-editorial.jpg"
          alt="Seated fashion portrait"
          title="Urban Editorial"
          tag="Fashion"
          className="bento__item--landscape"
          delay=".2s"
        />
      </div>

      {/* Row 6: Asymmetric — tall left, stacked right */}
      <div className="bento__row bento__row--asym-stack">
        <BentoItem
          src="/images/crimson-profile.jpg"
          alt="All-black outfit against red background"
          title="Crimson Profile"
          tag="Fashion"
          className="bento__item--tall"
        />
        <BentoItem
          src="/images/spotlight.jpg"
          alt="Spotlight circle — atmospheric portrait"
          title="Spotlight"
          tag="Atmosphere"
          className="bento__item--square"
          delay=".1s"
        />
        <BentoItem
          src="/images/study-xiii.jpg"
          alt="Portrait study XIII"
          title="Study XIII"
          tag="Portrait"
          className="bento__item--square"
          delay=".2s"
        />
      </div>
    </div>
  );
}
