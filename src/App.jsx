import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";
import { getAdminPanelId } from "./control/panelAccess";
import { resolveSurfaceRenderState, subscribeToSurfaceStateChanges } from "./control/viewState";

export default function App() {
  const [surfaceState, setSurfaceState] = useState(resolveSurfaceRenderState);

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
        <>
          <hr />
          <AIChatPanel />
        </>
      ) : null}
    </div>
  );
}
