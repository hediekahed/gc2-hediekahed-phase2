import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LodgingsPage from "./pages/LodgingsPage";
import CreateLodgingPage from "./pages/CreateLodgingPage";
import EditLodgingPage from "./pages/EditLodgingPage";
import UploadImagePage from "./pages/UploadImagePage";
import UsersPage from "./pages/UsersPage";

/* ===== PROTECTED ROUTE ===== */
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("access_token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <Routes>

      {/* ===== LOGIN ===== */}
      <Route path="/login" element={<LoginPage />} />

      {/* ===== CMS LAYOUT ===== */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <DashboardPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      {/* ===== DASHBOARD ===== */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <DashboardPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      {/* ===== LODGINGS ===== */}
      <Route
        path="/lodgings"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <LodgingsPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/lodgings/create"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <CreateLodgingPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/lodgings/edit/:id"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <EditLodgingPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/upload/:id"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <UploadImagePage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-gray-100">
              <Sidebar />
              <div className="flex-1 p-8">
                <UsersPage />
              </div>
            </div>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
  );
}
