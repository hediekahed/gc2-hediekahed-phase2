import PrimaryButton from "../components/PrimaryButton";

export default function UsersPage() {
  return (
    <div className="max-w-lg bg-white p-6 rounded-2xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Add User</h1>
      <input className="w-full border p-2 rounded" placeholder="Email" />
      <input className="w-full border p-2 rounded" placeholder="Password" />
      <PrimaryButton>Add User</PrimaryButton>
    </div>
  );
}
