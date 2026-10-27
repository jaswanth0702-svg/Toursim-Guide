import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const existingMessages = JSON.parse(
      localStorage.getItem("tripnest-contact-messages") || "[]"
    );

    localStorage.setItem(
      "tripnest-contact-messages",
      JSON.stringify([
        ...existingMessages,
        {
          ...form,
          id: Date.now(),
          createdAt: new Date().toISOString(),
        },
      ])
    );

    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <section className="section-padding page-background">
      <div className="container">
        <div className="page-intro">
          <span className="section-eyebrow">WE'RE HERE TO HELP</span>
          <h1>Let's talk travel</h1>
          <p>
            Have a question or need help planning your journey? Send us a
            message.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-panel h-100">
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h3>Let's plan something amazing.</h3>

              <p>
                Share your travel ideas with us. We're happy to help you explore
                the possibilities.
              </p>

              <div className="contact-detail">
                <i className="bi bi-compass"></i>
                <div>
                  <h6>Explore destinations</h6>
                  <p>Discover places for your next adventure.</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-calendar-check"></i>
                <div>
                  <h6>Plan your journey</h6>
                  <p>Organise travel dates and preferences.</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="bi bi-chat-dots"></i>
                <div>
                  <h6>Send an enquiry</h6>
                  <p>Use the form to share your questions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="planner-form h-100" onSubmit={handleSubmit}>
              <h4 className="mb-4">Send us a message</h4>

              {success && (
                <div className="alert alert-success">
                  Your message has been saved in this browser.
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contactName" className="form-label">
                    Your name
                  </label>
                  <input
                    id="contactName"
                    className="form-control"
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="contactEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    id="contactEmail"
                    className="form-control"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="contactSubject"
                    className="form-control"
                    value={form.subject}
                    onChange={(event) =>
                      setForm({ ...form, subject: event.target.value })
                    }
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contactMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    className="form-control"
                    rows="5"
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-brand mt-4">
                Send Message
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

              <p className="small mt-3 mb-0">
                Demo form: messages are saved locally in this browser. They
                are not sent to an email address or server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;