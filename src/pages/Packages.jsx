import { Link } from "react-router-dom";
import { packages } from "../data";

function Packages() {
  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">TRAVEL YOUR WAY</span>
          <h1>Explore tour packages</h1>
          <p>
            Find inspiration for your next holiday with our sample travel
            packages.
          </p>
        </div>

        <div className="row g-4">
          {packages.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <article className="package-card h-100">
                <div className="package-card-top">
                  <span className="package-icon">
                    <i className="bi bi-airplane"></i>
                  </span>
                  <span className="package-tag">Featured trip</span>
                </div>

                <span className="section-eyebrow">{item.destination}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>

                <div className="package-duration">
                  <i className="bi bi-calendar-week me-2"></i>
                  {item.duration}
                </div>

                <div className="package-price">
                  <small>Starting from</small>
                  <h4>
                    ₹{item.price.toLocaleString("en-IN")}
                    <span> / person</span>
                  </h4>
                </div>

                <Link
                  to={`/booking?destination=${encodeURIComponent(item.destination)}`}
                  className="btn btn-brand w-100"
                >
                  View Booking Options
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </article>
            </div>
          ))}
        </div>

        <p className="text-center small mt-4">
          Package prices are illustrative and do not represent confirmed offers.
        </p>
      </div>
    </section>
  );
}

export default Packages;