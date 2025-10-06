import React, { useState } from "react";
import { AiOutlineFile, AiOutlineCheckCircle } from "react-icons/ai";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setMessage("");
  };

  const handleUpload = () => {
    if (file) {
      setMessage(`File "${file.name}" is ready for analysis!`);
      // Add your API call or AI analysis logic here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg relative overflow-hidden">
        {/* Decorative Image */}
        <img
          src="https://ik.imagekit.io/edtechdigit/usaii/content/images/the-15-most-popular-ai-tools-in-2023.jpg"
          alt="AI Illustration"
          className="w-full h-40 object-cover rounded-2xl mb-6"
        />

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          AI-Powered Compliance Checker for Contracts
        </h2>

        {/* Choose File */}
        <label className="flex flex-col items-center justify-center bg-blue-500 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
          Choose Contract File
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* File Info */}
        {file && (
          <div className="bg-blue-50 text-gray-800 rounded-xl p-5 mt-4 text-sm flex flex-col gap-2 border border-blue-200 shadow-inner">
            <p className="flex items-center gap-2">
              <AiOutlineFile className="text-blue-500 text-xl" />
              <strong>Name:</strong> {file.name}
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineFile className="text-green-500 text-xl" />
              <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineFile className="text-purple-500 text-xl" />
              <strong>Type:</strong> {file.type || "N/A"}
            </p>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file}
          className={`w-full mt-6 py-3 rounded-lg text-white font-semibold transition duration-300 transform ${
            file
              ? "bg-green-600 hover:bg-green-700 hover:scale-105"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Upload & Analyze
        </button>

        {/* Status Message */}
        {message && (
          <p className="mt-4 text-green-600 font-medium text-center flex items-center justify-center gap-2">
            <AiOutlineCheckCircle className="text-xl" />
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
