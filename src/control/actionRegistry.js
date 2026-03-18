import { ACTION_KEYS } from "./actions";
import { SURFACE_KEYS, HOME_VIEW_KEYS } from "./viewState";

const actionRegistry = [
  {
    id: "open-home",
    actionKey: ACTION_KEYS.OPEN_HOME_VIEW,
    label: "Open Home",
    description: "Return the website surface to the default home view and optionally reset mobile navigation state.",
    category: "navigation",
    surface: SURFACE_KEYS.WEBSITE,
    inputShape: {
      setCurrentView: "state-setter",
      setIsMobileMenuOpen: "optional-state-setter",
      scrollToTop: "optional-boolean"
    },
    clientOnly: true,
    internal: false
  },
  {
    id: "open-account-entry",
    actionKey: ACTION_KEYS.OPEN_ACCOUNT_ENTRY,
    label: "Open Account Entry",
    description: "Open the login or member entry view based on the current user state.",
    category: "navigation",
    surface: SURFACE_KEYS.WEBSITE,
    inputShape: {
      currentUser: "nullable-user",
      setCurrentView: "state-setter",
      setIsMobileMenuOpen: "optional-state-setter"
    },
    inputNotes: `Resolves to ${HOME_VIEW_KEYS.LOGIN} or ${HOME_VIEW_KEYS.MEMBER}.`,
    clientOnly: true,
    internal: false
  },
  {
    id: "open-admin",
    actionKey: ACTION_KEYS.OPEN_ADMIN,
    label: "Open Admin",
    description: "Trigger the gated admin entry flow and scroll the internal admin surface into view.",
    category: "surface-access",
    surface: SURFACE_KEYS.ADMIN,
    accessMode: "gated-hash-or-query-intent",
    inputShape: {
      setCurrentView: "state-setter",
      setIsMobileMenuOpen: "optional-state-setter"
    },
    clientOnly: true,
    internal: true
  },
  {
    id: "open-cart",
    actionKey: ACTION_KEYS.OPEN_CART,
    label: "Open Cart",
    description: "Open the current website cart panel.",
    category: "panel-state",
    surface: SURFACE_KEYS.WEBSITE,
    inputShape: {
      setIsCartOpen: "state-setter"
    },
    clientOnly: true,
    internal: false
  },
  {
    id: "close-cart",
    actionKey: ACTION_KEYS.CLOSE_CART,
    label: "Close Cart",
    description: "Close the current website cart panel.",
    category: "panel-state",
    surface: SURFACE_KEYS.WEBSITE,
    inputShape: {
      setIsCartOpen: "state-setter"
    },
    clientOnly: true,
    internal: false
  },
  {
    id: "toggle-mobile-menu",
    actionKey: ACTION_KEYS.TOGGLE_MOBILE_MENU,
    label: "Toggle Mobile Menu",
    description: "Toggle the website mobile navigation menu open or closed.",
    category: "panel-state",
    surface: SURFACE_KEYS.WEBSITE,
    inputShape: {
      setIsMobileMenuOpen: "state-setter"
    },
    clientOnly: true,
    internal: false
  }
];

export function getActionRegistry() {
  return actionRegistry;
}

export function getActionCapability(actionId) {
  return actionRegistry.find((action) => action.id === actionId) ?? null;
}

export default actionRegistry;
