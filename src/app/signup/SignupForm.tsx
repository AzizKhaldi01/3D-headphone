"use client";

import { useState } from "react";
import Link from "next/link";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invitationCode, setInvitationCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("The invitation code is not valid");
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
        <div>
          <label htmlFor="invitationCode" className="block mb-2 text-sm font-medium">
            Invitation Code
          </label>
          <input
            type="text"
            id="invitationCode"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="text-sm">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </>
  );
} 