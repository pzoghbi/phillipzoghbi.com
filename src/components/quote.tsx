"use client";

import { useState } from "react";

import { sendMail } from "@/actions";

export default function Quote({ onSubmit }: { onSubmit: () => void }) {
  const [description, setDescription] = useState(""); // Track description
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [budget, setBudget] = useState(""); // Track budget
  const [timeline, setTimeline] = useState(""); // Track timeline
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms((prev) => [...prev, platform]);
    }
  };

  const handleValidation = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logic: If both are empty. Otherwise, proceed.
    if (!email.trim() && !phone.trim()) {
      setError(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return; // Stop execution if validation fails
    } else {
      setError(false);

      // Pass all form data to sendMail
      await sendMail({
        description,
        platforms: selectedPlatforms,
        budget,
        timeline,
        email,
        phone,
      });

      console.log("sent");
      onSubmit();
    }
  };

  return (
    <div className="animate-fade-in mx-auto mt-4 max-w-3xl px-6 pb-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Request a Project Quote
      </h1>
      <form onSubmit={handleValidation} className="space-y-8">
        {/* Description */}
        <div>
          <label className="mb-3 block text-xl font-bold text-gray-900">
            Project description / goal
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-32 w-full resize-none border-none bg-[#FDFDFD] p-3 focus:ring-2 focus:ring-black"
            placeholder=""
          />
        </div>

        {/* Platform Toggles */}
        <div>
          <label className="mb-3 block text-xl font-bold text-gray-900">
            Platform / devices
          </label>
          <div className="flex flex-col items-start space-y-2">
            {["Desktop", "Kiosk", "Mobile", "Custom hardware"].map(
              (platform) => (
                <button
                  key={platform}
                  type="button"
                  onClick={() => togglePlatform(platform)}
                  className={`w-48 px-4 py-2 text-left text-sm font-bold transition-colors ${
                    selectedPlatforms.includes(platform)
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black hover:bg-gray-400"
                  }`}
                >
                  {platform}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Budget Dropdown */}
        <div>
          <label className="mb-2 block text-xl font-bold tracking-tight text-gray-900">
            Budget range
          </label>
          <p className="mb-4 text-sm text-gray-700">
            Budget is for guidance. Final proposal will be based on project
            scope and complexity.
          </p>
          <div className="relative w-full md:w-2/3">
            <select
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-gray-400 bg-white p-2 text-lg outline-none focus:ring-2 focus:ring-black"
            >
              <option value="" disabled hidden>
                Select a range
              </option>
              <option value="under €1000">&lt; €1000 (very small scope)</option>
              <option value="€1000-€2000">€1000 - €2000</option>
              <option value="€2000-€5000">€2000 - €5000</option>
              <option value="€5000-€10000">€5000 - €10000</option>
              <option value="€10000+">€10000+</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Timeline Dropdown */}
        <div>
          <label className="mb-4 block text-xl font-bold tracking-tight text-gray-900">
            Timeline
          </label>
          <p className="mb-4 text-sm text-gray-700">
            Timeline is indicative and depends on scope and availability.
          </p>
          <div className="relative w-full md:w-2/3">
            <select
              required
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full cursor-pointer appearance-none border border-gray-400 bg-white p-2 text-lg outline-none focus:ring-2 focus:ring-black"
            >
              <option value="" disabled hidden>
                Select a timeline
              </option>
              <option value="<1 month">&lt; 1 month</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Flexible">Flexible / not fixed</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <label className="mb-4 block text-xl font-bold tracking-tight text-gray-900">
            Contact info
          </label>

          <div className="max-w-lg space-y-4">
            <div className="flex items-center">
              <span className="w-20 text-sm font-bold">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                className={`flex-1 border-2 border-transparent bg-white p-3 transition-colors focus:border-black`}
              />
            </div>
            <div className="flex items-center">
              <span className="w-20 text-sm font-bold">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setError(false);
                }}
                className={`flex-1 border-2 border-transparent bg-white p-3 transition-colors focus:border-black`}
              />
            </div>

            <p
              className={`mb-4 text-sm font-medium text-blue-800 italic ${!error && "opacity-0"}`}
            >
              Please provide at least one way to reach you (email or phone).
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800"
          >
            Request Project Quote
          </button>
        </div>
      </form>
      <div className="h-10"></div> {/* Spacer */}
      <div className="mt-12 text-center text-xs text-gray-500">© 2025 ZM5J</div>
    </div>
  );
}
