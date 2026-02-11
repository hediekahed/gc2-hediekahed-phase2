export default function Sidebar({ setPage }) {
  return (
    <div className="w-64 bg-white/90 backdrop-blur-md shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-purple-600">StayGo</h2>

      <nav className="space-y-3 text-gray-700">
        <button onClick={() => setPage("dashboard")} className="block">
          Dashboard
        </button>
        <button onClick={() => setPage("lodgings")} className="block">
          Lodgings
        </button>
        <button onClick={() => setPage("create")} className="block">
          Create Lodging
        </button>
        <button onClick={() => setPage("upload")} className="block">
          Upload Image
        </button>
        <button onClick={() => setPage("users")} className="block">
          Users
        </button>
      </nav>
    </div>
  );
}
