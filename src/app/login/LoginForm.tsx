"use client";

import { useState } from "react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("Invalid Credentials");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-indigo-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
} 