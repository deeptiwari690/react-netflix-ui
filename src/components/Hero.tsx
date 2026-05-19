import { CtaBar } from "./CtaBar";
import { Header } from "./Header";
import "./Hero.css";

export function Hero() {
  return (
    <div className="c-hero">
      <div className="c-hero__lighting">
        <div className="c-hero__spotlight" />
        <div className="c-hero__edge-light" />
      </div>
      <Header />
      <div className="c-hero__outer">
        <div className="c-hero__backdrop">
          <img src="./images/img-hero.jpg" className="c-hero__image" alt="" />
          <div className="c-hero__overlay" />
        </div>
        <div className="c-hero__inner">
          <div className="c-hero__core">
            <section className="c-hero__content" aria-labelledby="hero-title">
              <hgroup>
                <h1 className="c-hero__title" id="hero-title">
                  Unlimited movies, shows, and more
                </h1>
                <p className="c-hero__description" role="doc-subtitle">
                  Starts at ₹149. Cancel at any time.
                </p>
              </hgroup>
              <CtaBar id="hero-cta" centered />
            </section>
          </div>
          <div className="c-hero__arch">
            <div className="c-hero__arch-shape" />
          </div>
        </div>
      </div>
    </div>
  );
}
