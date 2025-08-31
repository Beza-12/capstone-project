import React from "react";
import { Link } from "react-router-dom";

// Home component displays the main landing page with hero section and key features
export default function Home() {
  return (
    <section className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-3xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2A4B] mb-6">
          Welcome to the University Student Hub
        </h1>
        {/* Intro Paragraph */}
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop platform for past exams, courses, career guidance, and
          administration info — all in one place.
        </p>
      </div>

      {/* Features Section */}
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6 text-center">
        Features
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        {/* Courses Feature Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            📘 Courses
          </h3>
          <p className="text-gray-600">
            Find detailed information on available programs to help guide your
            academic journey.
          </p>
        </div>

        {/* Careers Feature Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            💼 Careers
          </h3>
          <p className="text-gray-600">
             Discover a wide range of career opportunities and guidance across different fields to help you plan your future path.
          </p>
        </div>

        {/* Past Exams Feature Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            📝 Past Exams
          </h3>
          <p className="text-gray-600">
            Access past exams with answers to help you prepare and succeed.
          </p>
        </div>

        {/* Admin Info Feature Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🏛️ Admin Info</h3>
          <p className="text-gray-600">
            Stay updated with administration rules, guidance, and important
            announcements.
          </p>
        </div>

      </div>
    </section>
  );
}
