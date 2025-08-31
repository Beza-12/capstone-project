// src/components/SearchPart.js
import React, { useState } from "react";
import Jobs from "../data/Job.json"; // Import the job data JSON

export default function SearchBar() {
  // State for the search input
  const [query, setQuery] = useState("");
  
  // State for filtered search results
  const [results, setResults] = useState([]);
  
  // State for handling errors or invalid input
  const [error, setError] = useState(null);

  // Function to handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value;

    // Edge Case: Only allow letters, numbers, and spaces
    if (/[^a-zA-Z0-9\s]/.test(value)) {
      setError("Please enter letters and numbers only.");
      return; // Stop processing if invalid input
    } else {
      setError(null); // Clear error if input is valid
    }

    setQuery(value.toLowerCase()); // Save lowercase input for searching

    // Edge Case: If input is empty, clear results
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    // Filter job data by name, category, description, or career path
    const filtered = Jobs.filter(
      (job) =>
        job.name.toLowerCase().includes(value.toLowerCase()) ||
        job.category.toLowerCase().includes(value.toLowerCase()) ||
        job.description.toLowerCase().includes(value.toLowerCase()) ||
        job.careerPath.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered); // Update the results state
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search jobs by name, category, or skills..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />

      {/* Display error message if invalid input */}
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

      {/* Display search results */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((job) => (
            <div
              key={job.id}
              className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Job Name */}
              <h2 className="text-xl font-bold text-teal-700">{job.name}</h2>

              {/* Job Category */}
              <p className="text-sm text-gray-500 mb-1">{job.category}</p>

              {/* Job Description */}
              <p className="text-gray-700 mb-2">{job.description}</p>

              {/* Career Path */}
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Career Path:</span> {job.careerPath}
              </p>

              {/* Learn More link */}
              <a
                href={job.moreInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-teal-600 hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {query && results.length === 0 && !error && (
        <p className="mt-4 text-center text-gray-500">
          No jobs found for "{query}"
        </p>
      )}
    </div>
  );
}
