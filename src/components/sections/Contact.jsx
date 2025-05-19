import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-intro">
          <h2>Contact Us</h2>
          <p>Get in touch with our team to learn more about how eBdesk can help your organization unlock the power of data.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" className="form-input" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label className="form-label">Company</label>
              <input type="text" className="form-input" placeholder="Your company" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;