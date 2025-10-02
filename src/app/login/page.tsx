"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EnterpriseLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    company: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // no real login, just redirect
    router.push("/login/result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-[#0B4A97] dark:text-white mb-6">
          Enterprise Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
              bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 
              focus:outline-none focus:border-[#0195D1]"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
              bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 
              focus:outline-none focus:border-[#0195D1]"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
              bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 
              focus:outline-none focus:border-[#0195D1]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg 
              bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 
              dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 
              focus:outline-none focus:border-[#0195D1]"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#0B4A97] to-[#0195D1] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
