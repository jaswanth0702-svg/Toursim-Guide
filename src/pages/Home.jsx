import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data";
import DestinationCard from "../components/DestinationCard";

function Home() {
  const [search, setSearch] = useState("");

  const popularDestinations = destinations.slice(0, 3);

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      window.location.href = `/destinations?search=${encodeURIComponent(query)}`;
    } else {
      window.location.href = "/destinations";
    }
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <i className="bi bi-globe-asia-australia me-2"></i>
              YOUR NEXT ADVENTURE STARTS HERE
            </span>

            <h1>
              Discover places.
              <br />
              <span>Create memories.</span>
            </h1>

            <p>
              Find beautiful destinations, discover unique experiences, and
              plan your next unforgettable journey with TripNest.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to="/destinations" className="btn btn-brand btn-lg">
                Explore Destinations
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>

              <Link to="/trip-planner" className="btn btn-hero-outline btn-lg">
                <i className="bi bi-map me-2"></i>
                Plan My Trip
              </Link>
            </div>

            <div className="hero-stats d-flex flex-wrap gap-4 mt-5">
              <div>
                <strong>50+</strong>
                <span>Places to explore</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Travel experiences</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Adventure spirit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-search-wrap">
          <form className="hero-search container" onSubmit={handleSearch}>
            <div className="hero-search-field">
              <i className="bi bi-geo-alt"></i>
              <div>
                <label htmlFor="destinationSearch">Where to?</label>
                <input
                  id="destinationSearch"
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>

            <div className="hero-search-note">
              <i className="bi bi-compass"></i>
              <span>Find your next favourite place</span>
            </div>

            <button type="submit" className="btn btn-brand search-button">
              Search <i className="bi bi-search ms-2"></i>
            </button>
          </form>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">HANDPICKED FOR YOU</span>
              <h2>Popular destinations</h2>
              <p>Explore some of India's most memorable travel destinations.</p>
            </div>

            <Link to="/destinations" className="text-link">
              View all destinations
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>

          <div className="row g-4">
            {popularDestinations.map((destination) => (
              <div className="col-md-6 col-lg-4" key={destination.id}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section-padding">
        <div className="container">
          <div className="section-header text-center">
            <div>
              <span className="section-eyebrow">THE TRIPNEST DIFFERENCE</span>
              <h2>Travel made simple</h2>
              <p>Everything you need to start planning your next adventure.</p>
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-compass"></i>
                </div>
                <h5>Discover places</h5>
                <p>
                  Explore destinations, attractions, and experiences that
                  inspire your next journey.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-calendar2-check"></i>
                </div>
                <h5>Plan with ease</h5>
                <p>
                  Organise your travel dates, budget, and preferences in one
                  convenient place.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-backpack"></i>
                </div>
                <h5>Travel your way</h5>
                <p>
                  Find inspiration for solo trips, family holidays, and
                  unforgettable adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="section-eyebrow">YOUR JOURNEY AWAITS</span>
              <h2>Where will you go next?</h2>
              <p className="mb-0">
                Start planning a trip that you'll remember forever.
              </p>
            </div>

            <Link to="/trip-planner" className="btn btn-light btn-lg">
              Plan Your Trip
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;