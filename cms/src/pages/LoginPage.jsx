import { useState } from "react";
import axios from "axios";
import PrimaryButton from "../components/PrimaryButton";

export default function LoginPage({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("access_token", data.access_token);

      setPage("dashboard");
    } catch (error) {
      console.log(error);
      alert("Login gagal");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-2">
          StayGo
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Manage your lodging content
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PrimaryButton onClick={handleLogin}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
