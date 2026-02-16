import { useParams } from "react-router";
import { lodgingsData } from "../data";

function Detail() {
  const { id } = useParams();
  const item = lodgingsData.find((el) => el.id === Number(id));

  if (!item) return <h1>Not Found</h1>;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-full h-96 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">
          {item.name}
        </h1>

        <p className="mt-2 text-gray-600">{item.facility}</p>

        <p className="mt-4 text-xl text-blue-600 font-bold">
          Rp {item.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Detail;
