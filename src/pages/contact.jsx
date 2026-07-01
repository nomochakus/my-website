import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container">
      <h1 className="page-title">Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <div className="info-item">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>320 Rissik Street, SunnySide, Pretoria, South Africa</p>
            </div>
          </div>
          <div className="info-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>nomochakus@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+27 74 434 6390</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <div>
              <strong>Working Hours</strong>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="signup-container">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
