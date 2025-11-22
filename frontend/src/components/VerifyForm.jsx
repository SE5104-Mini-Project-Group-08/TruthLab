import React, { useState } from "react";
import OptionButton from "./OptionButton";
import VerificationResult from "./VerificationResult";
import "./css/verifyform.css";
import { Newspaper, TypeOutline, Link } from "lucide-react";

function VerifyForm() {
  const [selected, setSelected] = useState("URL");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(null);

  const handleVerify = () => {
    const randomScore = Math.floor(Math.random() * 101); // Simulate a random score
    setScore(randomScore);
    setShowResult(true);
  };

  const handleVerifyAnother = () => {
    setShowResult(false);
    setScore(null);
  };

  return (
    <div className="formCard">
      {!showResult ? (
        <>
          <p className="text-sm text-gray-600 mb-4">
            What would you like to verify?
          </p>

          <div className="flex gap-8 justify-between mb-6">
            <OptionButton
              label="Full Article"
              active={selected === "Full Article"}
              onClick={() => setSelected("Full Article")}
              icon={<Newspaper />}
            />
            <OptionButton
              label="Headline"
              active={selected === "Headline"}
              onClick={() => setSelected("Headline")}
              icon={<TypeOutline />}
            />
            <OptionButton
              label="URL"
              active={selected === "URL"}
              onClick={() => setSelected("URL")}
              icon={<Link />}
            />
          </div>

          <div className="verifySection">
            <label className="block text-sm mb-2 text-gray-700">
              Enter the {selected.toLowerCase()}:
            </label>

            {selected === "Full Article" ? (
              <textarea
                placeholder="Enter the full article..."
                className="w-9/10 border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="15"
              />
            ) : (
              <input
                type="text"
                placeholder={`Enter the ${selected.toLowerCase()}...`}
                className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            )}

            <button
              onClick={handleVerify}
              className="bg-teal-500 text-white px-5 py-2 rounded hover:bg-teal-600"
            >
              Verify Content
            </button>
          </div>
        </>
      ) : (
        <VerificationResult
          score={score}
          contentType={selected} // ✅ Pass the selected type here
          onVerifyAnother={handleVerifyAnother}
        />
      )}
    </div>
  );
}

export default VerifyForm;
