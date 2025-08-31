import React from "react";
import examsData from "../data/examsData";

function Exams() {
  return (
    <div className="min-h-screen bg-white font-sans px-6 py-12">
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0D2A4B] mb-4">Past Exams</h2>
        <p className="text-lg text-black max-w-xl mx-auto">
         Access comprehensive archive of past examination papers with complete solutions. 
  Practice with real previous tests to enhance your preparation.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examsData.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border border-gray-200 hover:border-gray-300" // Changed hover border
            >
              <h2 className="text-xl font-semibold mb-4 text-[#0D2A4B]">
                {subject.subject}
              </h2>

              <ul className="space-y-3">
                {subject.exams.map((exam, idx) => (
                  <li key={idx}>
                    <a
                      href={exam.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 bg-gray-100 hover:bg-gray-200 text-[#0D2A4B] rounded-xl font-medium transition" // Changed hover to gray
                    >
                      {exam.title}
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