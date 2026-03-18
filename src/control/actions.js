export const ACTION_KEYS = {
  OPEN_HOME_VIEW: "openHomeView",
  OPEN_ACCOUNT_ENTRY: "openAccountEntryAction",
  OPEN_ADMIN: "openAdminAction",
  OPEN_CART: "openCartAction",
  CLOSE_CART: "closeCartAction",
  TOGGLE_MOBILE_MENU: "toggleMobileMenuAction"
};

import { getAdminPanelId, requestAdminAccess } from "./panelAccess";
import { getDefaultHomeView, resolveAccountEntryView } from "./viewState";

export function openHomeView({ setCurrentView, setIsMobileMenuOpen, scrollToTop = false }) {
  setCurrentView(getDefaultHomeView());

  if (setIsMobileMenuOpen) {
    setIsMobileMenuOpen(false);
  }

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export function openAccountEntryAction({ currentUser, setCurrentView, setIsMobileMenuOpen }) {
  if (setIsMobileMenuOpen) {
    setIsMobileMenuOpen(false);
  }

  setCurrentView(resolveAccountEntryView(currentUser));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function openAdminAction({ setCurrentView, setIsMobileMenuOpen }) {
  setCurrentView(getDefaultHomeView());

  if (setIsMobileMenuOpen) {
    setIsMobileMenuOpen(false);
  }

  requestAdminAccess();

  window.setTimeout(() => {
    document.getElementById(getAdminPanelId())?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

export function openCartAction({ setIsCartOpen }) {
  setIsCartOpen(true);
}

export function closeCartAction({ setIsCartOpen }) {
  setIsCartOpen(false);
}

export function toggleMobileMenuAction({ setIsMobileMenuOpen }) {
  setIsMobileMenuOpen((open) => !open);
}
