import React from "react";

export default function HomeFooter({ footer, onAdminOpen }) {
  return (
    <footer className="home-footer">
      <div className="home-footer__inner">
        <div className="home-footer__left">
          <div className="home-footer__meta">
            <p className="home-footer__copyright">{footer.copyright}</p>
            {footer.adminControl ? (
              <>
                <span className="home-footer__divider" aria-hidden="true">
                  /
                </span>
                <button type="button" className="home-footer__admin" onClick={onAdminOpen}>
                  <span className="home-footer__admin-icon" aria-hidden="true">
                    ◌
                  </span>
                  <span className="home-footer__admin-text">{footer.adminControl.label}</span>
                </button>
              </>
            ) : null}
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
