import React from "react";
import chatSections from "./chatSections";
import siteContent from "../data/siteContent";

function getValueAtPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function renderValuePreview(path, value) {
  if (path === "aiWidget.apiKey") {
    return value ? "Configured" : "Not configured";
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "0 entries";
    }

    const firstItem = value[0];

    if (typeof firstItem === "string") {
      return `${value.length} entries: ${value.join(", ")}`;
    }

    if (firstItem && typeof firstItem === "object") {
      const itemId = firstItem.id ?? firstItem.name ?? firstItem.label ?? "item";
      return `${value.length} entries, first id: ${itemId}`;
    }

    return `${value.length} entries`;
  }

  if (value && typeof value === "object") {
    return `${Object.keys(value).length} fields`;
  }

  return String(value);
}

function ChatPanelNav({ sections }) {
  return (
    <nav aria-label="AI chat sections">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#chat-section-${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ChatGroupCard({ sectionId, group, content }) {
  return (
    <section aria-labelledby={`chat-group-${sectionId}-${group.id}`}>
      <h4 id={`chat-group-${sectionId}-${group.id}`}>{group.label}</h4>
      <p>{group.description}</p>
      <ul>
        {group.contentPaths.map((path) => (
          <li key={path}>
            <strong>{path}</strong>: {renderValuePreview(path, getValueAtPath(content, path))}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ChatSectionCard({ section, content }) {
  return (
    <section aria-labelledby={`chat-section-${section.id}`}>
      <h3 id={`chat-section-${section.id}`}>{section.label}</h3>
      <p>{section.description}</p>
      <p>
        <strong>Section ID:</strong> {section.id}
      </p>
      <p>
        <strong>Domain:</strong> {section.domain}
      </p>
      <p>
        <strong>Content Paths:</strong> {section.contentPaths.join(", ")}
      </p>

      {section.groups.map((group) => (
        <ChatGroupCard key={group.id} sectionId={section.id} group={group} content={content} />
      ))}
    </section>
  );
}

export default function AIChatPanel() {
  return (
    <div>
      <section>
        <h2>AI Chat Panel</h2>
        <p>
          Structured control map of shared AI chat configuration, provider settings, and website
          context references.
        </p>
        <p>Assistant: {siteContent.aiWidget.title}</p>
      </section>

      <section>
        <h3>AI Chat Section Map</h3>
        <p>
          Each chat area now exposes stable ids, domain references, and explicit shared content
          paths.
        </p>
        <ChatPanelNav sections={chatSections} />
      </section>

      {chatSections.map((section) => (
        <ChatSectionCard key={section.id} section={section} content={siteContent} />
      ))}
    </div>
  );
}
