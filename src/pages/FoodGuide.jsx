import { useState } from "react";
import { foodGuides } from "../data";

function FoodGuide() {
  const [search, setSearch] = useState("");

  const filteredFood = foodGuides.filter((food) =>
    `${food.name} ${food.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">TASTE THE CULTURE</span>
          <h1>A guide to local food</h1>
          <p>
            Discover regional favourites and experience the flavours of your
            destination.
          </p>
        </div>

        <div className="destination-search food-search mx-auto mb-5">
          <i className="bi bi-search"></i>
          <input
            type="search"
            placeholder="Search dishes or destinations..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="row g-4">
          {filteredFood.map((food) => (
            <div className="col-sm-6 col-lg-3" key={food.id}>
              <article className="food-card h-100">
                <div className="food-icon">
                  <i className={`bi ${food.icon}`}></i>
                </div>

                <span className="section-eyebrow">{food.location}</span>
                <h5>{food.name}</h5>
                <p>{food.description}</p>
              </article>
            </div>
          ))}
        </div>

        {filteredFood.length === 0 && (
          <div className="empty-state text-center mt-4">
            <h4>No dishes found</h4>
            <p>Try searching for another dish or destination.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FoodGuide;