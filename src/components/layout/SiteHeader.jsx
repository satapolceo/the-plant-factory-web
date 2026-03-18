import React from "react";

function CartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-header__icon">
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

function UserIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-header__icon">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="site-header__icon">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function SiteHeader({
  brandName,
  navItems,
  cartCount,
  userLabel,
  isMobileMenuOpen,
  onLogoClick,
  onNavItemClick,
  onCartClick,
  onUserClick,
  onMobileMenuToggle
}) {
  const brandParts = brandName.endsWith(" Factory")
    ? [brandName.slice(0, -" Factory".length), "Factory"]
    : [brandName, ""];

  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Main navigation">
        <button type="button" className="site-header__brand" onClick={onLogoClick}>
          <span className="site-header__brand-mark" aria-hidden="true">
            leaf
          </span>
          <span className="site-header__brand-text">
            {brandParts[0]}
            {brandParts[1] ? (
              <>
                {" "}
                <span className="site-header__brand-accent">{brandParts[1]}</span>
              </>
            ) : null}
          </span>
        </button>

        <div className="site-header__desktop-actions">
          <div className="site-header__nav-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`site-header__nav-link${
                  item.id === "subscription" ? " site-header__nav-link--active" : ""
                }`}
                onClick={() => onNavItemClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="site-header__icon-button"
            onClick={onCartClick}
            aria-label={`Open cart (${cartCount} items)`}
          >
            <CartIcon />
            {cartCount > 0 ? <span className="site-header__cart-count">{cartCount}</span> : null}
          </button>

          <button type="button" className="site-header__user-button" onClick={onUserClick}>
            <UserIcon />
            <span>{userLabel}</span>
          </button>
        </div>

        <button
          type="button"
          className="site-header__mobile-toggle"
          onClick={onMobileMenuToggle}
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-header-mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <MenuIcon />
        </button>
      </nav>

      {isMobileMenuOpen ? (
        <div id="site-header-mobile-menu" className="site-header__mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`site-header__mobile-link${
                item.id === "subscription" ? " site-header__mobile-link--active" : ""
              }`}
              onClick={() => onNavItemClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className="site-header__mobile-user" onClick={onUserClick}>
            <UserIcon />
            <span>{userLabel}</span>
          </button>
        </div>
      ) : null}
    </header>
  );
}
