import React from "react";
import siteContent from "../data/siteContent";

export default function AIChatPanel() {
  return (
    <section>
      <h2>AI Chat Panel</h2>
      <p>AI can read shared content from the same source.</p>
      <p>Brand: {siteContent.brandName}</p>
      <p>Hero Title: {siteContent.heroTitle}</p>
      <p>Hero Subtitle: {siteContent.heroSubtitle}</p>
    </section>
  );
}