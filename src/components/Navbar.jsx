import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const currentUser = JSON.parse(
    localStorage.getItem("tripnestCurrentUser") || "null"
  );

  // Close the mobile navbar whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("tripnestCurrentUser");
    closeNavbar();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link
          className="navbar-brand fw-bold text-success"
          to="/"
          onClick={closeNavbar}
        >
          🌿 TripNest
        </Link>

        {/* Mobile hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="tripNestNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="tripNestNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/destinations"
                onClick={closeNavbar}
              >
                Destinations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/attractions"
                onClick={closeNavbar}
              >
                Attractions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/packages"
                onClick={closeNavbar}
              >
                Packages
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/hotels"
                onClick={closeNavbar}
              >
                Hotels
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/food-guide"
                onClick={closeNavbar}
              >
                Food Guide
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/trip-planner"
                onClick={closeNavbar}
              >
                Trip Planner
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                onClick={closeNavbar}
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={closeNavbar}
              >
                Contact
              </NavLink>
            </li>

            {/* Logged-in user */}
            {currentUser ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    Hi, {currentUser.name}
                  </span>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link
                  className="btn btn-outline-success me-lg-2"
                  to="/login"
                  onClick={closeNavbar}
                >
                  Login
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;