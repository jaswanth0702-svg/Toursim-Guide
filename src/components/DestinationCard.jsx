import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <article className="destination-card h-100">
      <Link
        to={`/destinations/${destination.id}`}
        className="destination-image-link"
        aria-label={`Explore ${destination.name}`}
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
          loading="lazy"
        />

        <span className="destination-category">
          {destination.category}
        </span>
      </Link>

      <div className="destination-card-body">
        <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
          <span className="destination-location">
            <i className="bi bi-geo-alt me-1"></i>
            {destination.country}
          </span>

          <span className="destination-rating">
            <i className="bi bi-star-fill me-1"></i>
            {destination.rating}
          </span>
        </div>

        <h5>{destination.name}</h5>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-card-footer">
          <div>
            <small>Starting from</small>
            <div className="destination-price">
              ₹{destination.price.toLocaleString("en-IN")}
              <span> / person</span>
            </div>
          </div>

          <Link
            to={`/destinations/${destination.id}`}
            className="card-arrow"
            aria-label={`View ${destination.name}`}
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;