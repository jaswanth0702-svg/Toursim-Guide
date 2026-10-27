import { useState } from "react";
import { Link } from "react-router-dom";
import { hotels } from "../data";

function Hotels() {
  const [location, setLocation] = useState("All");

  const locations = ["All", ...new Set(hotels.map((hotel) => hotel.location))];

  const filteredHotels =
    location === "All"
      ? hotels
      : hotels.filter((hotel) => hotel.location === location);

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">FIND YOUR STAY</span>
          <h1>Hotels & stays</h1>
          <p>
            Browse sample accommodations for your next destination.
          </p>
        </div>

        <div className="category-filters justify-content-center mb-5">
          {locations.map((item) => (
            <button
              key={item}
              className={`category-button ${
                location === item ? "selected" : ""
              }`}
              onClick={() => setLocation(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredHotels.map((hotel) => (
            <div className="col-md-6 col-lg-4" key={hotel.id}>
              <article className="hotel-card h-100">
                <div className="hotel-card-illustration">
                  <i className="bi bi-building"></i>
                  <span>{hotel.category}</span>
                </div>

                <div className="hotel-card-content">
                  <span className="destination-rating">
                    <i className="bi bi-star-fill me-1"></i>
                    {hotel.rating}
                  </span>

                  <h4 className="mt-3">{hotel.name}</h4>

                  <p>
                    <i className="bi bi-geo-alt me-1"></i>
                    {hotel.location}
                  </p>

                  <div className="hotel-card-footer">
                    <div>
                      <small>Sample rate</small>
                      <h5>
                        ₹{hotel.price.toLocaleString("en-IN")}
                        <small> / night</small>
                      </h5>
                    </div>

                    <Link
                      to={`/booking?destination=${encodeURIComponent(hotel.location)}`}
                      className="btn btn-brand"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <p className="text-center small mt-4">
          These are sample hotel listings. Availability and prices have not
          been verified.
        </p>
      </div>
    </section>
  );
}

export default Hotels;