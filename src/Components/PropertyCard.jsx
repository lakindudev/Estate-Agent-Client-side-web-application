import React from "react";
import { Link } from "react-router-dom";

// PropertyCard component to display individual property details
function PropertyCard({ property, onToggleFavorite, isFavorite }) {
  // Function to handle the drag start event
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property)); // Set the property data for drag-and-drop
  };

  return (
    <div 
      className="property-card"
      draggable 
      onDragStart={handleDragStart}
    >
      <div className="property-card-image-wrapper">
        <img
          src={property.picture || "/images/house/prop1.jpg"}
          alt={property.type}
          className="property-card-image"
        />
        <div className="property-card-badge">
          <span>{property.type}</span>
        </div>
        <button
          className={`property-card-favorite ${isFavorite ? "is-favorite" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onToggleFavorite(property);
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>
      
      <div className="property-card-content">
        <h3 className="property-card-title">{property.thumbnail}</h3>
        
        <div className="property-card-price">
          <span>£{property.price.toLocaleString()}</span>
        </div>
        
        <div className="property-card-details">
          <div className="property-card-detail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{property.location}</span>
          </div>
          <div className="property-card-detail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{property.bedrooms} Bedrooms</span>
          </div>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="property-card-button"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
