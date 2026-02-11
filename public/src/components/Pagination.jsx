function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center mt-10 gap-2">
      <button
        className="px-4 py-2 border rounded-lg"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 border rounded-lg ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 border rounded-lg"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
