import { Link, useParams } from "react-router-dom";
import { destinations } from "../data";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === id);

  if (!destination) {
    return (
      <section className="section-padding text-center">
        <div className="container">
          <h1>Destination not found</h1>
          <p>Choose another destination to continue exploring.</p>
          <Link to="/destinations" className="btn btn-brand">
            Browse Destinations
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className="destination-detail-hero"
        style={{ backgroundImage: `url("${destination.image}")` }}
      >
        <div className="destination-detail-overlay"></div>

        <div className="container destination-detail-content">
          <Link to="/destinations" className="detail-back-link">
            <i className="bi bi-arrow-left me-2"></i>
            All destinations
          </Link>

          <span className="detail-category">{destination.category}</span>
          <h1>{destination.name}</h1>
          <p>
            <i className="bi bi-geo-alt me-2"></i>
            {destination.country}
            <span className="mx-3">·</span>
            <i className="bi bi-star-fill me-1"></i>
            {destination.rating} rating
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="section-eyebrow">ABOUT THE DESTINATION</span>
              <h2 className="detail-heading">
                Welcome to {destination.name}
              </h2>

              <p className="detail-description">
                {destination.description}
              </p>

              <h4 className="mt-5 mb-4">Places you shouldn't miss</h4>

              <div className="row g-3">
                {destination.attractions.map((attraction, index) => (
                  <div className="col-sm-6" key={attraction}>
                    <div className="attraction-list-item">
                      <span className="attraction-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{attraction}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="detail-booking-card">
                <span className="section-eyebrow">START YOUR JOURNEY</span>
                <h3>
                  ₹{destination.price.toLocaleString("en-IN")}
                  <small> / person</small>
                </h3>

                <p>
                  Explore {destination.name} and create memories worth keeping.
                </p>

                <div className="detail-info-row">
                  <i className="bi bi-calendar3"></i>
                  <span>Suggested duration</span>
                  <strong>{destination.duration}</strong>
                </div>

                <div className="detail-info-row">
                  <i className="bi bi-star"></i>
                  <span>Traveller rating</span>
                  <strong>{destination.rating}/5</strong>
                </div>

                <Link
                  to={`/booking?destination=${encodeURIComponent(destination.name)}`}
                  className="btn btn-brand w-100 mt-4"
                >
                  Plan This Trip
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <p className="detail-disclaimer">
                  Displayed prices are illustrative starting prices, not live
                  booking quotes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationDetails;