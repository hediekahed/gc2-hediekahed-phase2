import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

export default function EditLodgingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/admin/lodgings/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setName(data.name);
      setLocation(data.location);
      setPrice(data.price);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/admin/lodgings/${id}`,
        {
          name,
          location,
          price
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("Updated successfully");
      navigate("/lodgings");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-lg">
      <h2 className="text-xl font-bold mb-4">
        Edit Lodging
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Update
        </button>

      </form>
    </div>
  );
}
