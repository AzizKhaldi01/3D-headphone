"use client";

import React, { useState } from "react";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, interests, otherInterest }),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your interest! We'll be in touch soon."
        );
        setEmail("");
        setInterests([]);
        setOtherInterest("");
      } else {
        setSubmitMessage("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Submission failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    "Real Estate Rentals",
    "Real Estate Sales",
    "Office Spaces",
    "Hotel Rooms",
    "Digital art exhibitions",
  ];

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl mx-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Early Access</h2>
        <p className="mb-8 text-center">
          Be among the firsts to experience the future of 3D modeling with
          Comra.ai!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-800 rounded"
              required
            />
          </div>

          <div>
            <p className="mb-2">Usecase:</p>
            <div className="grid grid-cols-2 gap-2">
              {interestOptions.map((item) => (
                <label key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    value={item}
                    checked={interests.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setInterests([...interests, item]);
                      } else {
                        setInterests(interests.filter((i) => i !== item));
                      }
                    }}
                    className="mr-2"
                  />
                  {item}
                </label>
              ))}
            </div>
            <div className="mt-4">
              <label htmlFor="otherInterest" className="block mb-1">
                Other:
              </label>
              <input
                type="text"
                id="otherInterest"
                value={otherInterest}
                onChange={(e) => setOtherInterest(e.target.value)}
                className="w-full p-2 bg-gray-800 rounded"
                placeholder="Type your other interests here"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 mt-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Early Access"}
          </button>
        </form>
        {submitMessage && (
          <p
            className={`mt-4 text-center ${
              submitMessage.includes("failed")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessForm;
