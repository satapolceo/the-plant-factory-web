import React from "react";

export default function HomeHero({ hero, onPrimaryAction, onSecondaryAction }) {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__media">
        <img src={hero.image} alt={hero.title} className="home-hero__image" />
        <div className="home-hero__overlay" />
      </div>

      <div className="home-hero__content">
        <div className="home-hero__inner">
          <div className="home-hero__badge">
            <span className="home-hero__badge-dot" aria-hidden="true" />
            <span>{hero.badgeText}</span>
          </div>

          <h1 id="home-hero-title" className="home-hero__title">
            {hero.title}
          </h1>
          <p className="home-hero__subtitle">{hero.subtitle}</p>

          <div className="home-hero__actions">
            <button type="button" className="home-hero__primary" onClick={onPrimaryAction}>
              {hero.primaryButtonText}
            </button>
            <button type="button" className="home-hero__secondary" onClick={onSecondaryAction}>
              {hero.secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
