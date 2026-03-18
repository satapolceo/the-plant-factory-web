import React, { useState } from "react";
import HomeFooter from "../components/home/HomeFooter";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeHero from "../components/home/HomeHero";
import HomeLab from "../components/home/HomeLab";
import HomeShop from "../components/home/HomeShop";
import HomeSubscriptions from "../components/home/HomeSubscriptions";
import SiteHeader from "../components/layout/SiteHeader";
import { getAdminPanelId, requestAdminAccess } from "../control/panelAccess";
import { getDefaultHomeView, isViewActive, resolveAccountEntryView, HOME_VIEW_KEYS } from "../control/viewState";
import siteContent from "../data/siteContent";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser] = useState(null);
  const [currentView, setCurrentView] = useState(getDefaultHomeView);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingPlan, setPendingPlan] = useState(null);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const resetToHomeView = () => {
    setCurrentView(getDefaultHomeView());
  };

  const scrollToSection = (sectionId) => {
    resetToHomeView();
    setIsMobileMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleLogoClick = () => {
    resetToHomeView();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUserClick = () => {
    setIsMobileMenuOpen(false);
    setCurrentView(resolveAccountEntryView(currentUser));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribeClick = (plan) => {
    setPendingPlan(plan);
    setCurrentView(resolveAccountEntryView(currentUser));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);
      const currentQuantity = existingItem?.quantity ?? 0;

      if (currentQuantity >= (product.stock || 0)) {
        return previousItems;
      }

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const handleAdminOpen = () => {
    resetToHomeView();
    setIsMobileMenuOpen(false);
    requestAdminAccess();

    window.setTimeout(() => {
      document.getElementById(getAdminPanelId())?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <SiteHeader
        brandName={siteContent.brandName}
        navItems={siteContent.navItems}
        cartCount={cartCount}
        userLabel={currentUser ? currentUser.name : "Login"}
        isMobileMenuOpen={isMobileMenuOpen}
        onLogoClick={handleLogoClick}
        onNavItemClick={scrollToSection}
        onCartClick={() => setIsCartOpen(true)}
        onUserClick={handleUserClick}
        onMobileMenuToggle={() => setIsMobileMenuOpen((open) => !open)}
      />
      <main className="site-home">
        {isViewActive(currentView, HOME_VIEW_KEYS.LOGIN) ? (
          <section className="home-panel">
            <h2>Login</h2>
            <p>
              {pendingPlan
                ? `Selected plan: ${pendingPlan.name}`
                : "Member login will connect to the full account flow in a later batch."}
            </p>
            <button type="button" className="home-panel__button" onClick={resetToHomeView}>
              Back to Home
            </button>
          </section>
        ) : null}

        {isViewActive(currentView, HOME_VIEW_KEYS.MEMBER) ? (
          <section className="home-panel">
            <h2>Member</h2>
            <p>
              {pendingPlan
                ? `Selected plan: ${pendingPlan.name}`
                : "Member dashboard remains out of scope for this header extraction batch."}
            </p>
            <button type="button" className="home-panel__button" onClick={resetToHomeView}>
              Back to Home
            </button>
          </section>
        ) : null}

        {isCartOpen ? (
          <section className="home-panel">
            <h2>Cart</h2>
            {cartItems.length > 0 ? (
              <>
                <ul className="home-panel__list">
                  {cartItems.map((item) => (
                    <li key={item.id} className="home-panel__list-item">
                      <span>{item.name}</span>
                      <strong>x{item.quantity}</strong>
                    </li>
                  ))}
                </ul>
                <p>Total items: {cartCount}</p>
              </>
            ) : (
              <p>Your cart is currently empty.</p>
            )}
            <button type="button" className="home-panel__button" onClick={() => setIsCartOpen(false)}>
              Close Cart
            </button>
          </section>
        ) : null}

        <HomeHero
          hero={siteContent.hero}
          onPrimaryAction={() => scrollToSection("subscription")}
          onSecondaryAction={() => scrollToSection("about")}
        />

        <HomeFeatures features={siteContent.features} sectionId="about" />

        <HomeSubscriptions
          section={siteContent.subscriptionsSection}
          plans={siteContent.subscriptions}
          onSelectPlan={handleSubscribeClick}
        />

        <HomeShop
          section={siteContent.shopSection}
          products={siteContent.products}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
        />

        <HomeLab lab={siteContent.lab} />

        <HomeFooter footer={siteContent.footer} onAdminOpen={handleAdminOpen} />
      </main>
    </>
  );
}
