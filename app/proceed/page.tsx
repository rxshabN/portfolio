"use client";

import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Proceed() {
  const router = useRouter();
  const [hasPreference, setHasPreference] = useState(false);

  useEffect(() => {
    const userPreference = localStorage.getItem("continueOnPhone") === "false";

    setHasPreference(userPreference);

    if (!isMobile || userPreference) {
      router.push("/");
    }
  }, [router]);

  const handleContinue = () => {
    localStorage.setItem("continueOnPhone", "false");
    router.push("/");
  };

  if (!isMobile || hasPreference) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        Designed for the big screen
      </h1>
      <p className="text-lg text-center mb-8">
        View this site on your laptop or PC for the best experience.
      </p>
      <button
        onClick={handleContinue}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        No, continue on Phone
      </button>
    </div>
  );
}
