import React, { useState } from 'react';
import BACKEND_URL from '../config';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    try {
      const res = await fetch(BACKEND_URL+ '/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="title">
        <h1>The Mighty Mouser</h1>
        <h3>A Pet Store Dedicated to the Mighty Barn Cat</h3>
      </div>

      <div className="container1 container-fluid d-flex justify-content-center align-items-center py-5">
        <div className="container">
          <div className="containertext p-4 mx-auto">
            <div className="row align-items-center justify-content-center">
              <h3 style={{ color: 'white' }}>Questions? We’re Here to Help! Contact Us:</h3>

              {/* Left Column */}
              <div className="col-md-6 text-light text-start p-3">
                <h5>
                  <p>At The Mighty Mouser, we’re passionate about helping you provide the best care for your cats.</p>
                  <p><strong>Get in Touch:</strong> Fill out the form, and we’ll get back to you as soon as possible.</p>
                  <p>Whether you have questions about barn cats, need advice on setting up a safe space, or want to learn more about our products, we’d love to hear from you!</p>
                </h5>
                <p><strong>📍 Visit Us:</strong><br /> 237 Harvey Rd <br /> Kingston, TN 37763</p>
                <p><strong>📞 Call or Text:</strong> (865)376-4100</p>
                <p><strong>📧 Email:</strong> admin@barncat.org</p>
                <p><strong>🐾 Follow Us:</strong> Stay connected for tips, special offers, and barn cat success stories!</p>
              </div>

              {/* Right Column: Contact Form */}
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="form-container p-4 shadow-lg border-dark" style={{ maxWidth: 400, width: '100%' }}>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        id="message"
                        name="message"
                        cols={30}
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button className="btn-1 btn-primary" type="submit">Send</button>
                    {submitted && <p className="text-success mt-3">Message sent successfully!</p>}
                    {error && <p className="text-danger mt-3">{error}</p>}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
