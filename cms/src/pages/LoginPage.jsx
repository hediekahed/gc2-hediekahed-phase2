import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const validateForm = () => {
    if (!email || !password) {
      toast.warning("Please login to continue ⚠️", {
        position: "top-center",
        theme: "colored",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format 📧");
      return false;
    }

    if (password.length < 5) {
      toast.error("Password must be at least 5 characters 🔐");
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validateForm()) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:3000/login",
        { email, password }
      );

      localStorage.setItem("access_token", data.access_token);

      toast.success("Welcome to StayGo CMS 🚀", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Invalid credentials ❌",
        { position: "top-center", theme: "colored" }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex animate-fadeIn">

      {/* LEFT SIDE - Hospitality Branding */}
      <div
        className="hidden md:flex md:w-1/2 relative items-center justify-center text-white p-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-indigo-900/70"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            StayGo CMS
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Lodging Management System
          </p>

          <p className="mt-4 text-white/60">
            Control property listings, manage images,
            and monitor lodging data with a secure
            enterprise-grade dashboard.
          </p>

          <div className="mt-8 text-sm text-white/50">
            Hospitality Technology • Secure • Scalable
          </div>
        </div>

        <div className="absolute bottom-6 right-8 text-xs text-white/40">
          Version 1.0.0 • 2026
        </div>
      </div>

      {/* RIGHT SIDE - Login */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Sign In
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Access StayGo CMS Dashboard
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none transition"
              placeholder="admin@staygo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <label className="text-sm text-gray-600">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 outline-none transition"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-500 text-sm hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-xs text-center text-gray-400 mt-6">
            StayGo©️
          </p>
        </form>
      </div>

      {/* Subtle Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
}
