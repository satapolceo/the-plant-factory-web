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
        contentPaths: ["brandName", "aiWidget.title"]
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
        contentPaths: ["aiWidget.provider"]
      },
      {
        id: "api-credentials",
        label: "API Credentials",
        description: "Credential presence for future control and validation flows.",
        contentPaths: ["aiWidget.apiKey"]
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
        contentPaths: ["aiWidget.greeting"]
      },
      {
        id: "system-prompt",
        label: "System Prompt",
        description: "Core instruction text for future prompt-control surfaces.",
        contentPaths: ["aiWidget.systemPrompt"]
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
        contentPaths: ["hero"]
      },
      {
        id: "catalog-context",
        label: "Catalog Context",
        description: "Commerce collections available for recommendation and lookup.",
        contentPaths: ["subscriptions", "products"]
      }
    ]
  }
];

export default chatSections;
