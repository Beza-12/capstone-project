import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/courses";
import Exams from "./pages/Exams";
import Jobs from "./pages/Jobs";
import AdminInfo from "./pages/AdminInfo";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";

import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Modern Header */}
        <header className="app-header">
          <div className="header-content">
            <div className="logo-section">
              <h1 className="logo">University Student Hub</h1>
              <p className="tagline">Empowering students for academic success</p>
            </div>
            <nav className="navigation">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/courses" className="nav-link">Courses</Link>
              <Link to="/exams" className="nav-link">Exams</Link>
              <Link to="/jobs" className="nav-link">Careers</Link>
              <Link to="/admin" className="nav-link">Admin</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
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

        {/* Enhanced Footer */}
        <Footer />
      </div>
    </Router>
  );
}