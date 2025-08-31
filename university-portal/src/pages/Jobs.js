import React, { useState } from "react";
import SearchBar from "../component/SearchBar";

// Jobs component displays job categories, departments, and detailed descriptions
export default function Jobs() {
  // State to track which job category is expanded
  const [expandedCategory, setExpandedCategory] = useState(null);
  // State to track which department is expanded
  const [expandedDept, setExpandedDept] = useState(null);
  // State to store fetched info from Wikipedia API
  const [fetchedInfo, setFetchedInfo] = useState(null);

  // Object containing job categories, departments, descriptions, and links
  const jobCategories = {
    Technology: {
      "Software Engineering": { 
        description: "Build and manage software systems.", 
        link: "/fetch/software_engineering" // Fetch extra info dynamically
      },
      "Computer Science": { 
        description: "Develop algorithms, programs, and AI systems.", 
        link: "https://en.wikipedia.org/wiki/Computer_science"
      },
    },
    "Medical/Health": {
      Doctor: { 
        description: "Opportunities in hospitals and clinics.", 
        link: "/jobs/doctor" 
      },
      Nursing: { 
        description: "Work as a nurse in various health settings.", 
        link: "https://en.wikipedia.org/wiki/Nursing" 
      },
    },
    Social: {
      Law: { 
        description: "Legal professions and consultancy opportunities.", 
        link: "/jobs/law" 
      },
      "Social Work": { 
        description: "Help communities and individuals.", 
        link: "https://en.wikipedia.org/wiki/Social_work" 
      },
    },
    Engineering: {
      Logistics: { 
        description: "Manage supply chains and operations.", 
        link: "/jobs/logistics" 
      },
      "Civil Engineering": { 
        description: "Work on building infrastructure projects.", 
        link: "https://en.wikipedia.org/wiki/Civil_engineering" 
      },
    },
  };

  // Function to toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category); // Collapse if already open
    setExpandedDept(null); // Reset department state
    setFetchedInfo(null); // Reset fetched info
  };

  // Function to toggle department expansion and fetch data if needed
  const toggleDept = async (dept, link) => {
    if (expandedDept === dept) {
      setExpandedDept(null);
      setFetchedInfo(null);
      return;
    }

    setExpandedDept(dept);

    // Fetch extra info for dynamic links starting with /fetch/
    if (link.startsWith("/fetch/")) {
      const topic = link.split("/fetch/")[1];
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`
        );
        const data = await response.json();
        setFetchedInfo(data.extract || "No additional info found.");
      } catch (error) {
        setFetchedInfo("Failed to load extra info.");
      }
    } else {
      setFetchedInfo(null);
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      {/* Search Bar */}
      <SearchBar />

      {/* Intro Paragraph */}
      <p className="text-2xl font-normal text-[#0D2A4B] text-center mb-10">      
        Discover detailed job descriptions, required qualifications, and potential career trajectories 
        to help you make informed decisions about your professional future.
      </p>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#0D2A4B] text-center mb-10">
        Job Categories
      </h1>

      {/* Job Categories List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {Object.keys(jobCategories).map((category) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-[#0D2A4B] hover:bg-gray-50 transition"
            >
              {category}
              <span className="text-xl text-[#0D2A4B]">
                {expandedCategory === category ? "▲" : "▼"} {/* Arrow indicator */}
              </span>
            </button>

            {/* Departments Accordion */}
            {expandedCategory === category && (
              <div className="px-6 py-4 space-y-3">
                {Object.keys(jobCategories[category]).map((dept) => {
                  const deptData = jobCategories[category][dept];
                  return (
                    <div
                      key={dept}
                      className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
                    >
                      {/* Department Header */}
                      <button
                        onClick={() => toggleDept(dept, deptData.link)}
                        className="w-full text-left flex justify-between items-center font-medium text-[#0D2A4B]"
                      >
                        {dept}
                        <span className="text-lg text-[#0D2A4B]">
                          {expandedDept === dept ? "▲" : "▼"}
                        </span>
                      </button>

                      {/* Department Description & Extra Info */}
                      {expandedDept === dept && (
                        <div className="mt-2 text-black">
                          <p>{deptData.description}</p>

                          {/* If Wikipedia API fetch */}
                          {deptData.link.startsWith("/fetch/") ? (
                            <div className="mt-2">
                              {fetchedInfo ? (
                                <p className="text-sm text-black">
                                  {fetchedInfo}
                                </p>
                              ) : (
                                <p className="text-sm text-gray-400">
                                  Loading info...
                                </p>
                              )}
                            </div>
                          ) : (
                            <a
                              href={deptData.link}
                              target={deptData.link.startsWith("http") ? "_blank" : "_self"}
                              className="text-[#0D2A4B] hover:underline mt-1 inline-block"
                            >
                              Learn More
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
