import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const [lodgings, setLodgings] = useState([]);
  const [types, setTypes] = useState([]);

  const [loading, setLoading] = useState(true); // ✅ loading state
  const [error, setError] = useState(null); // ✅ error state

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [lodgingRes, typeRes] = await Promise.all([
        axios.get("http://localhost:3000/admin/lodgings", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:3000/admin/types", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setLodgings(lodgingRes.data);
      setTypes(typeRes.data);

    } catch (err) {
      console.log(err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  /* ===== DERIVED DATA ===== */
  const latestLodgings = lodgings.slice(0, 5);

  const avgPrice =
    lodgings.length > 0
      ? Math.round(
          lodgings.reduce((a, b) => a + b.price, 0) / lodgings.length
        )
      : 0;

  const chartData = lodgings.slice(0, 6).map((item) => ({
    name: item.name.substring(0, 8),
    price: item.price,
  }));

  /* ===== LOADING UI ===== */
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6 animate-pulse">
        <div className="h-32 bg-gray-200 rounded-2xl"></div>
        <div className="h-32 bg-gray-200 rounded-2xl"></div>
        <div className="h-32 bg-gray-200 rounded-2xl"></div>
      </div>
    );
  }

  /* ===== ERROR UI ===== */
  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-6 rounded-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* ===== WELCOME ===== */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-gray-500">
          Here’s what’s happening with your property today.
        </p>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Lodgings" value={lodgings.length} />
        <StatCard title="Total Types" value={types.length} />
        <StatCard title="Average Price" value={`Rp ${avgPrice}`} />
      </div>

      {/* ===== CHART ===== */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Price Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="price" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ===== LATEST ===== */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Latest Lodgings
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Location</th>
              <th className="text-left py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {latestLodgings.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.name}</td>
                <td>{item.location}</td>
                <td>Rp {item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

/* ===== STAT CARD COMPONENT ===== */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-purple-600">{value}</h2>
    </div>
  );
}
