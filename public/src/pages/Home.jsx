import { useState } from "react";
import { lodgingsData } from "../data";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import FilterBar from "../components/FilterBar";

function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("default");
  const [type, setType] = useState("All");
  const [checkOut, setCheckOut] = useState("");

  const itemsPerPage = 3;

  // ===== FILTERING =====
  let filtered = lodgingsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (location !== "All") {
    filtered = filtered.filter((item) => item.location === location);
  }

  if (type !== "All") {
    filtered = filtered.filter((item) => item.type === type);
  }

  if (checkOut) {
    filtered = filtered.filter((item) => item.checkOutDate === checkOut);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  // ===== PAGINATION =====
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <Navbar
        search={search}
        setSearch={setSearch}
        setCurrentPage={setCurrentPage}
      />

      <FilterBar
        location={location}
        setLocation={setLocation}
        sort={sort}
        setSort={setSort}
        type={type}
        setType={setType}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        setCurrentPage={setCurrentPage}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-6">
          Recommended stays for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
}

export default Home;
