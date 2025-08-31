import React, { useState } from "react";
 import SearchBar from "../component/SearchBar";

export default function Jobs() {
  
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedDept, setExpandedDept] = useState(null);
  const [fetchedInfo, setFetchedInfo] = useState(null);

  // Job categories with departments and links
  const jobCategories = {
    Technology: {
      "Software Engineering": { 
        description: "Build and manage software systems.", 
        link: "/fetch/software_engineering" // 🔹 fetch from API instead of static link
      },
      "Computer Science": { 
        description: "Develop algorithms, programs, and AI systems.", 
        link: "https://en.wikipedia.org/wiki/Computer_science" // external link
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

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedDept(null);
    setFetchedInfo(null);
  };

  const toggleDept = async (dept, link) => {
    if (expandedDept === dept) {
      setExpandedDept(null);
      setFetchedInfo(null);
      return;
    }

    setExpandedDept(dept);

    // 🔹 If link starts with /fetch/, call Wikipedia API
    if (link.startsWith("/fetch/")) {
      const topic = link.split("/fetch/")[1]; // e.g. "software_engineering"
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`
        );
        const data = await response.json();
        setFetchedInfo(data.extract || "No additional info found.");
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchedInfo("Failed to load extra info.");
      }
    } else {
      setFetchedInfo(null);
    }
  };

  return (
    
    <section className="min-h-screen bg-slate-50 px-6 py-12">
       <SearchBar /> 
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-10">
        Job Categories
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {Object.keys(jobCategories).map((category) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-teal-50 transition"
            >
              {category}
              <span className="text-xl">
                {expandedCategory === category ? "▲" : "▼"}
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
                      className="bg-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                    >
                      <button
                        onClick={() => toggleDept(dept, deptData.link)}
                        className="w-full text-left flex justify-between items-center font-medium text-gray-800"
                      >
                        {dept}
                        <span className="text-lg">
                          {expandedDept === dept ? "▲" : "▼"}
                        </span>
                      </button>

                      {expandedDept === dept && (
                        <div className="mt-2 text-gray-600">
                          <p>{deptData.description}</p>

                          {/* If Wikipedia API fetch */}
                          {deptData.link.startsWith("/fetch/") ? (
                            <div className="mt-2">
                              {fetchedInfo ? (
                                <p className="text-sm text-gray-700">
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
                              target={
                                deptData.link.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              className="text-teal-600 hover:underline mt-1 inline-block"
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
