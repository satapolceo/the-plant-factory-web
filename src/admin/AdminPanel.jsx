import React from "react";
import adminSections from "./adminSections";
import { getValueAtPath } from "../control/contentSelectors";
import siteContent from "../data/siteContent";

function renderValuePreview(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "0 entries";
    }

    const firstItem = value[0];

    if (typeof firstItem === "string") {
      return `${value.length} entries: ${value.join(", ")}`;
    }

    if (firstItem && typeof firstItem === "object") {
      const itemId = firstItem.id ?? firstItem.label ?? firstItem.name ?? "item";
      return `${value.length} entries, first id: ${itemId}`;
    }

    return `${value.length} entries`;
  }

  if (value && typeof value === "object") {
    return `${Object.keys(value).length} fields`;
  }

  if (value == null || value === "") {
    return "Not set";
  }

  return String(value);
}

function AdminSectionNav({ sections }) {
  return (
    <nav className="admin-panel__nav" aria-label="Admin sections">
      <ul className="admin-panel__nav-list">
        {sections.map((section) => (
          <li key={section.id}>
            <a className="admin-panel__nav-link" href={`#admin-section-${section.id}`}>
              <span className="admin-panel__nav-label">{section.label}</span>
              <span className="admin-panel__nav-id">{section.id}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AdminFieldRow({ field, value }) {
  return (
    <li className="admin-panel__field-row">
      <div className="admin-panel__field-topline">
        <strong className="admin-panel__field-label">{field.label}</strong>
        <span className="admin-panel__field-preview">{renderValuePreview(value)}</span>
      </div>
      <code className="admin-panel__field-path">{field.path}</code>
    </li>
  );
}

function AdminGroupCard({ sectionId, group, content }) {
  return (
    <section className="admin-panel__group-card" aria-labelledby={`admin-group-${sectionId}-${group.id}`}>
      <div className="admin-panel__group-head">
        <div>
          <h4 className="admin-panel__group-title" id={`admin-group-${sectionId}-${group.id}`}>
            {group.label}
          </h4>
          <p className="admin-panel__group-description">{group.description}</p>
        </div>
        <span className="admin-panel__group-type">{group.controlType}</span>
      </div>

      <div className="admin-panel__group-meta">
        <span>
          <strong>Group ID:</strong> {group.id}
        </span>
      </div>

      <ul className="admin-panel__field-list">
        {group.fields.map((field) => (
          <AdminFieldRow key={field.id} field={field} value={getValueAtPath(content, field.path)} />
        ))}
      </ul>
    </section>
  );
}

function AdminSectionCard({ section, content }) {
  return (
    <section className="admin-panel__section-card" aria-labelledby={`admin-section-${section.id}`}>
      <div className="admin-panel__section-head">
        <div>
          <p className="admin-panel__eyebrow">{section.domain}</p>
          <h3 className="admin-panel__section-title" id={`admin-section-${section.id}`}>
            {section.label}
          </h3>
        </div>
        <span className="admin-panel__section-id">{section.id}</span>
      </div>

      <p className="admin-panel__section-description">{section.description}</p>

      <div className="admin-panel__meta-grid">
        <div className="admin-panel__meta-card">
          <span className="admin-panel__meta-label">Content Paths</span>
          <span className="admin-panel__meta-value">{section.contentPaths.join(", ")}</span>
        </div>
        <div className="admin-panel__meta-card">
          <span className="admin-panel__meta-label">Group Count</span>
          <span className="admin-panel__meta-value">{section.groups.length}</span>
        </div>
      </div>

      <div className="admin-panel__group-grid">
        {section.groups.map((group) => (
          <AdminGroupCard key={group.id} sectionId={section.id} group={group} content={content} />
        ))}
      </div>
    </section>
  );
}

export default function AdminPanel() {
  return (
    <div className="admin-panel">
      <div className="admin-panel__shell">
        <section className="admin-panel__intro">
          <p className="admin-panel__eyebrow">Internal Control Surface</p>
          <h2 className="admin-panel__title">Admin Panel</h2>
          <p className="admin-panel__lead">
            Internal control surface for shared website content. Access is intentionally gated and
            this panel maps section ids, content paths, and field groups for future automation.
          </p>

          <div className="admin-panel__intro-meta">
            <div className="admin-panel__intro-card">
              <span className="admin-panel__meta-label">Access Mode</span>
              <span className="admin-panel__meta-value">internal hash/query entry (#admin or ?panel=admin)</span>
            </div>
            <div className="admin-panel__intro-card">
              <span className="admin-panel__meta-label">Brand</span>
              <span className="admin-panel__meta-value">{siteContent.brandName}</span>
            </div>
            <div className="admin-panel__intro-card">
              <span className="admin-panel__meta-label">Sections</span>
              <span className="admin-panel__meta-value">{adminSections.length}</span>
            </div>
          </div>
        </section>

        <section className="admin-panel__map">
          <div className="admin-panel__map-head">
            <div>
              <p className="admin-panel__eyebrow">Navigation</p>
              <h3 className="admin-panel__map-title">Admin Section Map</h3>
            </div>
            <p className="admin-panel__map-copy">
              Stable ids, domains, control-group ids, and shared content paths stay visible for
              maintainability and future control-layer integration.
            </p>
          </div>
          <AdminSectionNav sections={adminSections} />
        </section>

        <div className="admin-panel__sections">
          {adminSections.map((section) => (
            <AdminSectionCard key={section.id} section={section} content={siteContent} />
          ))}
        </div>
      </div>
    </div>
  );
}
