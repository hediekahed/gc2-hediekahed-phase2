export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* login card */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-1 text-center">
          StayGo CMS
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Manage your lodging content
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="admin@staygo.com"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="button"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          © 2026 StayGo · Travel CMS
        </p>
      </div>
    </div>
  );
}

