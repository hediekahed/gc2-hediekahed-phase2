import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LodgingDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [lodging, setLodging] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDetail();
    fetchRelated();
  }, [id]);

  /* ================= FETCH DETAIL ================= */
  const fetchDetail = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/pub/lodgings/${id}`
      );
      setLodging(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FETCH RELATED ================= */
  const fetchRelated = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/pub/lodgings"
      );
      setRelated(res.data.data?.slice(0, 3) || []);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-10 animate-pulse space-y-4">
        <div className="h-80 bg-gray-300 rounded-xl"></div>
        <div className="h-6 bg-gray-300 w-1/3 rounded"></div>
        <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
        <div className="h-24 bg-gray-200 rounded"></div>
      </div>
    );
  }

  if (!lodging) {
    return <p className="p-10">Lodging not found</p>;
  }

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <div className="relative">

        <img
          src={lodging.imgUrl}
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-6 left-10 text-white">
          <h1 className="text-4xl font-bold">
            {lodging.name}
          </h1>
          <p className="opacity-90">
            {lodging.location}
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow"
        >
          ← Back
        </button>

        <div className="absolute top-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow text-lg font-bold">
          Rp {lodging.price.toLocaleString()}
        </div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto p-8 space-y-8">

        {/* INFO CARDS */}
        <div className="grid grid-cols-3 gap-6">

          <InfoCard label="Location" value={lodging.location} />
          <InfoCard label="Capacity" value={`${lodging.roomCapacity} guests`} />
          <InfoCard label="Type" value={lodging.Type?.name || "-"} />

        </div>

        {/* FACILITY */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            Facilities
          </h2>
          <p className="text-gray-600">
            {lodging.facility}
          </p>
        </div>

        {/* BOOK CTA */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Start from</p>
            <p className="text-2xl font-bold text-blue-600">
              Rp {lodging.price.toLocaleString()}
            </p>
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
            Book Now
          </button>
        </div>

        {/* RELATED */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            You may also like
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {related.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={item.imgUrl}
                  className="h-32 w-full object-cover"
                />
                <div className="p-3">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-blue-600 text-sm">
                    Rp {item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

/* ================= SMALL COMPONENT ================= */
function InfoCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}
