// src/pages/AdminInfo.js
import React from "react";

// AdminInfo component displays a list of administrative contacts
export default function AdminInfo() {
  // Static array of admin details
  const admins = [
    {
      name: "Bezawit Haile",
      role: "Project Admin",
      email: "bezawit@example.com",
      phone: "+251 912 345 678",
    },
    {
      name: "John Doe",
      role: "Exam Coordinator",
      email: "john@example.com",
      phone: "+251 987 654 321",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      {/* Page Title */}
<h1 className="text-3xl font-bold text-[#0D2A4B] mt-10 mb-6 text-center">
  Admin Information
      </h1>

      {/* Admin Cards Grid */}
      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
        {admins.map((admin, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Admin Name */}
            <h2 className="text-xl font-semibold text-gray-800">{admin.name}</h2>

            {/* Admin Role */}
            <p className="text-teal-600">{admin.role}</p>

            {/* Admin Email */}
            <p className="text-gray-600 mt-2">{admin.email}</p>

            {/* Admin Phone */}
            <p className="text-gray-600">{admin.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
