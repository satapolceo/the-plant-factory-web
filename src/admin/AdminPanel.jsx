import React from "react";
import adminSections from "./adminSections";
import siteContent from "../data/siteContent";

function getSectionSummary(sectionId, content) {
  switch (sectionId) {
    case "brand":
      return `Brand name: ${content.brandName}`;
    case "home-content":
      return [
        `Hero title: ${content.hero.title}`,
        `Features: ${content.features.items.length} items`,
        `Subscription plans: ${content.subscriptions.length}`,
        `Products: ${content.products.length}`,
        `Footer links: ${content.footer.links.length}`
      ];
    case "catalog":
      return [
        `Plans available: ${content.subscriptions.length}`,
        `Products available: ${content.products.length}`,
        `Featured subscription: ${
          content.subscriptions.find((plan) => plan.featured)?.name ?? "None"
        }`
      ];
    case "navigation":
      return content.navItems.map((item) => `${item.id}: ${item.label}`);
    case "system":
      return [
        `Legacy hero title mirror: ${content.heroTitle}`,
        `Legacy hero subtitle mirror: ${content.heroSubtitle}`
      ];
    default:
      return [];
  }
}

function renderValuePreview(value) {
  if (Array.isArray(value)) {
    return `${value.length} entries`;
  }

  if (value && typeof value === "object") {
    return `${Object.keys(value).length} fields`;
  }

  return String(value);
}

function AdminSectionCard({ section, content }) {
  const summary = getSectionSummary(section.id, content);

  return (
    <section aria-labelledby={`admin-section-${section.id}`}>
      <h3 id={`admin-section-${section.id}`}>{section.label}</h3>
      <p>{section.description}</p>

      {Array.isArray(summary) ? (
        <ul>
          {summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{summary}</p>
      )}

      <ul>
        {section.dataKeys.map((key) => (
          <li key={key}>
            <strong>{key}</strong>: {renderValuePreview(content[key])}
          </li>
        ))}
      </ul>
    </section>
  );
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

export default function AdminPanel() {
  return (
    <div>
      <section>
        <h2>Admin Panel</h2>
        <p>
          Structured view of shared content sections for future admin editing, API mapping, and
          control-layer integration.
        </p>
        <p>Brand: {siteContent.brandName}</p>
      </section>

      <section>
        <h3>Admin Section Map</h3>
        <AdminSectionNav sections={adminSections} />
      </section>

      {adminSections.map((section) => (
        <AdminSectionCard key={section.id} section={section} content={siteContent} />
      ))}
    </div>
  );
}
