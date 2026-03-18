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
        controlType: "shared-text",
        fields: [
          {
            id: "brand-name",
            label: "Brand Name",
            path: "brandName"
          }
        ]
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
        controlType: "collection",
        fields: [
          {
            id: "nav-items",
            label: "Navigation Items",
            path: "navItems"
          }
        ]
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
        controlType: "section-fields",
        fields: [
          { id: "hero-badge", label: "Badge Text", path: "hero.badgeText" },
          { id: "hero-title", label: "Hero Title", path: "hero.title" },
          { id: "hero-subtitle", label: "Hero Subtitle", path: "hero.subtitle" },
          { id: "hero-image", label: "Hero Image", path: "hero.image" },
          { id: "hero-primary-cta", label: "Primary CTA", path: "hero.primaryButtonText" },
          { id: "hero-secondary-cta", label: "Secondary CTA", path: "hero.secondaryButtonText" }
        ]
      },
      {
        id: "features",
        label: "Features",
        description: "Technology/value proposition section content.",
        controlType: "section-fields",
        fields: [
          { id: "features-title", label: "Features Title", path: "features.title" },
          { id: "features-subtitle", label: "Features Subtitle", path: "features.subtitle" },
          { id: "features-items", label: "Feature Items", path: "features.items" }
        ]
      },
      {
        id: "subscriptions-section",
        label: "Subscription Section",
        description: "Section-level copy and metadata for subscription plans.",
        controlType: "section-fields",
        fields: [
          { id: "subs-key", label: "Section Key", path: "subscriptionsSection.sectionKey" },
          { id: "subs-id", label: "Section ID", path: "subscriptionsSection.sectionId" },
          { id: "subs-eyebrow", label: "Eyebrow", path: "subscriptionsSection.eyebrow" },
          { id: "subs-title", label: "Title", path: "subscriptionsSection.title" },
          { id: "subs-subtitle", label: "Subtitle", path: "subscriptionsSection.subtitle" },
          { id: "subs-price-suffix", label: "Price Suffix", path: "subscriptionsSection.priceSuffix" }
        ]
      },
      {
        id: "shop-section",
        label: "Shop Section",
        description: "Section-level catalog copy and stock-label metadata.",
        controlType: "section-fields",
        fields: [
          { id: "shop-key", label: "Section Key", path: "shopSection.sectionKey" },
          { id: "shop-id", label: "Section ID", path: "shopSection.sectionId" },
          { id: "shop-title", label: "Title", path: "shopSection.title" },
          { id: "shop-subtitle", label: "Subtitle", path: "shopSection.subtitle" },
          { id: "shop-stock-badge", label: "Out of Stock Badge", path: "shopSection.outOfStockBadge" },
          { id: "shop-add-to-cart", label: "Add to Cart Label", path: "shopSection.addToCartLabel" }
        ]
      },
      {
        id: "lab",
        label: "Lab",
        description: "Plant factory explanation, image, and stat highlights.",
        controlType: "section-fields",
        fields: [
          { id: "lab-key", label: "Section Key", path: "lab.sectionKey" },
          { id: "lab-id", label: "Section ID", path: "lab.sectionId" },
          { id: "lab-title", label: "Lab Title", path: "lab.title" },
          { id: "lab-paragraphs", label: "Lab Paragraphs", path: "lab.paragraphs" },
          { id: "lab-image", label: "Lab Image", path: "lab.image" },
          { id: "lab-stats", label: "Lab Stats", path: "lab.stats" }
        ]
      },
      {
        id: "footer",
        label: "Footer",
        description: "Footer metadata, links, and admin entry label.",
        controlType: "section-fields",
        fields: [
          { id: "footer-key", label: "Section Key", path: "footer.sectionKey" },
          { id: "footer-copy", label: "Copyright", path: "footer.copyright" },
          { id: "footer-links", label: "Footer Links", path: "footer.links" },
          { id: "footer-admin", label: "Admin Control", path: "footer.adminControl" }
        ]
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
        controlType: "collection",
        fields: [
          { id: "plans", label: "Plans", path: "subscriptions" }
        ]
      },
      {
        id: "products",
        label: "Products",
        description: "Shop catalog items with pricing, stock, and imagery.",
        controlType: "collection",
        fields: [
          { id: "products", label: "Products", path: "products" }
        ]
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
        controlType: "mirror",
        fields: [
          { id: "legacy-hero-title", label: "Legacy Hero Title", path: "heroTitle" },
          { id: "legacy-hero-subtitle", label: "Legacy Hero Subtitle", path: "heroSubtitle" }
        ]
      }
    ]
  }
];

export default adminSections;
