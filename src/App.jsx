import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";
import { getAdminPanelId } from "./control/panelAccess";
import { resolveSurfaceRenderState, subscribeToSurfaceStateChanges } from "./control/viewState";

export default function App() {
  const [surfaceState, setSurfaceState] = useState(resolveSurfaceRenderState);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => subscribeToSurfaceStateChanges(setSurfaceState), []);

  return (
    <div>
      {surfaceState.showWebsite ? <Home /> : null}
      {surfaceState.showAdmin ? (
        <>
          <hr />
          <div id={getAdminPanelId()}>
            <AdminPanel />
          </div>
        </>
      ) : null}

      {surfaceState.showChat ? (
        <div className="chat-fab">
          {isChatOpen ? (
            <div className="chat-fab__panel" aria-live="polite">
              <AIChatPanel variant="floating" onClose={() => setIsChatOpen(false)} />
            </div>
          ) : null}

          <button
            type="button"
            className={`chat-fab__button${isChatOpen ? " chat-fab__button--active" : ""}`}
            aria-expanded={isChatOpen}
            aria-controls="floating-ai-chat"
            aria-label={isChatOpen ? "Close Plant Factory AI" : "Open Plant Factory AI"}
            onClick={() => setIsChatOpen((open) => !open)}
          >
            <span className="chat-fab__icon" aria-hidden="true">
              ✦
            </span>
            <span className="chat-fab__label">Plant AI</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
