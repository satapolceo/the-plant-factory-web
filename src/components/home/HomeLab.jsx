import React from "react";

export default function HomeLab({ lab }) {
  return (
    <section id={lab.sectionId} className="home-lab" aria-labelledby="home-lab-title">
      <div className="home-lab__grid">
        <div className="home-lab__content">
          <h2 id="home-lab-title" className="home-lab__title">
            {lab.title}
          </h2>

          <div className="home-lab__copy">
            {lab.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="home-lab__stats">
            {lab.stats.map((stat) => (
              <div key={stat.id} className="home-lab__stat">
                <p className="home-lab__stat-value">{stat.value}</p>
                <p className="home-lab__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-lab__media">
          <img src={lab.image} alt={lab.imageAlt} className="home-lab__image" />
          <div className="home-lab__shape home-lab__shape--bottom" aria-hidden="true" />
          <div className="home-lab__shape home-lab__shape--top" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
