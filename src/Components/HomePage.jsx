import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SearchForm from './SearchForm.jsx';

function HomePage({ onSearch }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "Search Now" button click
  const handleSearchNowClick = () => {
    navigate('/favorites'); // Navigate to the /favorites route
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Property</h1>
          <p className="hero-subtitle">Discover the perfect home with HavenHub</p>
          <button className="search_btn" onClick={handleSearchNowClick}>
              <span>Search Now</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-title">Why Choose HavenHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Wide Range of Properties</h3>
            <p>Explore a diverse selection of properties tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <h3>Advanced Search Filters</h3>
            <p>Narrow down your options with our powerful search tools.</p>
          </div>
          <div className="feature-card">
            <h3>Expert Guidance</h3>
            <p>Get expert advice from our experienced agents.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"HavenHub made finding our dream home so easy and stress-free!"</p>
            <p className="testimonial-author">- John & Jane Doe</p>
          </div>
          <div className="testimonial-card">
            <p>"The team at HavenHub is professional and very helpful."</p>
            <p className="testimonial-author">- Sarah Smith</p>
          </div>
          <div className="testimonial-card">
            <p>"We found the perfect property within our budget. Highly recommend!"</p>
            <p className="testimonial-author">- Michael Brown</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-title">Ready to Find Your Dream Home?</h2>
        <p className="cta-subtitle">Start your search today with HavenHub.</p>
        <button className="cta-button" onClick={handleSearchNowClick}>
          Search Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;