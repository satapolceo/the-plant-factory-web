import { HOME_VIEW_KEYS, SURFACE_KEYS } from "./viewState";

const intentRegistry = [
  {
    id: "navigate-home",
    label: "Navigate Home",
    description: "Route the user back to the primary website home experience.",
    routesToSurface: SURFACE_KEYS.WEBSITE,
    relatedActions: ["open-home"],
    relatedDomains: [
      `homeView:${HOME_VIEW_KEYS.HOME}`,
      "siteContent.hero",
      "siteContent.navItems"
    ],
    access: "public",
    notes: "Primary public navigation intent for resetting the website surface."
  },
  {
    id: "access-account",
    label: "Access Account Entry",
    description: "Route the user into the appropriate account entry view for login or member access.",
    routesToSurface: SURFACE_KEYS.WEBSITE,
    relatedActions: ["open-account-entry"],
    relatedDomains: [
      `homeView:${HOME_VIEW_KEYS.LOGIN}`,
      `homeView:${HOME_VIEW_KEYS.MEMBER}`
    ],
    access: "public",
    notes: "Current account intent resolves through client-side user state only."
  },
  {
    id: "access-admin",
    label: "Access Admin",
    description: "Route an internal admin intent to the gated admin surface.",
    routesToSurface: SURFACE_KEYS.ADMIN,
    relatedActions: ["open-admin"],
    relatedDomains: ["adminEntryIntent", "adminSections", "siteContent"],
    access: "internal-gated",
    notes: "Requires existing hash/query-based admin intent before the Admin surface renders."
  },
  {
    id: "manage-cart",
    label: "Manage Cart",
    description: "Route cart visibility intents to the website cart panel controls.",
    routesToSurface: SURFACE_KEYS.WEBSITE,
    relatedActions: ["open-cart", "close-cart"],
    relatedDomains: ["cartPanel", "siteContent.products", "siteContent.shopSection"],
    access: "public",
    notes: "Covers current panel open/close only, not checkout or order workflows."
  },
  {
    id: "toggle-mobile-navigation",
    label: "Toggle Mobile Navigation",
    description: "Route mobile navigation visibility intents to the website mobile menu.",
    routesToSurface: SURFACE_KEYS.WEBSITE,
    relatedActions: ["toggle-mobile-menu"],
    relatedDomains: ["mobileMenu", "siteContent.navItems"],
    access: "public",
    notes: "Focused on responsive navigation state only."
  },
  {
    id: "inspect-public-content",
    label: "Inspect Public Content",
    description: "Route content-inspection intents to the public website surface and its shared content domains.",
    routesToSurface: SURFACE_KEYS.WEBSITE,
    relatedActions: ["open-home"],
    relatedDomains: [
      "siteContent.hero",
      "siteContent.features",
      "siteContent.subscriptionsSection",
      "siteContent.shopSection",
      "siteContent.lab",
      "siteContent.footer"
    ],
    access: "public",
    notes: "Inspection-oriented intent for future read-only tool/control routing."
  },
  {
    id: "inspect-admin-content",
    label: "Inspect Admin Content",
    description: "Route internal content-mapping inspection intents to the Admin surface.",
    routesToSurface: SURFACE_KEYS.ADMIN,
    relatedActions: ["open-admin"],
    relatedDomains: ["adminSections", "siteContent", "sharedContentMapping"],
    access: "internal-gated",
    notes: "Useful for future internal tooling that needs structured content ownership details."
  },
  {
    id: "inspect-chat-config",
    label: "Inspect Chat Config",
    description: "Route AI configuration and shared-context inspection intents to the AI Chat surface.",
    routesToSurface: SURFACE_KEYS.CHAT,
    relatedActions: [],
    relatedDomains: [
      "siteContent.aiWidget",
      "chatSections",
      "siteContent.hero",
      "siteContent.subscriptions",
      "siteContent.products"
    ],
    access: "internal",
    notes: "Current chat surface is read/reflect oriented and has no extracted direct action helpers yet."
  }
];

export function getIntentRegistry() {
  return intentRegistry;
}

export function getIntentCapability(intentId) {
  return intentRegistry.find((intent) => intent.id === intentId) ?? null;
}

export default intentRegistry;
