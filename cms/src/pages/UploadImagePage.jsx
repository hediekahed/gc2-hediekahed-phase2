import PrimaryButton from "../components/PrimaryButton";

export default function UploadImagePage() {
  return (
    <div className="max-w-lg bg-white p-6 rounded-2xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Upload Image</h1>
      <input type="file" />
      <PrimaryButton>Upload</PrimaryButton>
    </div>
  );
}
