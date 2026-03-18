import React from "react";
import siteContent from "../data/siteContent";

export default function Header() {
  return (
    <header>
      <nav>
        <strong>{siteContent.brandName}</strong>
      </nav>
    </header>
  );
}