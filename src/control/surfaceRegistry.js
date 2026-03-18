import { HOME_VIEW_KEYS, SURFACE_KEYS } from "./viewState";

const surfaceRegistry = [
  {
    id: SURFACE_KEYS.WEBSITE,
    label: "Website",
    description: "Public-facing website surface for browsing brand, product, and subscription content.",
    type: "public-ui",
    visibility: "public",
    reads: [
      "siteContent.brandName",
      "siteContent.navItems",
      "siteContent.hero",
      "siteContent.features",
      "siteContent.subscriptionsSection",
      "siteContent.subscriptions",
      "siteContent.shopSection",
      "siteContent.products",
      "siteContent.lab",
      "siteContent.footer"
    ],
    controls: [
      `homeView:${HOME_VIEW_KEYS.HOME}`,
      `homeView:${HOME_VIEW_KEYS.LOGIN}`,
      `homeView:${HOME_VIEW_KEYS.MEMBER}`,
      "cartPanel",
      "mobileMenu"
    ],
    relatedSections: ["about", "subscription", "shop", "lab", "footer"],
    relatedActions: [
      "open-home",
      "open-account-entry",
      "open-cart",
      "close-cart",
      "toggle-mobile-menu"
    ],
    relatedContentPaths: [
      "brandName",
      "navItems",
      "hero",
      "features",
      "subscriptionsSection",
      "subscriptions",
      "shopSection",
      "products",
      "lab",
      "footer"
    ]
  },
  {
    id: SURFACE_KEYS.ADMIN,
    label: "Admin Panel",
    description: "Internal control surface for inspecting and managing structured website content mappings.",
    type: "internal-ui",
    visibility: "internal-gated",
    accessNotes: "Rendered only when admin intent is present via hash or query access helpers.",
    reads: [
      "siteContent.brandName",
      "siteContent.navItems",
      "siteContent.hero",
      "siteContent.features",
      "siteContent.subscriptionsSection",
      "siteContent.subscriptions",
      "siteContent.shopSection",
      "siteContent.products",
      "siteContent.lab",
      "siteContent.footer",
      "siteContent.heroTitle",
      "siteContent.heroSubtitle",
      "adminSections"
    ],
    controls: [
      "adminEntryIntent",
      "adminSectionInspection",
      "sharedContentMapping"
    ],
    relatedSections: ["brand", "navigation", "home-content", "catalog", "system"],
    relatedActions: ["open-admin"],
    relatedContentPaths: [
      "brandName",
      "navItems",
      "hero",
      "features",
      "subscriptionsSection",
      "subscriptions",
      "shopSection",
      "products",
      "lab",
      "footer",
      "heroTitle",
      "heroSubtitle"
    ]
  },
  {
    id: SURFACE_KEYS.CHAT,
    label: "AI Chat Panel",
    description: "Internal AI-oriented surface for reflecting assistant identity, provider config, and shared website context.",
    type: "internal-ui",
    visibility: "internal-visible",
    reads: [
      "siteContent.brandName",
      "siteContent.aiWidget",
      "siteContent.hero",
      "siteContent.subscriptions",
      "siteContent.products",
      "chatSections"
    ],
    controls: [
      "assistantIdentityReflection",
      "providerConfigReflection",
      "conversationConfigReflection",
      "sharedContextInspection"
    ],
    relatedSections: ["identity", "provider-config", "conversation", "shared-context"],
    relatedActions: [],
    relatedContentPaths: [
      "brandName",
      "aiWidget.title",
      "aiWidget.provider",
      "aiWidget.apiKey",
      "aiWidget.greeting",
      "aiWidget.systemPrompt",
      "hero",
      "subscriptions",
      "products"
    ]
  }
];

export function getSurfaceRegistry() {
  return surfaceRegistry;
}

export function getSurfaceCapability(surfaceId) {
  return surfaceRegistry.find((surface) => surface.id === surfaceId) ?? null;
}

export default surfaceRegistry;
