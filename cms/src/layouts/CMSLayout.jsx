import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function CMSLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
