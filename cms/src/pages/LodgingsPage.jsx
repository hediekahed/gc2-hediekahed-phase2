import { useEffect, useState } from "react";
import { fetchAdminLodgings } from "../api/admin";
import { Link } from "react-router";
import axios from "axios";

export default function LodgingsPage() {
  const [lodgings, setLodgings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchAdminLodgings();
      setLodgings(data);
    } catch (err) {
      console.log(err);
      setError("Failed to load lodgings");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Delete this lodging?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/admin/lodgings/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      loadData(); // refresh list

    } catch (error) {
      console.log(error);
    }
  };

  /* ===== LOADING ===== */
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-8">
        Loading lodgings...
      </div>
    );
  }

  /* ===== ERROR ===== */
  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-6 rounded-2xl">
        {error}
      </div>
    );
  }

  /* ===== EMPTY ===== */
  if (!lodgings.length) {
    return (
      <div className="bg-white rounded-2xl shadow p-8">
        No lodgings found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-8">
      <h1 className="text-2xl font-bold mb-4">Lodgings</h1>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Location</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {lodgings.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.name}</td>
              <td>{item.location}</td>
              <td>Rp {item.price}</td>

              <td className="py-2 space-x-3">

                <Link
                  to={`/lodgings/edit/${item.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
