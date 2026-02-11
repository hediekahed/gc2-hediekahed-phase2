import { useState } from "react";
import Sidebar from "./components/Sidebar";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LodgingsPage from "./pages/LodgingsPage";
import CreateLodgingPage from "./pages/CreateLodgingPage";
import EditLodgingPage from "./pages/EditLodgingPage";
import UploadImagePage from "./pages/UploadImagePage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  const [page, setPage] = useState("login");
  const [selectedId, setSelectedId] = useState(null);

  if (page === "login") {
    return <LoginPage setPage={setPage} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setPage={setPage} />

      <div className="flex-1 p-8">
        {page === "dashboard" && <DashboardPage />}

        {page === "lodgings" && (
          <LodgingsPage
            setPage={setPage}
            setSelectedId={setSelectedId}
          />
        )}

        {page === "create" && <CreateLodgingPage />}

        {page === "edit" && (
          <EditLodgingPage
            id={selectedId}
            setPage={setPage}
          />
        )}

        {page === "upload" && (
          <UploadImagePage
            id={selectedId}
            setPage={setPage}
          />
        )}

        {page === "users" && <UsersPage />}
      </div>
    </div>
  );
}
