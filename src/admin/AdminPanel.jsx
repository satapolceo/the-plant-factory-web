import React from "react";
import siteContent from "../data/siteContent";

export default function AdminPanel() {
  return (
    <section>
      <h2>Admin Panel</h2>
      <p>Brand: {siteContent.brandName}</p>
      <p>Hero Title: {siteContent.heroTitle}</p>
      <p>Hero Subtitle: {siteContent.heroSubtitle}</p>
    </section>
  );
}