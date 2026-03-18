import React from "react";
import Home from "./pages/Home";
import AdminPanel from "./admin/AdminPanel";
import AIChatPanel from "./chat/AIChatPanel";

export default function App() {
  return (
    <div>
      <Home />
      <hr />
      <AdminPanel />
      <hr />
      <AIChatPanel />
    </div>
  );
}