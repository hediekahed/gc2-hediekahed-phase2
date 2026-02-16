import { NavLink, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const menuClass = ({ isActive }) =>
    `block transition ${
      isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
    }`;

  return (
    <div className="w-64 bg-white/90 backdrop-blur-md shadow-lg p-6 flex flex-col justify-between">
      
      {/* ===== TOP ===== */}
      <div>
        <h2 className="text-2xl font-bold text-purple-600 mb-6">
          StayGo
        </h2>

        <nav className="space-y-3 text-gray-700">
          <NavLink to="/dashboard" className={menuClass}>
            Dashboard
          </NavLink>

          <NavLink to="/lodgings" className={menuClass}>
            Lodgings
          </NavLink>

          <NavLink to="/lodgings/create" className={menuClass}>
            Create Lodging
          </NavLink>

          <NavLink to="/upload/1" className={menuClass}>
            Upload Image
          </NavLink>

          <NavLink to="/users" className={menuClass}>
            Users
          </NavLink>
        </nav>
      </div>

      {/* ===== LOGOUT ===== */}
      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>
  );
}
