import { useState } from "react";
import { articles } from "../data";

function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">STORIES FROM THE ROAD</span>
          <h1>The travel journal</h1>
          <p>
            Find inspiration, practical travel tips, and ideas for your next
            adventure.
          </p>
        </div>

        <div className="row g-4">
          {articles.map((article, index) => (
            <div className="col-md-6 col-lg-4" key={article.id}>
              <article className="blog-card h-100">
                <div className={`blog-illustration blog-tone-${index + 1}`}>
                  <i
                    className={`bi ${
                      index === 0
                        ? "bi-map"
                        : index === 1
                          ? "bi-camera"
                          : "bi-backpack"
                    }`}
                  ></i>
                  <span>{article.category}</span>
                </div>

                <div className="blog-card-content">
                  <h4>{article.title}</h4>
                  <p>{article.description}</p>

                  <button
                    className="text-link border-0 bg-transparent p-0"
                    onClick={() => setSelectedArticle(article)}
                  >
                    Read article
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <div
          className="article-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="articleTitle"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="article-close"
              aria-label="Close article"
              onClick={() => setSelectedArticle(null)}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span className="section-eyebrow">
              {selectedArticle.category}
            </span>

            <h2 id="articleTitle" className="mt-2">
              {selectedArticle.title}
            </h2>

            <p className="mt-3">{selectedArticle.description}</p>

            <h5 className="mt-4">A few tips to get started</h5>

            <ul className="article-tips">
              <li>Choose destinations that fit your interests and budget.</li>
              <li>Check travel dates, weather, and local transport options.</li>
              <li>Keep important documents and reservations organised.</li>
              <li>Leave some time to explore places beyond your itinerary.</li>
            </ul>

            <button
              className="btn btn-brand mt-3"
              onClick={() => setSelectedArticle(null)}
            >
              Back to Journal
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;