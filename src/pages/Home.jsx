import React from "react";
import Header from "../components/Header";
import siteContent from "../data/siteContent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>{siteContent.heroTitle}</h1>
          <p>{siteContent.heroSubtitle}</p>
        </section>
      </main>
    </>
  );
}