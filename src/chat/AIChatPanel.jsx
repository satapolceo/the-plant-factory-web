import React from "react";
import chatSections from "./chatSections";
import { getValueAtPath } from "../control/contentSelectors";
import siteContent from "../data/siteContent";

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
    <nav className="chat-panel__nav" aria-label="AI chat sections">
      <ul className="chat-panel__nav-list">
        {sections.map((section) => (
          <li key={section.id}>
            <a className="chat-panel__nav-link" href={`#chat-section-${section.id}`}>
              <span className="chat-panel__nav-label">{section.label}</span>
              <span className="chat-panel__nav-id">{section.id}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ChatFieldRow({ field, content }) {
  const value = getValueAtPath(content, field.path);

  return (
    <li className="chat-panel__field-row">
      <div className="chat-panel__field-topline">
        <strong className="chat-panel__field-label">{field.label}</strong>
        <span className="chat-panel__field-preview">
          {renderValuePreview(field.path, value, field.preview)}
        </span>
      </div>
      <code className="chat-panel__field-path">{field.path}</code>
    </li>
  );
}

function ChatGroupCard({ sectionId, group, content }) {
  return (
    <section className="chat-panel__group-card" aria-labelledby={`chat-group-${sectionId}-${group.id}`}>
      <div className="chat-panel__group-head">
        <div>
          <h4 className="chat-panel__group-title" id={`chat-group-${sectionId}-${group.id}`}>
            {group.label}
          </h4>
          <p className="chat-panel__group-description">{group.description}</p>
        </div>
        <span className="chat-panel__group-type">{group.controlType}</span>
      </div>

      <div className="chat-panel__group-meta">
        <span>
          <strong>Group ID:</strong> {group.id}
        </span>
        <span>
          <strong>Content Domain:</strong> {group.contentDomain}
        </span>
        <span>
          <strong>Path Coverage:</strong> {getPathCountSummary(content, group.contentPaths)}
        </span>
      </div>

      <ul className="chat-panel__field-list">
        {group.fields.map((field) => (
          <ChatFieldRow key={field.id} field={field} content={content} />
        ))}
      </ul>
    </section>
  );
}

function ChatSectionCard({ section, content }) {
  return (
    <section className="chat-panel__section-card" aria-labelledby={`chat-section-${section.id}`}>
      <div className="chat-panel__section-head">
        <div>
          <p className="chat-panel__eyebrow">{section.domain}</p>
          <h3 className="chat-panel__section-title" id={`chat-section-${section.id}`}>
            {section.label}
          </h3>
        </div>
        <span className="chat-panel__section-id">{section.id}</span>
      </div>

      <p className="chat-panel__section-description">{section.description}</p>

      <div className="chat-panel__meta-grid">
        <div className="chat-panel__meta-card">
          <span className="chat-panel__meta-label">Mapped Paths</span>
          <span className="chat-panel__meta-value">{section.contentPaths.join(", ")}</span>
        </div>
        <div className="chat-panel__meta-card">
          <span className="chat-panel__meta-label">Groups</span>
          <span className="chat-panel__meta-value">{section.groups.length}</span>
        </div>
      </div>

      <div className="chat-panel__group-grid">
        {section.groups.map((group) => (
          <ChatGroupCard key={group.id} sectionId={section.id} group={group} content={content} />
        ))}
      </div>
    </section>
  );
}

export default function AIChatPanel({ variant = "page", onClose }) {
  const isFloating = variant === "floating";

  return (
    <div className={`chat-panel${isFloating ? " chat-panel--floating" : ""}`} id={isFloating ? "floating-ai-chat" : undefined}>
      <div className="chat-panel__shell">
        <section className="chat-panel__intro">
          <div className="chat-panel__intro-topbar">
            <div>
              <p className="chat-panel__eyebrow">AI Control Surface</p>
              <h2 className="chat-panel__title">AI Chat Panel</h2>
            </div>
            {isFloating ? (
              <button type="button" className="chat-panel__close" onClick={onClose} aria-label="Close AI Chat">
                ×
              </button>
            ) : null}
          </div>
          <p className="chat-panel__lead">
            Structured control map of shared AI chat configuration, provider settings, and website
            context references.
          </p>

          <div className="chat-panel__intro-meta">
            <div className="chat-panel__intro-card">
              <span className="chat-panel__meta-label">Assistant</span>
              <span className="chat-panel__meta-value">{siteContent.aiWidget.title}</span>
            </div>
            <div className="chat-panel__intro-card">
              <span className="chat-panel__meta-label">Provider</span>
              <span className="chat-panel__meta-value">
                {renderValuePreview("aiWidget.provider", siteContent.aiWidget.provider, "badge")}
              </span>
            </div>
            <div className="chat-panel__intro-card">
              <span className="chat-panel__meta-label">Mapped Sections</span>
              <span className="chat-panel__meta-value">{chatSections.length}</span>
            </div>
          </div>
        </section>

        <section className="chat-panel__map">
          <div className="chat-panel__map-head">
            <div>
              <p className="chat-panel__eyebrow">Navigation</p>
              <h3 className="chat-panel__map-title">AI Chat Section Map</h3>
            </div>
            <p className="chat-panel__map-copy">
              Stable ids, domains, group ids, and explicit shared content paths remain visible for
              maintainability and future control-layer integration.
            </p>
          </div>
          <ChatPanelNav sections={chatSections} />
        </section>

        <div className="chat-panel__sections">
          {chatSections.map((section) => (
            <ChatSectionCard key={section.id} section={section} content={siteContent} />
          ))}
        </div>
      </div>
    </div>
  );
}
