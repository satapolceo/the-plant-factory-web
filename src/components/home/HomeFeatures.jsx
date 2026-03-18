import React from "react";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="home-features__icon" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.3M12 19.2v2.3M21.5 12h-2.3M4.8 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="home-features__icon" aria-hidden="true">
      <path
        d="M12 3.5 5.5 6v5.7c0 4 2.6 7.6 6.5 8.8 3.9-1.2 6.5-4.8 6.5-8.8V6Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m9.4 12 1.8 1.8 3.7-3.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" className="home-features__icon" aria-hidden="true">
      <path
        d="M18.5 4.5c-6.5 0-11 4.6-11 10.5 0 2.2 1.8 4 4 4 5.9 0 10.5-4.5 10.5-11 0-1.9-1.1-3.5-3.5-3.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 18.5c2.2-3.5 5.2-6.4 8.9-8.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const ICONS = {
  sun: SunIcon,
  shield: ShieldIcon,
  leaf: LeafIcon
};

export default function HomeFeatures({ features, sectionId }) {
  return (
    <section id={sectionId} className="home-features" aria-labelledby="home-features-title">
      <div className="home-features__intro">
        <h2 id="home-features-title" className="home-features__title">
          {features.title}
        </h2>
        <p className="home-features__subtitle">{features.subtitle}</p>
      </div>

      <div className="home-features__grid">
        {features.items.map((item) => {
          const Icon = ICONS[item.icon] ?? LeafIcon;

          return (
            <article key={item.title} className="home-features__card">
              <div className="home-features__icon-wrap">
                <Icon />
              </div>
              <h3 className="home-features__card-title">{item.title}</h3>
              <p className="home-features__card-desc">{item.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
