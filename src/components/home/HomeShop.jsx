import React from "react";

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="home-shop__cart-icon" aria-hidden="true">
      <path
        d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L21 7H7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function HomeShop({ section, products, cartItems, onAddToCart }) {
  return (
    <section id={section.sectionId} className="home-shop" aria-labelledby="home-shop-title">
      <div className="home-shop__intro">
        <h2 id="home-shop-title" className="home-shop__title">
          {section.title}
        </h2>
        <p className="home-shop__subtitle">{section.subtitle}</p>
      </div>

      <div className="home-shop__grid">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantityInCart = cartItem?.quantity ?? 0;
          const availableStock = Math.max(0, (product.stock ?? 0) - quantityInCart);
          const isOutOfStock = availableStock <= 0;

          return (
            <article key={product.id} className={`home-shop__card${isOutOfStock ? " home-shop__card--out" : ""}`}>
              <div className="home-shop__image-wrap">
                <img src={product.image} alt={product.name} className="home-shop__image" />
                {isOutOfStock ? (
                  <div className="home-shop__overlay">
                    <span className="home-shop__overlay-badge">{section.outOfStockBadge}</span>
                  </div>
                ) : null}
              </div>

              <div className="home-shop__content">
                <div className="home-shop__header-row">
                  <h3 className="home-shop__name">{product.name}</h3>
                  <span className="home-shop__price">฿{product.price}</span>
                </div>

                <p className="home-shop__desc">{product.desc}</p>

                <div className="home-shop__meta-row">
                  <span className={`home-shop__stock${isOutOfStock ? " home-shop__stock--out" : ""}`}>
                    {isOutOfStock
                      ? section.outOfStockText
                      : `${section.stockPrefix} ${availableStock} ${section.stockSuffix}`}
                  </span>
                </div>

                <button
                  type="button"
                  className={`home-shop__cta${isOutOfStock ? " home-shop__cta--disabled" : ""}`}
                  disabled={isOutOfStock}
                  onClick={() => onAddToCart(product)}
                >
                  <CartIcon />
                  <span>{isOutOfStock ? section.outOfStockText : section.addToCartLabel}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
