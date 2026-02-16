import { Link } from "react-router";

function Card({ item }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
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
          🏷 {item.type}
        </p>

        <p className="text-sm text-gray-500">
          📍 {item.location} • 👥 {item.roomCapacity} guests
        </p>

        <p className="text-sm text-gray-500">
          📅 Check-out: {item.checkOutDate}
        </p>

        <div className="flex justify-between items-center pt-2">
          <p className="text-blue-600 font-bold text-lg">
            Rp {item.price.toLocaleString()}
          </p>

          <Link
            to={`/lodgings/${item.id}`}
  className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
