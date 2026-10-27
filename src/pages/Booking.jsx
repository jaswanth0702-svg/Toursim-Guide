import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { destinations } from "../data";

function Booking() {
  const [searchParams] = useSearchParams();

  const initialDestination = searchParams.get("destination") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: initialDestination,
    travelDate: "",
    travellers: "1",
    notes: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!/^\d{10}$/.test(form.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    const selectedDestination = destinations.find(
      (item) => item.name === form.destination
    );

    const bookingRequest = {
      ...form,
      id: `TRIP-${Date.now()}`,
      destination: selectedDestination?.name || form.destination,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const existingRequests = JSON.parse(
      localStorage.getItem("tripnest-booking-requests") || "[]"
    );

    localStorage.setItem(
      "tripnest-booking-requests",
      JSON.stringify([...existingRequests, bookingRequest])
    );

    setMessage(
      `Your demo booking request has been saved. Reference: ${bookingRequest.id}`
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      travellers: "1",
      notes: "",
    });
  }

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">LET'S MAKE IT HAPPEN</span>
          <h1>Plan your next getaway</h1>
          <p>
            Complete the form to save a sample travel booking request.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="planner-form" onSubmit={handleSubmit}>
              <h4 className="mb-4">Traveller information</h4>

              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    className="form-control"
                    type="tel"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    required
                  />
                </div>

                <div className="col-md-6">
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
                    <option value="">Choose destination</option>
                    {destinations.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="travelDate">
                    Travel date
                  </label>
                  <input
                    id="travelDate"
                    className="form-control"
                    type="date"
                    name="travelDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={form.travelDate}
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

                <div className="col-12">
                  <label className="form-label" htmlFor="notes">
                    Additional requests
                  </label>
                  <textarea
                    id="notes"
                    className="form-control"
                    name="notes"
                    rows="4"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your travel preferences..."
                  ></textarea>
                </div>
              </div>

              {error && <div className="alert alert-danger mt-4">{error}</div>}

              {message && (
                <div className="alert alert-success mt-4">{message}</div>
              )}

              <button className="btn btn-brand w-100 mt-4" type="submit">
                Save Booking Request
                <i className="bi bi-check2-circle ms-2"></i>
              </button>

              <p className="small mt-3 mb-0">
                Demo only: requests are stored in this browser's local storage.
                No payment or actual reservation is made.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;