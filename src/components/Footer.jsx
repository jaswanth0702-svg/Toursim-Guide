import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-brand">
              <i className="bi bi-compass-fill me-2"></i>
              Trip<span>Nest</span>
            </Link>

            <p className="footer-description mt-3">
              Discover beautiful destinations, explore new cultures, and plan
              memorable journeys with TripNest.
            </p>

            <div className="social-links d-flex gap-3 mt-4">
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.youtube.com/" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="footer-heading">Explore</h6>
            <ul className="footer-links">
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/attractions">Attractions</Link></li>
              <li><Link to="/packages">Tour Packages</Link></li>
              <li><Link to="/hotels">Hotels</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Plan Your Trip</h6>
            <ul className="footer-links">
              <li><Link to="/trip-planner">Trip Planner</Link></li>
              <li><Link to="/booking">Book a Trip</Link></li>
              <li><Link to="/food-guide">Food Guide</Link></li>
              <li><Link to="/blog">Travel Blog</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-heading">Get in Touch</h6>
            <p className="footer-description">
              Need help planning your next adventure?
            </p>
            <Link to="/contact" className="footer-contact-link">
              Contact our team <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2 py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} TripNest. All rights reserved.
          </p>
          <p className="mb-0">Made for travellers, by travel lovers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;