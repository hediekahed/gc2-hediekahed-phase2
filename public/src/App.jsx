import { useState } from "react";

function App() {
  // ===== DATA ====
  const lodgingsData = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      facility: "AC, WiFi, TV, Balcony, Breakfast",
      roomCapacity: 2,
      imgUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      location: "Bali",
      price: 1200000,
    },
    {
      id: 2,
      name: "Family Suite",
      facility: "AC, WiFi, Kitchen, TV, Bathtub",
      roomCapacity: 4,
      imgUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      location: "Jakarta",
      price: 1500000,
    },
    {
      id: 3,
      name: "Standard Room",
      facility: "AC, WiFi, TV",
      roomCapacity: 2,
      imgUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      location: "Bandung",
      price: 600000,
    },
    {
      id: 4,
      name: "Executive Room",
      facility: "AC, WiFi, Smart TV, Workspace",
      roomCapacity: 2,
      imgUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      location: "Surabaya",
      price: 900000,
    },
    {
      id: 5,
      name: "Villa Private Pool",
      facility: "Private Pool, Kitchen, WiFi, AC, Garden",
      roomCapacity: 6,
      imgUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      location: "Ubud",
      price: 3500000,
    },
  ];

  // ===== STATE (SEARCH, FILTER, SORT) =====
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("default");

  // ===== FILTERING LOGIC =====
  let filtered = lodgingsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (location !== "All") {
    filtered = filtered.filter((item) => item.location === location);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-600">
            StayGo
          </h1>

          <input
            type="text"
            placeholder="Search hotel, villa, room..."
            className="border px-4 py-2 rounded-lg w-72 focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>

      {/* ================= FILTER BAR ================= */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 flex-wrap">
          <select
            className="border px-4 py-2 rounded-lg"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>All</option>
            <option>Bali</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
            <option>Ubud</option>
          </select>

          <select
            className="border px-4 py-2 rounded-lg"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Recommended stays for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.imgUrl}
                alt={item.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  📍 {item.location} • 👥 {item.roomCapacity} guests
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.facility}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <p className="text-blue-600 font-bold text-lg">
                    Rp {item.price.toLocaleString()}
                  </p>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PAGINATION (UI ONLY) ================= */}
        <div className="flex justify-center mt-10 gap-2">
          <button className="px-4 py-2 border rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg">2</button>
          <button className="px-4 py-2 border rounded-lg">3</button>
        </div>
      </main>
    </div>
  );
}

export default App;
