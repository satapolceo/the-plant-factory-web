import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";
import { getAdminPanelId, resolveAdminAccessState, subscribeToAdminAccessChanges } from "./control/panelAccess";

export default function App() {
  const [isAdminAccessEnabled, setIsAdminAccessEnabled] = useState(resolveAdminAccessState);

  useEffect(() => subscribeToAdminAccessChanges(setIsAdminAccessEnabled), []);

  return (
    <div>
      <Home />
      {isAdminAccessEnabled ? (
        <>
          <hr />
          <div id={getAdminPanelId()}>
            <AdminPanel />
          </div>
        </>
      ) : null}
      <hr />
      <AIChatPanel />
    </div>
  );
}
