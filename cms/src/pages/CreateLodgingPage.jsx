import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

export default function CreateLodgingPage() {

  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const [types, setTypes] = useState([]);

  const [form, setForm] = useState({
    name: "",
    facility: "",
    roomCapacity: "",
    imgUrl: "",
    price: "",
    location: "",
    typeId: ""
  });

  const [error, setError] = useState("");

  /* ================= LOAD TYPES ================= */
  useEffect(() => {
    fetchTypes();
  }, []);

  const fetchTypes = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/admin/types",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setTypes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= INPUT ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:3000/admin/lodgings",
        {
          name: form.name,
          facility: form.facility,
          roomCapacity: Number(form.roomCapacity),
          imgUrl: form.imgUrl,
          price: Number(form.price),
          location: form.location,
          typeId: Number(form.typeId)   // 🔥 penting
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      navigate("/lodgings");

    } catch (err) {
      setError(err.response?.data?.message || "Create failed");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="bg-white rounded-2xl shadow p-8 max-w-md space-y-4">

      <h1 className="text-2xl font-bold">Create Lodging</h1>

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="facility" placeholder="Facility" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="roomCapacity" type="number" placeholder="Room Capacity" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="imgUrl" placeholder="Image URL" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full border p-2 rounded" />

        <select name="typeId" onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Type</option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        <PrimaryButton>Submit</PrimaryButton>

      </form>
    </div>
  );
}
