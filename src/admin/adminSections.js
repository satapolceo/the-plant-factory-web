const adminSections = [
  {
    id: "brand",
    label: "Brand",
    description: "Core shared identity fields used across website, admin, and AI surfaces.",
    dataKeys: ["brandName"]
  },
  {
    id: "home-content",
    label: "Home Content",
    description: "Public website sections extracted into shared content for the Home page.",
    dataKeys: ["hero", "features", "subscriptionsSection", "shopSection", "lab", "footer"]
  },
  {
    id: "catalog",
    label: "Catalog",
    description: "Commerce-oriented collections for subscriptions and products.",
    dataKeys: ["subscriptions", "products"]
  },
  {
    id: "navigation",
    label: "Navigation",
    description: "Stable navigation entries and public section anchors.",
    dataKeys: ["navItems"]
  },
  {
    id: "system",
    label: "System",
    description: "Current shared content snapshot for admin and future control-layer mapping.",
    dataKeys: ["heroTitle", "heroSubtitle"]
  }
];

export default adminSections;
