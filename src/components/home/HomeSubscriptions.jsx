import React from "react";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="home-subscriptions__check" aria-hidden="true">
      <path
        d="m9.5 12.5 2 2 4.5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function HomeSubscriptions({ section, plans, onSelectPlan }) {
  return (
    <section id={section.sectionId} className="home-subscriptions" aria-labelledby="home-subscriptions-title">
      <div className="home-subscriptions__intro">
        <div className="home-subscriptions__eyebrow">{section.eyebrow}</div>
        <h2 id="home-subscriptions-title" className="home-subscriptions__title">
          {section.title}
        </h2>
        <p className="home-subscriptions__subtitle">{section.subtitle}</p>
      </div>

      <div className="home-subscriptions__grid">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`home-subscriptions__card${plan.featured ? " home-subscriptions__card--featured" : ""}`}
          >
            {plan.badgeText ? <div className="home-subscriptions__badge">{plan.badgeText}</div> : null}

            <div className="home-subscriptions__image-wrap">
              <img src={plan.image} alt={plan.name} className="home-subscriptions__image" />
            </div>

            <div className="home-subscriptions__content">
              <h3 className="home-subscriptions__plan-name">{plan.name}</h3>
              <p className="home-subscriptions__plan-desc">{plan.desc}</p>

              <div className="home-subscriptions__price-row">
                <span className="home-subscriptions__price">฿{plan.price}</span>
                <span className="home-subscriptions__price-suffix">{section.priceSuffix}</span>
              </div>

              <div className="home-subscriptions__benefits-heading">สิทธิประโยชน์ที่ได้รับ:</div>
              <ul className="home-subscriptions__benefits">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="home-subscriptions__benefit-item">
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="home-subscriptions__cta"
                onClick={() => onSelectPlan(plan)}
              >
                {plan.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
