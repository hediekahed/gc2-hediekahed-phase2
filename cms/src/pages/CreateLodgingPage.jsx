import PrimaryButton from "../components/PrimaryButton";

export default function CreateLodgingPage() {
  return (
    <div className="max-w-lg bg-white p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">Create Lodging</h1>

      <div className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="Name" />
        <input className="w-full border p-2 rounded" placeholder="Location" />
        <input className="w-full border p-2 rounded" placeholder="Price" />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
}
