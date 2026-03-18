import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";

function getIsAdminAccessEnabled() {
  const searchParams = new URLSearchParams(window.location.search);

  return window.location.hash === "#admin" || searchParams.get("panel") === "admin";
}

export default function App() {
  const [isAdminAccessEnabled, setIsAdminAccessEnabled] = useState(getIsAdminAccessEnabled);

  useEffect(() => {
    const syncAdminAccess = () => {
      setIsAdminAccessEnabled(getIsAdminAccessEnabled());
    };

    window.addEventListener("hashchange", syncAdminAccess);
    window.addEventListener("popstate", syncAdminAccess);

    return () => {
      window.removeEventListener("hashchange", syncAdminAccess);
      window.removeEventListener("popstate", syncAdminAccess);
    };
  }, []);

  return (
    <div>
      <Home />
      {isAdminAccessEnabled ? (
        <>
          <hr />
          <div id="admin-panel">
            <AdminPanel />
          </div>
        </>
      ) : null}
      <hr />
      <AIChatPanel />
    </div>
  );
}
