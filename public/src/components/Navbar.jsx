function Navbar({ search, setSearch, setCurrentPage }) {
  return (
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
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
