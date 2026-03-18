const chatSections = [
  {
    id: "identity",
    label: "Identity",
    description: "Shared brand and assistant identity used by the chat surface.",
    domain: "chat-identity",
    contentPaths: ["brandName", "aiWidget.title"],
    groups: [
      {
        id: "assistant-title",
        label: "Assistant Identity",
        description: "Brand and assistant naming used in the chat experience.",
        controlType: "display-mapping",
        contentDomain: "site-brand",
        contentPaths: ["brandName", "aiWidget.title"],
        fields: [
          { id: "brand-name", label: "Brand Name", path: "brandName", preview: "text" },
          { id: "assistant-title", label: "Assistant Title", path: "aiWidget.title", preview: "text" }
        ]
      }
    ]
  },
  {
    id: "provider-config",
    label: "Provider Config",
    description: "Model provider and API credential state for the shared AI widget config.",
    domain: "chat-provider",
    contentPaths: ["aiWidget.provider", "aiWidget.apiKey"],
    groups: [
      {
        id: "provider-selection",
        label: "Provider Selection",
        description: "Current backend/provider selection for AI calls.",
        controlType: "config-preview",
        contentDomain: "ai-widget-config",
        contentPaths: ["aiWidget.provider"],
        fields: [
          { id: "provider", label: "Provider", path: "aiWidget.provider", preview: "badge" }
        ]
      },
      {
        id: "api-credentials",
        label: "API Credentials",
        description: "Credential presence for future control and validation flows.",
        controlType: "sensitive-state",
        contentDomain: "ai-widget-config",
        contentPaths: ["aiWidget.apiKey"],
        fields: [
          { id: "api-key", label: "API Key", path: "aiWidget.apiKey", preview: "sensitive" }
        ]
      }
    ]
  },
  {
    id: "conversation",
    label: "Conversation",
    description: "Greeting and system-instruction fields that shape assistant behavior.",
    domain: "chat-conversation",
    contentPaths: ["aiWidget.greeting", "aiWidget.systemPrompt"],
    groups: [
      {
        id: "greeting",
        label: "Greeting",
        description: "Default first response shown by the assistant.",
        controlType: "message-preview",
        contentDomain: "ai-widget-copy",
        contentPaths: ["aiWidget.greeting"],
        fields: [
          { id: "greeting", label: "Greeting Message", path: "aiWidget.greeting", preview: "long-text" }
        ]
      },
      {
        id: "system-prompt",
        label: "System Prompt",
        description: "Core instruction text for future prompt-control surfaces.",
        controlType: "instruction-preview",
        contentDomain: "ai-widget-copy",
        contentPaths: ["aiWidget.systemPrompt"],
        fields: [
          { id: "system-prompt", label: "System Prompt", path: "aiWidget.systemPrompt", preview: "long-text" }
        ]
      }
    ]
  },
  {
    id: "shared-context",
    label: "Shared Context",
    description: "Website content domains the AI surface can reference through shared data.",
    domain: "chat-context",
    contentPaths: ["hero", "subscriptions", "products"],
    groups: [
      {
        id: "home-context",
        label: "Home Context",
        description: "High-level public-facing content the assistant may reference.",
        controlType: "context-reference",
        contentDomain: "website-home",
        contentPaths: ["hero"],
        fields: [
          { id: "hero-title", label: "Hero Title", path: "hero.title", preview: "text" },
          { id: "hero-subtitle", label: "Hero Subtitle", path: "hero.subtitle", preview: "long-text" }
        ]
      },
      {
        id: "catalog-context",
        label: "Catalog Context",
        description: "Commerce collections available for recommendation and lookup.",
        controlType: "context-reference",
        contentDomain: "website-catalog",
        contentPaths: ["subscriptions", "products"],
        fields: [
          { id: "subscription-count", label: "Subscription Plans", path: "subscriptions", preview: "collection" },
          { id: "product-count", label: "Products", path: "products", preview: "collection" }
        ]
      }
    ]
  }
];

export default chatSections;
