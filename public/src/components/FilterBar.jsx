function FilterBar({
  location,
  setLocation,
  sort,
  setSort,
  type,
  setType,
  checkOut,
  setCheckOut,
  setCurrentPage,
}) {
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 flex-wrap">

        <select
          className="border px-4 py-2 rounded-lg"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setCurrentPage(1);
          }}
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
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>

        <select
          className="border px-4 py-2 rounded-lg"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>All</option>
          <option>Hotel</option>
          <option>Villa</option>
          <option>Apartment</option>
          <option>Resort</option>
        </select>

        <input
          type="date"
          className="border px-4 py-2 rounded-lg"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value);
            setCurrentPage(1);
          }}
        />

      </div>
    </section>
  );
}

export default FilterBar;
