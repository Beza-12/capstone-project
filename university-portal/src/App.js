import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Routing imports
import Home from "./pages/Home"; // Home page component
import Courses from "./pages/courses"; // Courses page component
import Exams from "./pages/Exams"; // Exams page component
import Jobs from "./pages/Jobs"; // Jobs/Careers page component
import AdminInfo from "./pages/AdminInfo"; // Admin information page
import Footer from "./component/Footer"; // Footer component
import SearchBar from "./component/SearchBar"; // Search bar component (if used in pages)

import "./App.css"; // App-wide CSS styles

// ErrorBoundary component to catch runtime errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Track if an error has occurred
  }

  // Update state if an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details for debugging
  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Display fallback UI if an error occurs
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }
    // Render child components if no error
    return this.props.children;
  }
}

// Main App component
export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header Section */}
        <header className="app-header">
          <div className="header-content">
            {/* Logo and tagline */}
            <div className="logo-section">
              <h1 className="logo">University Student Hub</h1>
              <p className="tagline">Empowering students for academic success</p>
            </div>

            {/* Navigation Menu */}
            <nav className="navigation">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
              <Link to="/exams" className="nav-link">Exams</Link>
              <Link to="/jobs" className="nav-link">Careers</Link>
              <Link to="/admin" className="nav-link">Admin</Link>
            </nav>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              {/* Define routes for each page */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/admin" element={<AdminInfo />} />
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}
