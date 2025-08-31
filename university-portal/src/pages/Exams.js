import React from "react";
import examsData from "../data/examsData"; // Import exam data (JSON or JS array)

function Exams() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans px-6 py-12">
      
      {/* Page Header Section */}
      <section className="text-center mb-16">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-teal-700 mb-4">Past Exams</h2>
        {/* Description */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Access previous exams for all your courses. Click below to view the exam.
        </p>
      </section>

      {/* Exams Grid Section */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop through each subject in examsData */}
          {examsData.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {/* Subject Title */}
              <h2 className="text-xl font-semibold mb-4 text-teal-700">
                {subject.subject}
              </h2>

              {/* List of Exams for the subject */}
              <ul className="space-y-3">
                {subject.exams.map((exam, idx) => (
                  <li key={idx}>
                    {/* Exam Link */}
                    <a
                      href={exam.file} // Path to PDF or exam file
                      target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security for external links
                      className="block px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-xl font-medium transition"
                    >
                      {exam.title} {/* Exam Name */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Exams;
