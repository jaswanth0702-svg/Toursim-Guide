import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations } from "../data";

function TripPlanner() {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travellers: "2",
    budget: "10000",
  });

  const [plan, setPlan] = useState(null);
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setPlan(null);

    if (form.endDate < form.startDate) {
      setError("Your return date must be on or after your departure date.");
      return;
    }

    const destination = destinations.find(
      (item) => item.id === form.destination
    );

    if (!destination) {
      setError("Please choose a destination.");
      return;
    }

    setPlan({
      ...form,
      destinationName: destination.name,
      estimatedBudget:
        Number(form.budget) * Number(form.travellers),
    });
  }

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">MAKE IT YOUR OWN</span>
          <h1>Plan your perfect trip</h1>
          <p>
            Tell us about your travel preferences to create a simple trip
            outline.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="planner-form" onSubmit={handleSubmit}>
              <h4 className="mb-4">Your travel preferences</h4>

              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label" htmlFor="destination">
                    Destination
                  </label>
                  <select
                    id="destination"
                    className="form-select"
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a destination</option>
                    {destinations.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="startDate">
                    Departure date
                  </label>
                  <input
                    id="startDate"
                    className="form-control"
                    type="date"
                    name="startDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="endDate">
                    Return date
                  </label>
                  <input
                    id="endDate"
                    className="form-control"
                    type="date"
                    name="endDate"
                    min={form.startDate || new Date().toISOString().split("T")[0]}
                    value={form.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="travellers">
                    Number of travellers
                  </label>
                  <input
                    id="travellers"
                    className="form-control"
                    type="number"
                    name="travellers"
                    min="1"
                    max="20"
                    value={form.travellers}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="budget">
                    Budget per person (₹)
                  </label>
                  <input
                    id="budget"
                    className="form-control"
                    type="number"
                    name="budget"
                    min="1"
                    value={form.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {error && <div className="alert alert-danger mt-4">{error}</div>}

              <button className="btn btn-brand w-100 mt-4" type="submit">
                Create My Trip Plan
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </form>

            {plan && (
              <div className="trip-plan-result mt-4">
                <span className="section-eyebrow">YOUR TRIP OUTLINE</span>
                <h3>{plan.destinationName}</h3>

                <p>
                  {plan.startDate} to {plan.endDate}
                </p>

                <p>Travellers: {plan.travellers}</p>

                <h4>
                  Estimated total budget: ₹
                  {plan.estimatedBudget.toLocaleString("en-IN")}
                </h4>

                <p className="small">
                  This is a basic budget outline based on the amount you
                  entered, not a live quotation or confirmed itinerary.
                </p>

                <Link
                  to={`/booking?destination=${encodeURIComponent(plan.destinationName)}`}
                  className="btn btn-brand"
                >
                  Continue to Booking
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TripPlanner;