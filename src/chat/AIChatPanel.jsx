import React from "react";
import chatSections from "./chatSections";
import siteContent from "../data/siteContent";

function getValueAtPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

function getTextPreview(value, maxLength = 120) {
  if (value == null) {
    return "Not set";
  }

  const normalized = String(value).replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength)}...`;
}

function renderValuePreview(path, value, previewType = "auto") {
  if (previewType === "sensitive" || path === "aiWidget.apiKey") {
    return value ? "Configured" : "Not configured";
  }

  if (Array.isArray(value)) {
    if (previewType === "collection") {
      if (value.length === 0) {
        return "0 entries";
      }

      const firstItem = value[0];
      const itemLabel = firstItem?.name ?? firstItem?.title ?? firstItem?.label ?? firstItem?.id ?? "item";
      return `${value.length} entries, first item: ${itemLabel}`;
    }

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

  if (previewType === "badge") {
    return String(value ?? "Not set").toUpperCase();
  }

  if (previewType === "long-text") {
    return getTextPreview(value, 160);
  }

  if (value && typeof value === "object") {
    return `${Object.keys(value).length} fields`;
  }

  if (typeof value === "string") {
    return getTextPreview(value, 120);
  }

  if (value == null || value === "") {
    return "Not set";
  }

  return String(value);
}

function getPathCountSummary(content, paths) {
  const resolvedValues = paths.map((path) => getValueAtPath(content, path)).filter(Boolean);
  return `${resolvedValues.length}/${paths.length} mapped paths resolved`;
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

function ChatFieldRow({ field, content }) {
  const value = getValueAtPath(content, field.path);

  return (
    <li>
      <strong>{field.label}</strong>
      <div>Path: {field.path}</div>
      <div>Preview: {renderValuePreview(field.path, value, field.preview)}</div>
    </li>
  );
}

function ChatGroupCard({ sectionId, group, content }) {
  return (
    <section aria-labelledby={`chat-group-${sectionId}-${group.id}`}>
      <h4 id={`chat-group-${sectionId}-${group.id}`}>{group.label}</h4>
      <p>{group.description}</p>
      <p>
        <strong>Group ID:</strong> {group.id}
      </p>
      <p>
        <strong>Control Type:</strong> {group.controlType}
      </p>
      <p>
        <strong>Content Domain:</strong> {group.contentDomain}
      </p>
      <p>
        <strong>Path Coverage:</strong> {getPathCountSummary(content, group.contentPaths)}
      </p>
      <ul>
        {group.fields.map((field) => (
          <ChatFieldRow key={field.id} field={field} content={content} />
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
        <strong>Mapped Paths:</strong> {section.contentPaths.join(", ")}
      </p>
      <p>
        <strong>Groups:</strong> {section.groups.length}
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
        <p>Provider: {renderValuePreview("aiWidget.provider", siteContent.aiWidget.provider, "badge")}</p>
        <p>Mapped sections: {chatSections.length}</p>
      </section>

      <section>
        <h3>AI Chat Section Map</h3>
        <p>
          Each chat area exposes stable ids, domain references, group ids, and explicit shared
          content paths for future control-layer integration.
        </p>
        <ChatPanelNav sections={chatSections} />
      </section>

      {chatSections.map((section) => (
        <ChatSectionCard key={section.id} section={section} content={siteContent} />
      ))}
    </div>
  );
}
