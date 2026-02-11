import { useEffect, useState } from "react";
import { fetchAdminLodgings } from "../api/admin";

export default function LodgingsPage({ setPage, setSelectedId }) {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAdminLodgings();
        setLodgings(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

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
              <td className="py-2">
                <button
                  onClick={() => {
                    setSelectedId(item.id);
                    setPage("edit");
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
