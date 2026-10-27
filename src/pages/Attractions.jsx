import { Link } from "react-router-dom";
import { destinations } from "../data";

const attractionImages = {
  Charminar:
    "https://i.pinimg.com/736x/6f/65/be/6f65be65df7d422493344a00b97ad6cb.jpg",
  "Ramoji Film City":
    "https://www.travelure.in/wp-content/uploads/2022/03/Ramoji-Header-1.jpg",
  "Golconda Fort":
    "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/bc41dd3373a7207df970a1b94fcb6377d3d3984b117fc8dc98f7147c3a7b029f.png",
  "Hussain Sagar":
    "https://i.pinimg.com/736x/79/ce/cf/79cecf4719ec3f2e7cc19797d0015948.jpg",
  "Alleppey Backwaters":
    "https://media.istockphoto.com/id/1017900834/photo/houseboats-on-the-backwaters-of-kerala-in-alappuzha.jpg?s=612x612&w=0&k=20&c=4PV5DImAWxw0I218zHEQJBoGdO5RPhnlrGrlW86mgB8=",
  Munnar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAHXNj4XFmmoU3j4fkXPiX0RywRIcDpcSDYBnsGPdXmx9fb4je3OrMnDR&s=10",
  "Solang Valley":
    "https://hblimg.mmtcdn.com/content/hubble/img/images/mmt/activities/m_Solang%20Valley-1_l_371_557.jpg?im=Resize=(412,347.56)",
  "Hadimba Temple":
    "https://img.veenaworld.com/wp-content/uploads/2018/06/Hadimba_Devi_Mandir.jpg",
  "Old Manali":
    "https://thumbs.dreamstime.com/b/old-manali-quiet-little-settlement-located-km-new-town-home-to-backpacker-hippie-travel-crowd-224776889.jpg",
  "Rohtang Pass":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvrJZjkA5E9BZmbeMw-1tXop-zsV35yGVAr1zDVUcyQ2JyiHOs4Oql14&s=10",
  "Kovalam Beach":
    "https://media.istockphoto.com/id/512293088/photo/lighthouse-on-the-cliff-in-kovalam-beach.jpg?s=612x612&w=0&k=20&c=bcT38KbfguRr13iqoG9aE9w7Np4stdsVmddxsnosQgg=",
  "Baga Beach":
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
  "Fort Aguada":
    "https://s7ap1.scene7.com/is/image/incredibleindia/fort-aguada-goa-11-musthead-hero?qlt=82&ts=1742184865719",
  "Basilica of Bom Jesus":
    "https://t3.ftcdn.net/jpg/03/62/17/20/360_F_362172040_ux7I8LhLOcMhYgGgXiAKD5l16qBrrl2c.jpg",
  "Hawa Mahal":
    "https://media.istockphoto.com/id/903877840/photo/the-crowd-and-vehicles-in-front-of-hawa-mahal.jpg?s=612x612&w=0&k=20&c=OB7q3UQsf0vpcno_6-6WLFhp3Ugota3B5IH3WdFYhUY=",
  "Amber Fort":
    "https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972",
  "City Palace":
    "https://media.istockphoto.com/id/514102692/photo/udaipur-city-palace-in-rajasthan-state-of-india.jpg?s=612x612&w=0&k=20&c=bYRDPOuf6nFgghl6VAnCn__22SFyu_atC_fiSCzVNtY=",
  "Jantar Mantar":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6bZv3MoTpbmq-0uY6zfTXDrmV2KaojAwnJlNNkmZXw1KUbjaFY93Ojt7&s=10",
  "Dudhsagar Falls":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXPhLSgD7Pq7cNwIb78YlFOoQFn0es1_gtewQIGZ801X45jliNCMG001J&s=10",
  "Taj Mahal":
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
  "Agra Fort":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAb1IEWVhTX-PTXO1YpnTCg_vycd2VPVuKUijogw2hJvG5N33oITpVHUkC&s=10",
  "Mehtab Bagh":
    "https://www.tourmyindia.com/socialimg/mehtab-bagh-agra.jpg",
  "Fatehpur Sikri":
    "https://www.airpano.com/files/fatehpur_sikri_01_big.jpg",
};

function Attractions() {
  const attractions = destinations.flatMap((destination) =>
    destination.attractions.map((name) => ({
      name,
      destination: destination.name,
      destinationId: destination.id,
      image: attractionImages[name] || destination.image,
      category: destination.category,
    }))
  );

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">
            EXPERIENCES THAT INSPIRE
          </span>

          <h1>Discover Attractions</h1>

          <p>
            Explore iconic landmarks, beautiful landscapes, and cultural
            highlights across India.
          </p>
        </div>

        <div className="row g-4">
          {attractions.map((item, index) => (
            <div
              className="col-sm-6 col-lg-4"
              key={`${item.destinationId}-${item.name}-${index}`}
            >
              <article className="experience-card">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/800x500/e5e7eb/374151?text=Image+Unavailable";
                  }}
                />

                <div className="experience-card-content">
                  <span className="section-eyebrow">
                    {item.category}
                  </span>

                  <h5>{item.name}</h5>

                  <p>
                    <i className="bi bi-geo-alt me-1"></i>
                    {item.destination}
                  </p>

                  <Link
                    to={`/destinations/${item.destinationId}`}
                    className="text-link"
                  >
                    Explore destination
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Attractions;