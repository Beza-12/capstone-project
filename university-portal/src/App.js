// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importing all page components
import Home from "./pages/Home";
import Courses from "./pages/courses";
import Exams from "./pages/Exams";
import Jobs from "./pages/Jobs";
import AdminInfo from "./pages/AdminInfo";
import Footer from "./component/Footer";

// ---------------------------
// Error Boundary Component
// ---------------------------
// Catches JavaScript errors in child components, logs them, and displays a fallback UI
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state when an error is encountered
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  // Render fallback UI if error occurs
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-600">
          Something went wrong. Please try refreshing the page.
        </div>
      );
    }
    return this.props.children;
  }
}

// ---------------------------
// Main App Component
// ---------------------------
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-100">
        {/* Navbar */}
        <header className="bg-teal-700 text-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">University Student Hub</h1>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-yellow-300">Home</Link>
              <Link to="/courses" className="hover:text-yellow-300">Courses</Link>
              <Link to="/exams" className="hover:text-yellow-300">Exams</Link>
              <Link to="/jobs" className="hover:text-yellow-300">Jobs</Link>
              <Link to="/admin" className="hover:text-yellow-300">Admin Info</Link>
            </div>
          </nav>
        </header>

        {/* Pages Section with Error Handling */}
        <main className="flex-grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/admin" element={<AdminInfo />} />
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
