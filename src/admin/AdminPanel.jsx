import React from "react";
import adminSections from "./adminSections";
import siteContent from "../data/siteContent";

function getValueAtPath(source, path) {
  return path.split(".").reduce((current, key) => current?.[key], source);
}

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

  return String(value);
}

function getGroupSummary(group, content) {
  return group.contentPaths.map((path) => ({
    path,
    value: getValueAtPath(content, path)
  }));
}

function AdminSectionNav({ sections }) {
  return (
    <nav aria-label="Admin sections">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#admin-section-${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AdminGroupCard({ sectionId, group, content }) {
  const rows = getGroupSummary(group, content);

  return (
    <section aria-labelledby={`admin-group-${sectionId}-${group.id}`}>
      <h4 id={`admin-group-${sectionId}-${group.id}`}>{group.label}</h4>
      <p>{group.description}</p>
      <ul>
        {rows.map((row) => (
          <li key={row.path}>
            <strong>{row.path}</strong>: {renderValuePreview(row.value)}
          </li>
        ))}
      </ul>
    </section>
  );
}

function AdminSectionCard({ section, content }) {
  return (
    <section aria-labelledby={`admin-section-${section.id}`}>
      <h3 id={`admin-section-${section.id}`}>{section.label}</h3>
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
        <AdminGroupCard key={group.id} sectionId={section.id} group={group} content={content} />
      ))}
    </section>
  );
}

export default function AdminPanel() {
  return (
    <div>
      <section>
        <h2>Admin Panel</h2>
        <p>
          Structured control map of shared content sections for future admin editing, API mapping,
          and control-layer integration.
        </p>
        <p>Brand: {siteContent.brandName}</p>
      </section>

      <section>
        <h3>Admin Section Map</h3>
        <p>
          Each section now exposes stable ids, domain references, and explicit shared content
          paths.
        </p>
        <AdminSectionNav sections={adminSections} />
      </section>

      {adminSections.map((section) => (
        <AdminSectionCard key={section.id} section={section} content={siteContent} />
      ))}
    </div>
  );
}
