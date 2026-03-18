import React from "react";

export default function HomeFooter({ footer }) {
  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <div className="home-footer__left">
          <div className="home-footer__meta">
            <p className="home-footer__copyright">{footer.copyright}</p>
          </div>
        </div>

        <div className="home-footer__links">
          {footer.links.map((link) => (
            <a key={link.id} href={link.href} className="home-footer__link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
