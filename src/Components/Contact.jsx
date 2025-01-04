import React from "react";

// Contact component to display the contact form and contact information
function Contact() {
  return (
    <div className="contact-page">
      {" "}
      {/* Main container for the contact page */}
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Please reach out to us using the form below
        or contact us directly via email or phone.
      </p>
      <form className="contact-form">
        {" "}
        {/* Form for user input */}
        <div className="form-group">
          {" "}
          {/* Container for name input */}
          <label htmlFor="name">Name</label> {/* Label for name input */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          {" "}
          {/* Container for email input */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          {" "}
          {/* Container for message input */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>{" "}
        {/* Submit button for the form */}
      </form>
      <div className="contact-info">
        {" "}
        {/* Container for contact details */}
        <h2>Contact Details</h2>
        <p>
          <strong>Email:</strong> havenhouse@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +94 123 456 7890
        </p>
        <p>
          <strong>Address:</strong> 123 Haven Street, Dream City, Colombo-10{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
