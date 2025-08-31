// src/pages/Courses.js
import React, { useState } from "react";

export default function Courses() {
  // State to track which department is currently expanded
  const [expandedDept, setExpandedDept] = useState(null);

  // Object containing departments and their respective courses with descriptions
  const departments = {
    "Computer Science": [
      { name: "Data Structures", description: "Learn how to organize and store data efficiently." },
      { name: "Algorithms", description: "Understand step-by-step problem solving techniques." },
      { name: "Web Development", description: "Build interactive websites and web apps." },
      { name: "Databases", description: "Learn how to manage and use databases effectively." },
      { name: "Calculus", description:"Learn how calculus helps understand changes, optimize algorithms, and support programming in graphics, AI, and simulations." },
    ],
    "Software Engineering": [
      { name: "Software Design", description: "Learn how to plan and design software systems." },
      { name: "Testing & QA", description: "Ensure software works correctly through testing." },
      { name: "Project Management", description: "Learn how to manage software projects effectively from start to finish." },
      { name: "Database Systems", description: "Understand how to store, retrieve, and manage data efficiently." },
    ],
    Health: [
      { name: "Anatomy", description: "Study the structure of the human body." },
      { name: "Physiology", description: "Learn how the human body functions." },
      { name: "Biochemistry", description: "Understand the chemical processes in the body." },
      { name: "Pathology", description: "Learn about diseases and how they affect the body." },
      { name: "Pharmacology", description: "Study how medicines work and how to use them safely." },
    ],
    Statistics: [
      { name: "Probability", description: "Learn how to measure chances and risks." },
      { name: "Data Analysis", description: "Analyze data to make meaningful conclusions." },
      { name: "Statistical Inference", description: "Learn how to make predictions from data." },
      { name: "Regression Analysis", description: "Understand relationships between variables." },
    ],
    Logistics: [
      { name: "Supply Chain Management", description: "Understand how goods move efficiently." },
      { name: "Operations Planning", description: "Plan and manage resources effectively." },
      { name: "Inventory Management", description: "Learn to control and track stock levels." },
      { name: "Transportation Management", description: "Manage the movement of goods safely and on time." },
    ],
    Law: [
      { name: "Constitutional Law", description: "Study the laws that govern the country." },
      { name: "Criminal Law", description: "Learn rules about crimes and punishments." },
      { name: "International Law", description: "Study laws between countries and global rules." },
    ],
  };

  // Function to toggle department expansion
  const toggleDept = (dept) => {
    setExpandedDept(expandedDept === dept ? null : dept);
  };

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      {/* Page Title */}
      <p className="text-lg text-black max-w-xl mx-auto mb-8">
  Access comprehensive archive of past examination papers with complete solutions. 
  Practice with real previous tests to enhance your preparation.
</p>
<h1 className="text-3xl font-bold text-[#0D2A4B] mt-10 mb-6 text-center">    
     Departments
      </h1>

      {/* Departments List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {Object.keys(departments).map((dept) => (
          <div key={dept} className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Department Header */}
            <button
              onClick={() => toggleDept(dept)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-teal-50 transition"
            >
              {dept}
              <span className="text-xl">{expandedDept === dept ? "▲" : "▼"}</span>
            </button>

            {/* Courses Accordion */}
            {expandedDept === dept && (
              <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments[dept].map((course) => (
                  <div
                    key={course.name}
                    className="bg-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    {/* Course Name */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
                    {/* Course Description */}
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
