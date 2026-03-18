import React, { useState } from "react";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeHero from "../components/home/HomeHero";
import HomeSubscriptions from "../components/home/HomeSubscriptions";
import SiteHeader from "../components/layout/SiteHeader";
import siteContent from "../data/siteContent";

export default function Home() {
  const [cartItems] = useState([]);
  const [currentUser] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingPlan, setPendingPlan] = useState(null);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const scrollToSection = (sectionId) => {
    setCurrentView("home");
    setIsMobileMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleLogoClick = () => {
    setCurrentView("home");
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUserClick = () => {
    setIsMobileMenuOpen(false);
    setCurrentView(currentUser ? "member" : "login");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribeClick = (plan) => {
    setPendingPlan(plan);
    setCurrentView(currentUser ? "member" : "login");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <main>
        {currentView === "login" ? (
          <section className="home-panel">
            <h2>Login</h2>
            <p>
              {pendingPlan
                ? `Selected plan: ${pendingPlan.name}`
                : "Member login will connect to the full account flow in a later batch."}
            </p>
            <button type="button" className="home-panel__button" onClick={() => setCurrentView("home")}>
              Back to Home
            </button>
          </section>
        ) : null}

        {currentView === "member" ? (
          <section className="home-panel">
            <h2>Member</h2>
            <p>
              {pendingPlan
                ? `Selected plan: ${pendingPlan.name}`
                : "Member dashboard remains out of scope for this header extraction batch."}
            </p>
            <button type="button" className="home-panel__button" onClick={() => setCurrentView("home")}>
              Back to Home
            </button>
          </section>
        ) : null}

        {isCartOpen ? (
          <section className="home-panel">
            <h2>Cart</h2>
            <p>Your cart is currently empty.</p>
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

        <section id="shop">
          <h2>{siteContent.navItems[2].label}</h2>
          <p>Shop content stays untouched in this batch; the header now links here correctly.</p>
        </section>
      </main>
    </>
  );
}
