import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function EditLodgingPage({ id, setPage }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/lodgings/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const data = await response.json();
        setName(data.name);
        setLocation(data.location);
        setPrice(data.price);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchDetail();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/lodgings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        name,
        location,
        price,
      }),
    });

    setPage("lodgings");
  };

  return (
    <div className="max-w-lg bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Edit Lodging</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <PrimaryButton type="submit">
          Update
        </PrimaryButton>
      </form>
    </div>
  );
}
