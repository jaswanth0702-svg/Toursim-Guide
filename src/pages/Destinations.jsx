import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { destinations } from "../data";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(destinations.map((item) => item.category)),
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch = [
        destination.name,
        destination.country,
        destination.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">FIND YOUR NEXT ESCAPE</span>
          <h1>Explore destinations</h1>
          <p>
            From sunny beaches to mountain escapes, find a destination that
            matches your travel style.
          </p>
        </div>

        <div className="destination-filters">
          <div className="destination-search">
            <i className="bi bi-search"></i>
            <input
              type="search"
              placeholder="Search by destination..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`category-button ${
                  category === item ? "selected" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="results-count mb-4">
          Showing {filteredDestinations.length} destinations
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="row g-4">
            {filteredDestinations.map((destination) => (
              <div className="col-md-6 col-lg-4" key={destination.id}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state text-center">
            <i className="bi bi-search fs-1"></i>
            <h4 className="mt-3">No destinations found</h4>
            <p>Try another destination or choose a different category.</p>
            <button
              className="btn btn-brand"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destinations;