export default function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
    >
      {children}
    </button>
  );
}
