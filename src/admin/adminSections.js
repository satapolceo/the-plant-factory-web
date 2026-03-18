const adminSections = [
  {
    id: "brand",
    label: "Brand",
    description: "Core shared identity fields used across website, admin, and AI surfaces.",
    domain: "identity",
    contentPaths: ["brandName"],
    groups: [
      {
        id: "brand-core",
        label: "Core Brand Fields",
        description: "Shared identity values reused across surfaces.",
        contentPaths: ["brandName"]
      }
    ]
  },
  {
    id: "navigation",
    label: "Navigation",
    description: "Stable public navigation entries and section anchors.",
    domain: "website-navigation",
    contentPaths: ["navItems"],
    groups: [
      {
        id: "nav-items",
        label: "Primary Navigation",
        description: "Website nav labels and target ids.",
        contentPaths: ["navItems"]
      }
    ]
  },
  {
    id: "home-content",
    label: "Home Content",
    description: "Public website sections extracted into shared content for the Home page.",
    domain: "website-home",
    contentPaths: ["hero", "features", "subscriptionsSection", "shopSection", "lab", "footer"],
    groups: [
      {
        id: "hero",
        label: "Hero",
        description: "Top-of-page messaging and call-to-action content.",
        contentPaths: ["hero"]
      },
      {
        id: "features",
        label: "Features",
        description: "Technology/value proposition section content.",
        contentPaths: ["features"]
      },
      {
        id: "subscriptions-section",
        label: "Subscription Section",
        description: "Section-level copy and metadata for subscription plans.",
        contentPaths: ["subscriptionsSection"]
      },
      {
        id: "shop-section",
        label: "Shop Section",
        description: "Section-level catalog copy and stock-label metadata.",
        contentPaths: ["shopSection"]
      },
      {
        id: "lab",
        label: "Lab",
        description: "Plant factory explanation, image, and stat highlights.",
        contentPaths: ["lab"]
      },
      {
        id: "footer",
        label: "Footer",
        description: "Footer metadata, links, and admin entry label.",
        contentPaths: ["footer"]
      }
    ]
  },
  {
    id: "catalog",
    label: "Catalog",
    description: "Commerce-oriented collections for subscriptions and products.",
    domain: "commerce",
    contentPaths: ["subscriptions", "products"],
    groups: [
      {
        id: "subscription-plans",
        label: "Subscription Plans",
        description: "Plan-level commercial content with stable ids and benefit lists.",
        contentPaths: ["subscriptions"]
      },
      {
        id: "products",
        label: "Products",
        description: "Shop catalog items with pricing, stock, and imagery.",
        contentPaths: ["products"]
      }
    ]
  },
  {
    id: "system",
    label: "System",
    description: "Compatibility mirrors and machine-facing references for shared content.",
    domain: "system",
    contentPaths: ["heroTitle", "heroSubtitle"],
    groups: [
      {
        id: "legacy-mirrors",
        label: "Legacy Mirrors",
        description: "Compatibility fields retained alongside structured content.",
        contentPaths: ["heroTitle", "heroSubtitle"]
      }
    ]
  }
];

export default adminSections;
