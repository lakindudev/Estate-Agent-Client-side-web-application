import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import SearchForm from './SearchForm.jsx';
import { TextGenerateEffect } from './TextGenerateEffect';
import { InfiniteMovingCards } from './InfiniteMovingCards';

function HomePage({ onSearch }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the "Search Now" button click
  const handleSearchNowClick = () => {
    navigate('/favorites'); // Navigate to the /favorites route
  };

  const testimonials = [
    {
      quote: "HavenHub made finding our dream home so easy and stress-free!",
      name: "John & Jane Doe",
      title: "Homeowners"
    },
    {
      quote: "The team at HavenHub is professional and very helpful.",
      name: "Sarah Smith",
      title: "Property Investor"
    },
    {
      quote: "We found the perfect property within our budget. Highly recommend!",
      name: "Michael Brown",
      title: "First-time Buyer"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
        <TextGenerateEffect
          words="Find Your Dream Property"
          className="!text-6xl !font-bold !mb-4 !text-white"
        />
        <TextGenerateEffect
          words="Discover the perfect home with HavenHub"
          className="!text-2xl !text-gray-200 !mb-8" 
          duration={0.3}
        />
          <button 
            onClick={handleSearchNowClick}
            className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Search Now
            </span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
      <TextGenerateEffect
          words="Why Choose HavenHub?"
          className="!text-5xl !font-bold !mb-8 !text-slate-800"
          duration={0.5}
      />
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
      <TextGenerateEffect
  words="What Our Clients Say"
  className="!text-5xl !font-bold !mb-8 !text-slate-900"
  duration={0.5}
/>
        <div className="testimonials-grid">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
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