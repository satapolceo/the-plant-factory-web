import React from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";

export default function App() {
  const handleAdminOpen = () => {
    document.getElementById("admin-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Home onAdminOpen={handleAdminOpen} />
      <hr />
      <div id="admin-panel">
        <AdminPanel />
      </div>
      <hr />
      <AIChatPanel />
    </div>
  );
}
